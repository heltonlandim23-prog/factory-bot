module.exports = {
    names: {
        // Recursos brutos T2
        hardwood: "Madeira Dura",
        gold_ore: "Minério de Ouro",

        // Mineradoras / Coletores T2
        t1_hardwood_harvester: "Coletor de Madeira Dura T1",
        t2_hardwood_harvester: "Coletor de Madeira Dura T2",

        t1_gold_miner: "Mineradora de Ouro T1",
        t2_gold_miner: "Mineradora de Ouro T2",

        // Máquinas T2
        t2_cutter: "Cortador T2",
        t2_press: "Prensa T2",
        t2_furnace: "Fornalha T2",
        t2_extruder: "Extrusora T2",
        t2_assembler: "Montadora T2",
        t2_dual_assembler: "Montadora Dupla T2",

        // Itens T2
        hardwood_boards: "Tábuas de Madeira Dura",
        pressurized_hardwood: "Madeira Dura Pressurizada",
        hardwood_table: "Mesa de Madeira Dura",

        gold_ingot: "Lingote de Ouro",
        gold_plate: "Placa de Ouro",
        gold_wire: "Fio de Ouro",

        iron_wire: "Fio de Ferro",
        copper_gear: "Engrenagem de Cobre",
        basic_circuit: "Circuito Básico",

        stone_bricks: "Tijolos de Pedra",
        wood_table: "Mesa de Madeira",
        ornate_wood_table: "Mesa de Madeira Ornamentada",

        mechanical_assembly: "Montagem Mecânica",
        advanced_circuit: "Circuito Avançado"
    },

    rawResources: {
        hardwood: {
            miners: {
                normal: "t1_hardwood_harvester",
                advanced: "t2_hardwood_harvester"
            }
        },

        gold_ore: {
            miners: {
                normal: "t1_gold_miner",
                advanced: "t2_gold_miner"
            }
        }
    },

    recipes: {
        hardwood_boards: {
            tier: 2,
            machine: "t2_cutter",
            outputPerMinute: 60,
            ingredients: {
                hardwood: 1
            }
        },

        pressurized_hardwood: {
            tier: 2,
            machine: "t2_press",
            outputPerMinute: 60,
            ingredients: {
                hardwood_boards: 1
            }
        },

        hardwood_table: {
            tier: 2,
            machine: "t2_assembler",
            outputPerMinute: 60,
            ingredients: {
                pressurized_hardwood: 1
            }
        },

        gold_ingot: {
            tier: 2,
            machine: "t2_furnace",
            outputPerMinute: 60,
            ingredients: {
                gold_ore: 1
            }
        },

        gold_plate: {
            tier: 2,
            machine: "t2_press",
            outputPerMinute: 60,
            ingredients: {
                gold_ingot: 1
            }
        },

        gold_wire: {
            tier: 2,
            machine: "t2_extruder",
            outputPerMinute: 60,
            ingredients: {
                gold_ingot: 1
            }
        },

        iron_wire: {
            tier: 2,
            machine: "t2_extruder",
            outputPerMinute: 60,
            ingredients: {
                iron_ingot: 1
            }
        },

        copper_gear: {
            tier: 2,
            machine: "t2_assembler",
            outputPerMinute: 60,
            ingredients: {
                copper_plate: 1
            }
        },

        basic_circuit: {
            tier: 2,
            machine: "t2_assembler",
            outputPerMinute: 60,
            ingredients: {
                copper_wire: 1
            }
        },

        stone_bricks: {
            tier: 2,
            machine: "t2_assembler",
            outputPerMinute: 60,
            ingredients: {
                rock: 1
            }
        },

        wood_table: {
            tier: 2,
            machine: "t2_assembler",
            outputPerMinute: 60,
            ingredients: {
                wood: 1
            }
        },

        ornate_wood_table: {
            tier: 2,
            machine: "t2_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                wood_table: 1,
                stone_bricks: 1
            }
        },

        mechanical_assembly: {
            tier: 2,
            machine: "t2_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                iron_plate: 1,
                copper_gear: 1
            }
        },

        advanced_circuit: {
            tier: 2,
            machine: "t2_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                gold_wire: 1,
                basic_circuit: 1
            }
        }
    },

    prices: {
        hardwood_boards: { tier: 2, price: 40 },
        pressurized_hardwood: { tier: 2, price: 80 },
        hardwood_table: { tier: 2, price: 160 },

        gold_ingot: { tier: 2, price: 50 },
        gold_plate: { tier: 2, price: 100 },
        gold_wire: { tier: 2, price: 120 },

        iron_wire: { tier: 2, price: 80 },
        copper_gear: { tier: 2, price: 90 },
        basic_circuit: { tier: 2, price: 140 },

        stone_bricks: { tier: 2, price: 60 },
        wood_table: { tier: 2, price: 90 },
        ornate_wood_table: { tier: 2, price: 250 },

        mechanical_assembly: { tier: 2, price: 300 },
        advanced_circuit: { tier: 2, price: 400 }
    }
};