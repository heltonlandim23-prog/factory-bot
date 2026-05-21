const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bot online");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor web ativo");
});

const pt = require("./languages/pt.json");
const en = require("./languages/en.json");
const es = require("./languages/es.json");

const languages = { pt, en, es };

let currentLanguage = "pt";
const lang = languages[currentLanguage];

require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

// =========================================
// FACTORY SIMULATOR CALCULATOR BOT
// index.js = SOMENTE O MOTOR DO BOT
// Os tiers ficam em: ./data/tier1.js, ./data/tier2.js...
// =========================================

const TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const MAX_MESSAGE_LENGTH = 1900;

const MINER_TYPES = {
    normal: {
        label: "🟨 Normal",
        outputPerMinute: 6
    },

    advanced: {
        label: "🟩 Avançada",
        outputPerMinute: 12
    }
};

// Banco global carregado pelos arquivos de tier
const names = {};
const rawResources = {};
const recipes = {};
const prices = {};

// =========================================
// CARREGAR TIERS
// =========================================

function loadTier(tierData) {
    Object.assign(names, tierData.names || {});
    Object.assign(rawResources, tierData.rawResources || {});
    Object.assign(recipes, tierData.recipes || {});
    Object.assign(prices, tierData.prices || {});
}

function safeLoadTier(path) {
    try {
        const tierData = require(path);
        loadTier(tierData);
        console.log(`✅ Carregado: ${path}`);
    } catch {
        console.log(`⚠️ Não encontrado: ${path}`);
    }
}

safeLoadTier("./data/tier1");
safeLoadTier("./data/tier2");
safeLoadTier("./data/tier3");
safeLoadTier("./data/tier4");
safeLoadTier("./data/tier5");
safeLoadTier("./data/tier6");
safeLoadTier("./data/tier7");
safeLoadTier("./data/tier8");
safeLoadTier("./data/tier9");
safeLoadTier("./data/tier10");

// =========================================
// UTILIDADES
// =========================================

function t(key) {
    return names[key] || key;
}

function addToMap(map, key, amount) {
    if (!key) return;
    map[key] = (map[key] || 0) + amount;
}

function formatNumber(value) {
    if (value === undefined || value === null || isNaN(value)) return "0";

    value = Number(value);

    if (Number.isInteger(value)) return String(value);

    return value.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

function formatMoney(value) {
    if (!value) return "0";
    if (typeof value === "string") return value;
    return formatNumber(value);
}

// =========================================
// CALCULADORA RECURSIVA
// =========================================

function calculateFactory(item, ratePerMinute) {
    const result = {
    item,
    ratePerMinute,
    machines: {},
    minersNormal: {},
    minersAdvanced: {},
    rawMaterials: {},
    steps: [],
    balance: [],
    warnings: []
};

    const visiting = new Set();

    function walk(currentItem, requiredRate, depth = 0) {
        if (visiting.has(currentItem)) {
            result.warnings.push(`Loop detectado em ${currentItem}.`);
            return;
        }

        const recipe = recipes[currentItem];

        if (recipe) {
            visiting.add(currentItem);

            const machineCount = Math.ceil(requiredRate / recipe.outputPerMinute);

            addToMap(result.machines, recipe.machine, machineCount);

            result.steps.push({
                depth,
                item: currentItem,
                rate: requiredRate,
                machine: recipe.machine,
                machineCount,
                tier: recipe.tier,
                outputPerMinute: recipe.outputPerMinute,
                raw: false,
                ingredients: recipe.ingredients || {}
            });

            for (const [ingredient, amountPerItem] of Object.entries(recipe.ingredients || {})) {
    const ingredientRate = requiredRate * amountPerItem;

    const raw = rawResources[ingredient];

    if (raw) {
        const normalMiner = raw.miners?.normal;
        const advancedMiner = raw.miners?.advanced;

        const normalCount = Math.ceil(ingredientRate / MINER_TYPES.normal.outputPerMinute);
        const advancedCount = Math.ceil(ingredientRate / MINER_TYPES.advanced.outputPerMinute);

        result.balance.push({
            machine: recipe.machine,
            producedItem: currentItem,
            producedRate: requiredRate,
            machineCount: machineCount,

            rawItem: ingredient,
            rawRate: ingredientRate,

            normal: {
                miner: normalMiner,
                total: normalCount,
                perMachine: normalCount / machineCount
            },

            advanced: {
                miner: advancedMiner,
                total: advancedCount,
                perMachine: advancedCount / machineCount
            }
        });
    }

    walk(ingredient, ingredientRate, depth + 1);
}

            visiting.delete(currentItem);
            return;
        }

        const raw = rawResources[currentItem];

        if (raw) {
            addToMap(result.rawMaterials, currentItem, requiredRate);

            const normalMiner = raw.miners?.normal;
            const advancedMiner = raw.miners?.advanced;

            const normalCount = Math.ceil(requiredRate / MINER_TYPES.normal.outputPerMinute);
            const advancedCount = Math.ceil(requiredRate / MINER_TYPES.advanced.outputPerMinute);

            addToMap(result.minersNormal, normalMiner, normalCount);
            addToMap(result.minersAdvanced, advancedMiner, advancedCount);

            result.steps.push({
                depth,
                item: currentItem,
                rate: requiredRate,
                raw: true,
                miners: {
                    normal: {
                        label: MINER_TYPES.normal.label,
                        machine: normalMiner,
                        count: normalCount,
                        outputPerMinute: MINER_TYPES.normal.outputPerMinute
                    },
                    advanced: {
                        label: MINER_TYPES.advanced.label,
                        machine: advancedMiner,
                        count: advancedCount,
                        outputPerMinute: MINER_TYPES.advanced.outputPerMinute
                    }
                }
            });

            return;
        }

        result.warnings.push(`Item sem receita e sem mineradora: ${currentItem}`);
        addToMap(result.rawMaterials, currentItem, requiredRate);
    }

    walk(item, ratePerMinute);
    return result;
}

// =========================================
// FORMATADOR DO RELATÓRIO
// =========================================

function renderFactoryReport(result) {
    const recipe = recipes[result.item];
    const price = prices[result.item]?.price || prices[result.item] || 0;
    const profit = Number(price) ? Number(price) * result.ratePerMinute : 0;

    let out = "";

    out += "```txt\n";
    out += "════════════════════════════════════\n";
    out += "🏭 FACTORY CALCULATOR\n";
    out += "════════════════════════════════════\n\n";

    out += `📦 Item: ${t(result.item)}\n`;
    out += `⚙️ Código: ${result.item}\n`;
    out += `📈 Produção desejada: ${formatNumber(result.ratePerMinute)}/min\n`;

    if (recipe) out += `⭐ Tier: T${recipe.tier}\n`;

    if (price) {
        out += `💰 Valor unitário: ${formatMoney(price)}\n`;
        if (profit) out += `💵 Lucro bruto/min: ${formatMoney(profit)}\n`;
    }

    out += "\n";

    out += "────────────────────────────────────\n";
    out += "🏭 MÁQUINAS NECESSÁRIAS\n";

    const machineEntries = Object.entries(result.machines || {});
    if (machineEntries.length === 0) {
        out += "Nenhuma máquina necessária.\n";
    } else {
        for (const [machine, count] of machineEntries) {
            out += `├─ ${t(machine)} ×${formatNumber(count)}\n`;
        }
    }

    out += "\n";

    out += "────────────────────────────────────\n";
    out += "⛏️ MINERADORAS / COLETORES\n\n";

    out += `${MINER_TYPES.normal.label}:\n`;
    const normalEntries = Object.entries(result.minersNormal || {});
    if (normalEntries.length === 0) {
        out += "├─ Nenhuma\n";
    } else {
        for (const [miner, count] of normalEntries) {
            out += `├─ ${t(miner)} ×${formatNumber(count)}\n`;
        }
    }

    out += "\n";

    out += `${MINER_TYPES.advanced.label}:\n`;
    const advancedEntries = Object.entries(result.minersAdvanced || {});
    if (advancedEntries.length === 0) {
        out += "├─ Nenhuma\n";
    } else {
        for (const [miner, count] of advancedEntries) {
            out += `├─ ${t(miner)} ×${formatNumber(count)}\n`;
        }
    }

    out += "\n";

    out += "────────────────────────────────────\n";
    out += "🌳 RECURSOS BRUTOS POR MINUTO\n";

    const rawEntries = Object.entries(result.rawMaterials || {});
    if (rawEntries.length === 0) {
        out += "Nenhum recurso bruto necessário.\n";
    } else {
        for (const [raw, rate] of rawEntries) {
            out += `├─ ${t(raw)}: ${formatNumber(rate)}/min\n`;
        }
    }

    out += "\n";

out += "⚖️ BALANCEAMENTO POR MÁQUINA\n";

if (!result.balance || result.balance.length === 0) {
    out += "Nenhum balanceamento direto encontrado.\n\n";
} else {
    for (const entry of result.balance) {
        out += `🏭 ${t(entry.machine)} ×${formatNumber(entry.machineCount)}\n`;
        out += `└─ Para produzir ${t(entry.producedItem)} — ${formatNumber(entry.producedRate)}/min\n`;
        out += `   ├─ Usa ${t(entry.rawItem)} — ${formatNumber(entry.rawRate)}/min\n`;
        out += `   ├─ ${MINER_TYPES.normal.label}: ${formatNumber(entry.normal.perMachine)} ${t(entry.normal.miner)} por máquina\n`;
        out += `   └─ ${MINER_TYPES.advanced.label}: ${formatNumber(entry.advanced.perMachine)} ${t(entry.advanced.miner)} por máquina\n\n`;
    }
}

    out += "────────────────────────────────────\n";
    out += "🔩 FLUXO DE PRODUÇÃO\n";

    const reversedSteps = [...result.steps].reverse();

    reversedSteps.forEach((step, index) => {
        const isLast = index === reversedSteps.length - 1;

        if (step.raw) {
            out += `⛏️ ${t(step.item)} — ${formatNumber(step.rate)}/min\n`;

            if (step.miners?.normal?.machine) {
                out += `├─ ${MINER_TYPES.normal.label}: ${t(step.miners.normal.machine)} ×${formatNumber(step.miners.normal.count)}\n`;
            }

            if (step.miners?.advanced?.machine) {
                out += `└─ ${MINER_TYPES.advanced.label}: ${t(step.miners.advanced.machine)} ×${formatNumber(step.miners.advanced.count)}\n`;
            }
        } else {
            out += `🏭 ${t(step.machine)} ×${formatNumber(step.machineCount)}\n`;
            out += `└─ ⚙️ ${t(step.item)} — ${formatNumber(step.rate)}/min\n`;
        }

        if (!isLast) out += "        ↓\n";
    });

    if (result.warnings.length > 0) {
        out += "\n";
        out += "⚠️ AVISOS\n";
        out += "────────────────────────────────────\n";

        for (const warning of result.warnings) {
            out += `- ${warning}\n`;
        }
    }

    out += "```";
    return out;
}

// =========================================
// DIVIDIR MENSAGEM GRANDE
// =========================================

function splitMessage(text, maxLength = MAX_MESSAGE_LENGTH) {
    const parts = [];
    let current = "";

    for (const line of String(text).split("\n")) {
        if ((current + "\n" + line).length > maxLength) {
            if (current.trim()) parts.push(current);
            current = line;
        } else {
            current += (current ? "\n" : "") + line;
        }
    }

    if (current.trim()) parts.push(current);
    return parts;
}

async function sendLongMessage(channel, text) {
    const parts = splitMessage(text);

    for (const part of parts) {
        await channel.send(part);
    }
}

// =========================================
// COMANDOS DO DISCORD
// =========================================

client.once("ready", () => {
    console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const content = message.content.trim();

    if (content === "!ping") {
        return message.reply("pong");
    }

    if (content === "!help") {
    return message.reply([
        "```txt",
        lang.help_title,
        "",
        "!ping",
        "!help",
        "!itens",
        "!tier 1",
        "!calc iron_plate 60",
        "",
        lang.help_description,
        "```"
    ].join("\n"));
}

    if (content === "!itens") {
        let text = "```txt\nITENS CADASTRADOS:\n\n";

        const items = Object.keys(recipes).sort();

        if (items.length === 0) {
            text += "Nenhum item cadastrado ainda.\n";
        } else {
            for (const item of items) {
                text += `- ${t(item)} = ${item}\n`;
            }
        }

        text += "```";
        return sendLongMessage(message.channel, text);
    }

    if (content.startsWith("!tier")) {
        const args = content.split(/\s+/);
        const tier = Number(args[1]);

        if (!tier || tier < 1 || tier > 10) {
            return message.reply("Use assim: `!tier 1` até `!tier 10`");
        }

        let text = `\`\`\`txt\nITENS DO TIER ${tier}:\n\n`;

        const items = Object.keys(recipes)
            .filter(item => recipes[item].tier === tier)
            .sort();

        if (items.length === 0) {
            text += "Nenhum item cadastrado ainda.\n";
        } else {
            for (const item of items) {
                text += `- ${t(item)} = ${item}\n`;
            }
        }

        text += "```";
        return sendLongMessage(message.channel, text);
    }

    if (content.startsWith("!calc")) {
        const args = content.split(/\s+/);
        const item = args[1];
        const amount = Number(args[2]);

        if (!item || !amount || amount <= 0) {
            return message.reply("Use assim: `!calc item quantidade_por_minuto`\nExemplo: `!calc iron_plate 60`");
        }

        if (!recipes[item] && !rawResources[item]) {
            return message.reply(`❌ Não encontrei \`${item}\`.\nUse \`!itens\` para ver os itens cadastrados.`);
        }

        const result = calculateFactory(item, amount);
        const report = renderFactoryReport(result);

        return sendLongMessage(message.channel, report);
    }
});

client.login(TOKEN);
