module.exports = {
    names: {
        // Recursos brutos T4
        ultrawood: "Ultra Madeira",
        tungsten_ore: "Minério de Tungstênio",
        redmetal_ore: "Minério de Metal Vermelho",
        bluemetal_ore: "Minério de Metal Azul",
        lava_crystal: "Cristal de Lava",
        ice_crystal: "Cristal de Gelo",

        // Mineradoras / Coletores T4
        t1_ultrawood_harvester: "Coletor de Ultra Madeira T1",
        t2_ultrawood_harvester: "Coletor de Ultra Madeira T2",

        t1_tungsten_miner: "Mineradora de Tungstênio T1",
        t2_tungsten_miner: "Mineradora de Tungstênio T2",

        t1_redmetal_miner: "Mineradora de Metal Vermelho T1",
        t2_redmetal_miner: "Mineradora de Metal Vermelho T2",

        t1_bluemetal_miner: "Mineradora de Metal Azul T1",
        t2_bluemetal_miner: "Mineradora de Metal Azul T2",

        t1_lava_crystal_miner: "Mineradora de Cristal de Lava T1",
        t2_lava_crystal_miner: "Mineradora de Cristal de Lava T2",

        t1_ice_crystal_miner: "Mineradora de Cristal de Gelo T1",
        t2_ice_crystal_miner: "Mineradora de Cristal de Gelo T2",

        // Máquinas T4
        t4_cutter: "Cortador T4",
        t4_press: "Prensa T4",
        t4_furnace: "Fornalha T4",
        t4_extruder: "Extrusora T4",
        t4_laser_cutter: "Cortador a Laser T4",
        t4_assembler: "Montadora T4",
        t4_dual_assembler: "Montadora Dupla T4",

        // Madeira T4
        ultrawood_boards: "Tábuas de Ultra Madeira",
        pressurized_ultrawood: "Ultra Madeira Pressurizada",
        ultrawood_table: "Mesa de Ultra Madeira",
        red_ultra_boards: "Tábuas Ultra Vermelhas",
        blue_ultra_boards: "Tábuas Ultra Azuis",

        // Tungstênio
        tungsten_ingot: "Lingote de Tungstênio",
        tungsten_plate: "Placa de Tungstênio",
        tungsten_wire: "Fio de Tungstênio",
        tungsten_gear: "Engrenagem de Tungstênio",

        // Metal vermelho
        redmetal_ingot: "Lingote de Metal Vermelho",
        redmetal_plate: "Placa de Metal Vermelho",
        redmetal_wire: "Fio de Metal Vermelho",
        redmetal_gear: "Engrenagem de Metal Vermelho",

        // Metal azul
        bluemetal_ingot: "Lingote de Metal Azul",
        bluemetal_plate: "Placa de Metal Azul",
        bluemetal_wire: "Fio de Metal Azul",
        bluemetal_gear: "Engrenagem de Metal Azul",

        // Aços
        redsteel_ingot: "Lingote de Aço Vermelho",
        redsteel_plate: "Placa de Aço Vermelho",
        redsteel_gear: "Engrenagem de Aço Vermelho",

        bluesteel_ingot: "Lingote de Aço Azul",
        bluesteel_plate: "Placa de Aço Azul",
        bluesteel_gear: "Engrenagem de Aço Azul",

        // Cristais / Gemas
        lava_gem: "Gema de Lava",
        ice_gem: "Gema de Gelo",
        obsidian_gem: "Gema de Obsidiana",

        // Vidros / Amuletos / Avançados
        fire_glass: "Vidro de Fogo",
        ice_glass: "Vidro de Gelo",
        lesser_lava_charm: "Amuleto Menor de Lava",
        greater_lava_charm: "Amuleto Maior de Lava",
        ice_charm: "Amuleto de Gelo",
        obsidian_charm: "Amuleto de Obsidiana",

        obsidian_alloy_plate: "Placa de Liga de Obsidiana",
        obsidian_alloy_gear: "Engrenagem de Liga de Obsidiana",

        advanced_fuel_rod: "Barra de Combustível Avançada",
        advanced_mechanical_assembly: "Montagem Mecânica Avançada"
    },

    rawResources: {
        ultrawood: {
            miners: {
                normal: "t1_ultrawood_harvester",
                advanced: "t2_ultrawood_harvester"
            }
        },

        tungsten_ore: {
            miners: {
                normal: "t1_tungsten_miner",
                advanced: "t2_tungsten_miner"
            }
        },

        redmetal_ore: {
            miners: {
                normal: "t1_redmetal_miner",
                advanced: "t2_redmetal_miner"
            }
        },

        bluemetal_ore: {
            miners: {
                normal: "t1_bluemetal_miner",
                advanced: "t2_bluemetal_miner"
            }
        },

        lava_crystal: {
            miners: {
                normal: "t1_lava_crystal_miner",
                advanced: "t2_lava_crystal_miner"
            }
        },

        ice_crystal: {
            miners: {
                normal: "t1_ice_crystal_miner",
                advanced: "t2_ice_crystal_miner"
            }
        }
    },

    recipes: {
        // Ultra madeira
        ultrawood_boards: {
            tier: 4,
            machine: "t4_cutter",
            outputPerMinute: 60,
            ingredients: {
                ultrawood: 1
            }
        },

        pressurized_ultrawood: {
            tier: 4,
            machine: "t4_press",
            outputPerMinute: 60,
            ingredients: {
                ultrawood_boards: 1
            }
        },

        ultrawood_table: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                pressurized_ultrawood: 1
            }
        },

        // Tungstênio
        tungsten_ingot: {
            tier: 4,
            machine: "t4_furnace",
            outputPerMinute: 60,
            ingredients: {
                tungsten_ore: 1
            }
        },

        tungsten_plate: {
            tier: 4,
            machine: "t4_press",
            outputPerMinute: 60,
            ingredients: {
                tungsten_ingot: 1
            }
        },

        tungsten_wire: {
            tier: 4,
            machine: "t4_extruder",
            outputPerMinute: 60,
            ingredients: {
                tungsten_ingot: 1
            }
        },

        tungsten_gear: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                tungsten_plate: 1
            }
        },

        // Metal vermelho
        redmetal_ingot: {
            tier: 4,
            machine: "t4_furnace",
            outputPerMinute: 60,
            ingredients: {
                redmetal_ore: 1
            }
        },

        redmetal_plate: {
            tier: 4,
            machine: "t4_press",
            outputPerMinute: 60,
            ingredients: {
                redmetal_ingot: 1
            }
        },

        redmetal_wire: {
            tier: 4,
            machine: "t4_extruder",
            outputPerMinute: 60,
            ingredients: {
                redmetal_ingot: 1
            }
        },

        redmetal_gear: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                redmetal_plate: 1
            }
        },

        // Metal azul
        bluemetal_ingot: {
            tier: 4,
            machine: "t4_furnace",
            outputPerMinute: 60,
            ingredients: {
                bluemetal_ore: 1
            }
        },

        bluemetal_plate: {
            tier: 4,
            machine: "t4_press",
            outputPerMinute: 60,
            ingredients: {
                bluemetal_ingot: 1
            }
        },

        bluemetal_wire: {
            tier: 4,
            machine: "t4_extruder",
            outputPerMinute: 60,
            ingredients: {
                bluemetal_ingot: 1
            }
        },

        bluemetal_gear: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                bluemetal_plate: 1
            }
        },

        // Aços
        redsteel_ingot: {
            tier: 4,
            machine: "t4_furnace",
            outputPerMinute: 60,
            ingredients: {
                redmetal_ingot: 1
            }
        },

        redsteel_plate: {
            tier: 4,
            machine: "t4_press",
            outputPerMinute: 60,
            ingredients: {
                redsteel_ingot: 1
            }
        },

        redsteel_gear: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                redsteel_plate: 1
            }
        },

        bluesteel_ingot: {
            tier: 4,
            machine: "t4_furnace",
            outputPerMinute: 60,
            ingredients: {
                bluemetal_ingot: 1
            }
        },

        bluesteel_plate: {
            tier: 4,
            machine: "t4_press",
            outputPerMinute: 60,
            ingredients: {
                bluesteel_ingot: 1
            }
        },

        bluesteel_gear: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                bluesteel_plate: 1
            }
        },

        // Gemas
        lava_gem: {
            tier: 4,
            machine: "t4_laser_cutter",
            outputPerMinute: 60,
            ingredients: {
                lava_crystal: 1
            }
        },

        ice_gem: {
            tier: 4,
            machine: "t4_laser_cutter",
            outputPerMinute: 60,
            ingredients: {
                ice_crystal: 1
            }
        },

        obsidian_gem: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                lava_gem: 1,
                ice_gem: 1
            }
        },

        // Compostos
        fire_glass: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                lava_gem: 1,
                glass_panes: 1
            }
        },

        ice_glass: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                ice_gem: 1,
                glass_panes: 1
            }
        },

        lesser_lava_charm: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                lava_gem: 1,
                gold_plate: 1
            }
        },

        greater_lava_charm: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                redsteel_plate: 1,
                lava_gem: 1
            }
        },

        ice_charm: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                ice_gem: 1,
                bluesteel_plate: 1
            }
        },

        red_ultra_boards: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                ultrawood_boards: 1,
                redmetal_plate: 1
            }
        },

        blue_ultra_boards: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                ultrawood_boards: 1,
                bluemetal_plate: 1
            }
        },

        obsidian_alloy_plate: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                redsteel_plate: 1,
                bluesteel_plate: 1
            }
        },

        obsidian_alloy_gear: {
            tier: 4,
            machine: "t4_assembler",
            outputPerMinute: 60,
            ingredients: {
                obsidian_alloy_plate: 1
            }
        },

        obsidian_charm: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                obsidian_gem: 1,
                tungsten_plate: 1
            }
        },

        advanced_fuel_rod: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                fuel_rod: 1
            }
        },

        advanced_mechanical_assembly: {
            tier: 4,
            machine: "t4_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                tungsten_plate: 1,
                obsidian_alloy_gear: 1
            }
        }
    },

    prices: {
        ultrawood_boards: { tier: 4, price: 2500 },
        pressurized_ultrawood: { tier: 4, price: 3500 },
        ultrawood_table: { tier: 4, price: 5000 },

        tungsten_ingot: { tier: 4, price: 2500 },
        tungsten_plate: { tier: 4, price: 3500 },
        tungsten_wire: { tier: 4, price: 3700 },
        tungsten_gear: { tier: 4, price: 5000 },

        redmetal_ingot: { tier: 4, price: 2500 },
        redmetal_plate: { tier: 4, price: 3500 },
        redmetal_wire: { tier: 4, price: 3700 },
        redmetal_gear: { tier: 4, price: 5000 },

        bluemetal_ingot: { tier: 4, price: 2500 },
        bluemetal_plate: { tier: 4, price: 3500 },
        bluemetal_wire: { tier: 4, price: 3700 },
        bluemetal_gear: { tier: 4, price: 5000 },

        redsteel_ingot: { tier: 4, price: 4500 },
        redsteel_plate: { tier: 4, price: 6000 },
        redsteel_gear: { tier: 4, price: 8000 },

        bluesteel_ingot: { tier: 4, price: 4500 },
        bluesteel_plate: { tier: 4, price: 6000 },
        bluesteel_gear: { tier: 4, price: 8000 },

        lava_gem: { tier: 4, price: 6000 },
        ice_gem: { tier: 4, price: 6000 },
        obsidian_gem: { tier: 4, price: 12000 },

        fire_glass: { tier: 4, price: 10000 },
        ice_glass: { tier: 4, price: 10000 },
        lesser_lava_charm: { tier: 4, price: 12000 },
        greater_lava_charm: { tier: 4, price: 20000 },
        ice_charm: { tier: 4, price: 20000 },
        obsidian_charm: { tier: 4, price: 30000 },

        red_ultra_boards: { tier: 4, price: 8000 },
        blue_ultra_boards: { tier: 4, price: 8000 },
        obsidian_alloy_plate: { tier: 4, price: 15000 },
        obsidian_alloy_gear: { tier: 4, price: 20000 },

        advanced_fuel_rod: { tier: 4, price: 15000 },
        advanced_mechanical_assembly: { tier: 4, price: 35000 }
    }
};