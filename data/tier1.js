module.exports = {
    names: {
        wood: "Madeira",
        rock: "Pedra",
        sand: "Areia",
        iron_ore: "Minério de Ferro",
        copper_ore: "Minério de Cobre",

        t1_tree_harvester: "Coletor de Madeira T1",
        t2_tree_harvester: "Coletor de Madeira T2",

        t1_rock_miner: "Mineradora de Pedra T1",
        t2_rock_miner: "Mineradora de Pedra T2",

        t1_sand_miner: "Mineradora de Areia T1",
        t2_sand_miner: "Mineradora de Areia T2",

        t1_iron_miner: "Mineradora de Ferro T1",
        t2_iron_miner: "Mineradora de Ferro T2",

        t1_copper_miner: "Mineradora de Cobre T1",
        t2_copper_miner: "Mineradora de Cobre T2",

        t1_furnace: "Fornalha T1",
        t1_press: "Prensa T1",
        t1_assembler: "Montadora T1",
        t1_extruder: "Extrusora T1",

        iron_ingot: "Lingote de Ferro",
        iron_plate: "Placa de Ferro",
        iron_gear: "Engrenagem de Ferro",

        copper_ingot: "Lingote de Cobre",
        copper_plate: "Placa de Cobre",
        copper_wire: "Fio de Cobre"
    },

    rawResources: {
        wood: {
            miners: {
                normal: "t1_tree_harvester",
                advanced: "t2_tree_harvester"
            }
        },

        rock: {
            miners: {
                normal: "t1_rock_miner",
                advanced: "t2_rock_miner"
            }
        },

        sand: {
            miners: {
                normal: "t1_sand_miner",
                advanced: "t2_sand_miner"
            }
        },

        iron_ore: {
            miners: {
                normal: "t1_iron_miner",
                advanced: "t2_iron_miner"
            }
        },

        copper_ore: {
            miners: {
                normal: "t1_copper_miner",
                advanced: "t2_copper_miner"
            }
        }
    },

    recipes: {
        iron_ingot: {
            tier: 1,
            machine: "t1_furnace",
            outputPerMinute: 60,
            ingredients: {
                iron_ore: 1
            }
        },

        iron_plate: {
            tier: 1,
            machine: "t1_press",
            outputPerMinute: 60,
            ingredients: {
                iron_ingot: 1
            }
        },

        iron_gear: {
            tier: 1,
            machine: "t1_assembler",
            outputPerMinute: 60,
            ingredients: {
                iron_plate: 1
            }
        },

        copper_ingot: {
            tier: 1,
            machine: "t1_furnace",
            outputPerMinute: 60,
            ingredients: {
                copper_ore: 1
            }
        },

        copper_plate: {
            tier: 1,
            machine: "t1_press",
            outputPerMinute: 60,
            ingredients: {
                copper_ingot: 1
            }
        },

        copper_wire: {
            tier: 1,
            machine: "t1_extruder",
            outputPerMinute: 60,
            ingredients: {
                copper_ingot: 1
            }
        }
    },

    prices: {
        iron_ingot: { tier: 1, price: 10 },
        iron_plate: { tier: 1, price: 20 },
        iron_gear: { tier: 1, price: 35 },

        copper_ingot: { tier: 1, price: 10 },
        copper_plate: { tier: 1, price: 20 },
        copper_wire: { tier: 1, price: 25 }
    }
};