const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// ================================
// TOKEN
// ================================

const TOKEN = process.env.DISCORD_TOKEN;

// ================================
// TRADUÇÕES
// ================================

const translations = {

    cosmic_powerglove: "Luva Cósmica",
    amber_plywood: "Compensado de Âmbar",
    cosmic_core: "Núcleo Cósmico",
    cosmic_gyroscope: "Giroscópio Cósmico",
    cosmic_reinforced_mechanism: "Mecanismo Cósmico Reforçado",

    t6_quadruple_assembler: "Montadora Quádrupla T6",

    amber_miner: "Mineradora de Âmbar",
    sanctium_extractor: "Extrator de Sanctium",
    tropical_harvester: "Coletora Tropical"

};

function translate(text) {

    return translations[text] || text;

}

// ================================
// PREÇOS
// ================================

const prices = {

    cosmic_powerglove: {
        tier: 6,
        price: "11N"
    }

};

// ================================
// RECIPES
// ================================

const recipes = {

    cosmic_powerglove: {

        tier: 6,

        machine: "t6_quadruple_assembler",

        outputPerMachine: 60,

        ingredients: {

            amber_plywood: 1,
            cosmic_core: 1,
            cosmic_gyroscope: 1,
            cosmic_reinforced_mechanism: 1

        }

    }

};

// ================================
// RECURSOS BRUTOS
// ================================

const rawResources = {

    amber_plywood: {
        machine: "amber_miner",
        outputPerMachine: 30
    },

    cosmic_core: {
        machine: "sanctium_extractor",
        outputPerMachine: 30
    },

    cosmic_gyroscope: {
        machine: "sanctium_extractor",
        outputPerMachine: 30
    },

    cosmic_reinforced_mechanism: {
        machine: "tropical_harvester",
        outputPerMachine: 30
    }

};

// ================================
// FORMATADOR
// ================================

function renderIndustrialTree(itemName, recipe) {

    let output = "";

    output += "================================\n";
    output += `⚛️ ${translate(itemName).toUpperCase()}\n`;
    output += `📦 ${recipe.outputPerMachine}/min\n`;
    output += "================================\n\n";

    output += `🏭 Máquina: ${translate(recipe.machine)}\n`;
    output += `⭐ Tier: T${recipe.tier}\n`;
    output += `💰 Valor: ${prices[itemName].price}\n\n`;

    output += "🔩 Ingredientes:\n\n";

    const ingredients = Object.entries(recipe.ingredients);

    ingredients.forEach(([ingredient, amount], index) => {

        const isLast = index === ingredients.length - 1;

        output += `${isLast ? "└" : "├"}─ ⚙️ ${translate(ingredient)} ×${amount}\n`;

    });

    return output;

}

// ================================
// MINERADORAS
// ================================

function calculateMiners(recipe) {

    let text = "";

    text += "\n⛏️ Mineradoras:\n\n";

    for (const ingredient in recipe.ingredients) {

        const raw = rawResources[ingredient];

        if (!raw) continue;

        text += `├─ ${translate(raw.machine)} ×1\n`;

    }

    return text;

}

// ================================
// SHOW CALC
// ================================

function showCalculation(item, amount) {

    const recipe = recipes[item];

    if (!recipe) {

        return "❌ Receita não encontrada.";

    }

    let response = "";

    response += renderIndustrialTree(item, recipe);

    response += calculateMiners(recipe);

    return response;

}

// ================================
// BOT ONLINE
// ================================

client.once("ready", () => {

    console.log(`✅ Bot online como ${client.user.tag}`);

});

// ================================
// COMANDOS
// ================================

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    // ================================
    // PING
    // ================================

    if (message.content === "!ping") {

        return message.reply("pong");

    }

    // ================================
    // ITENS
    // ================================

    if (message.content === "!itens") {

        let itemList = "";

        for (const item in recipes) {

            itemList += `- ${translate(item)} = \`${item}\`\n`;

        }

        return message.reply(itemList);

    }

    // ================================
    // CALC
    // ================================

    if (message.content.startsWith("!calc")) {

        const args = message.content.split(" ");

        const item = args[1];

        const amount = Number(args[2]);

        if (!item || !amount) {

            return message.reply(
                "Use:\n`!calc item quantidade`\n\nExemplo:\n`!calc cosmic_powerglove 60`"
            );

        }

        const result = showCalculation(item, amount);

        return message.reply("```" + result + "```");

    }

});

// ================================
// LOGIN
// ================================

client.login(TOKEN);
