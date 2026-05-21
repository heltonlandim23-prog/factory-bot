module.exports = {
    names: {
        // Recursos brutos T3
        superwood: "Super Madeira",
        resinite_ore: "Minério de Resinita",
        titanium_ore: "Minério de Titânio",
        uranium_ore: "Minério de Urânio",
        diamond: "Diamante",

        // Mineradoras / Coletores T3
        t1_superwood_harvester: "Coletor de Super Madeira T1",
        t2_superwood_harvester: "Coletor de Super Madeira T2",

        t1_resinite_miner: "Mineradora de Resinita T1",
        t2_resinite_miner: "Mineradora de Resinita T2",

        t1_titanium_miner: "Mineradora de Titânio T1",
        t2_titanium_miner: "Mineradora de Titânio T2",

        t1_uranium_miner: "Mineradora de Urânio T1",
        t2_uranium_miner: "Mineradora de Urânio T2",

        t1_diamond_miner: "Mineradora de Diamante T1",
        t2_diamond_miner: "Mineradora de Diamante T2",

        // Máquinas T3
        t3_cutter: "Cortador T3",
        t3_press: "Prensa T3",
        t3_furnace: "Fornalha T3",
        t3_extruder: "Extrusora T3",
        t3_laser_cutter: "Cortador a Laser T3",
        t3_assembler: "Montadora T3",
        t3_dual_assembler: "Montadora Dupla T3",

        // Itens T3
        superwood_boards: "Tábuas de Super Madeira",
        pressurized_superwood: "Super Madeira Pressurizada",
        superwood_table: "Mesa de Super Madeira",

        resinite_ingot: "Lingote de Resinita",
        resinite_plate: "Placa de Resinita",
        resinite_wire: "Fio de Resinita",
        resinite_fibers: "Fibras de Resinita",
        resinite_gear: "Engrenagem de Resinita",
        resinite_mesh: "Malha de Resinita",

        titanium_ingot: "Lingote de Titânio",
        titanium_plate: "Placa de Titânio",
        titanium_wire: "Fio de Titânio",
        titanium_gear: "Engrenagem de Titânio",

        uranium_ingot: "Lingote de Urânio",
        fuel_rod: "Barra de Combustível",

        cut_diamond: "Diamante Cortado",

        living_alloy: "Liga Viva",
        living_alloy_gear: "Engrenagem de Liga Viva",
        reactor_core: "Núcleo de Reator",
        titanium_glass: "Vidro de Titânio",
        diamond_charm: "Amuleto de Diamante",
        living_composite: "Compósito Vivo"
    },

    rawResources: {
        superwood: {
            miners: {
                normal: "t1_superwood_harvester",
                advanced: "t2_superwood_harvester"
            }
        },

        resinite_ore: {
            miners: {
                normal: "t1_resinite_miner",
                advanced: "t2_resinite_miner"
            }
        },

        titanium_ore: {
            miners: {
                normal: "t1_titanium_miner",
                advanced: "t2_titanium_miner"
            }
        },

        uranium_ore: {
            miners: {
                normal: "t1_uranium_miner",
                advanced: "t2_uranium_miner"
            }
        },

        diamond: {
            miners: {
                normal: "t1_diamond_miner",
                advanced: "t2_diamond_miner"
            }
        }
    },

    recipes: {
        // Madeira T3
        superwood_boards: {
            tier: 3,
            machine: "t3_cutter",
            outputPerMinute: 60,
            ingredients: {
                superwood: 1
            }
        },

        pressurized_superwood: {
            tier: 3,
            machine: "t3_press",
            outputPerMinute: 60,
            ingredients: {
                superwood_boards: 1
            }
        },

        superwood_table: {
            tier: 3,
            machine: "t3_assembler",
            outputPerMinute: 60,
            ingredients: {
                pressurized_superwood: 1
            }
        },

        // Resinita
        resinite_ingot: {
            tier: 3,
            machine: "t3_furnace",
            outputPerMinute: 60,
            ingredients: {
                resinite_ore: 1
            }
        },

        resinite_plate: {
            tier: 3,
            machine: "t3_press",
            outputPerMinute: 60,
            ingredients: {
                resinite_ingot: 1
            }
        },

        resinite_wire: {
            tier: 3,
            machine: "t3_extruder",
            outputPerMinute: 60,
            ingredients: {
                resinite_ingot: 1
            }
        },

        resinite_fibers: {
            tier: 3,
            machine: "t3_extruder",
            outputPerMinute: 60,
            ingredients: {
                resinite_wire: 1
            }
        },

        resinite_gear: {
            tier: 3,
            machine: "t3_assembler",
            outputPerMinute: 60,
            ingredients: {
                resinite_plate: 1
            }
        },

        resinite_mesh: {
            tier: 3,
            machine: "t3_assembler",
            outputPerMinute: 60,
            ingredients: {
                resinite_fibers: 1
            }
        },

        // Titânio
        titanium_ingot: {
            tier: 3,
            machine: "t3_furnace",
            outputPerMinute: 60,
            ingredients: {
                titanium_ore: 1
            }
        },

        titanium_plate: {
            tier: 3,
            machine: "t3_press",
            outputPerMinute: 60,
            ingredients: {
                titanium_ingot: 1
            }
        },

        titanium_wire: {
            tier: 3,
            machine: "t3_extruder",
            outputPerMinute: 60,
            ingredients: {
                titanium_ingot: 1
            }
        },

        titanium_gear: {
            tier: 3,
            machine: "t3_assembler",
            outputPerMinute: 60,
            ingredients: {
                titanium_plate: 1
            }
        },

        // Urânio / Diamante
        uranium_ingot: {
            tier: 3,
            machine: "t3_furnace",
            outputPerMinute: 60,
            ingredients: {
                uranium_ore: 1
            }
        },

        fuel_rod: {
            tier: 3,
            machine: "t3_extruder",
            outputPerMinute: 60,
            ingredients: {
                uranium_ingot: 1
            }
        },

        cut_diamond: {
            tier: 3,
            machine: "t3_laser_cutter",
            outputPerMinute: 60,
            ingredients: {
                diamond: 1
            }
        },

        // Compostos T3
        living_alloy: {
            tier: 3,
            machine: "t3_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                titanium_plate: 1,
                resinite_plate: 1
            }
        },

        living_alloy_gear: {
            tier: 3,
            machine: "t3_assembler",
            outputPerMinute: 60,
            ingredients: {
                living_alloy: 1
            }
        },

        reactor_core: {
            tier: 3,
            machine: "t3_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                fuel_rod: 1,
                basic_circuit: 1
            }
        },

        titanium_glass: {
            tier: 3,
            machine: "t3_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                titanium_wire: 1,
                glass_panes: 1
            }
        },

        diamond_charm: {
            tier: 3,
            machine: "t3_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                titanium_plate: 1,
                cut_diamond: 1
            }
        },

        living_composite: {
            tier: 3,
            machine: "t3_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                pressurized_superwood: 1,
                resinite_mesh: 1
            }
        }
    },

    prices: {
        superwood_boards: { tier: 3, price: 200 },
        pressurized_superwood: { tier: 3, price: 350 },
        superwood_table: { tier: 3, price: 600 },

        resinite_ingot: { tier: 3, price: 200 },
        resinite_plate: { tier: 3, price: 350 },
        resinite_wire: { tier: 3, price: 400 },
        resinite_fibers: { tier: 3, price: 500 },
        resinite_gear: { tier: 3, price: 600 },
        resinite_mesh: { tier: 3, price: 800 },

        titanium_ingot: { tier: 3, price: 220 },
        titanium_plate: { tier: 3, price: 380 },
        titanium_wire: { tier: 3, price: 420 },
        titanium_gear: { tier: 3, price: 650 },

        uranium_ingot: { tier: 3, price: 250 },
        fuel_rod: { tier: 3, price: 700 },

        cut_diamond: { tier: 3, price: 700 },

        living_alloy: { tier: 3, price: 1000 },
        living_alloy_gear: { tier: 3, price: 1300 },
        reactor_core: { tier: 3, price: 1500 },
        titanium_glass: { tier: 3, price: 1200 },
        diamond_charm: { tier: 3, price: 1600 },
        living_composite: { tier: 3, price: 1800 }
    }
};