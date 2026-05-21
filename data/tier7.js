module.exports = {
    names: {
        // ================================
        // RECURSOS BRUTOS T7
        // ================================
        coral: "Coral",
        zinc_ore: "Minério de Zinco",
        samarium_ore: "Minério de Samário",
        nickel_ore: "Minério de Níquel",
        cobalt_ore: "Minério de Cobalto",
        turkey: "Peru",
        energy_crystal: "Cristal de Energia",

        // ================================
        // MINERADORAS / COLETORES T7
        // ================================
        t1_coral_harvester: "Coletor de Coral T1",
        t2_coral_harvester: "Coletor de Coral T2",

        t1_zinc_miner: "Mineradora de Zinco T1",
        t2_zinc_miner: "Mineradora de Zinco T2",

        t1_samarium_miner: "Mineradora de Samário T1",
        t2_samarium_miner: "Mineradora de Samário T2",

        t1_nickel_miner: "Mineradora de Níquel T1",
        t2_nickel_miner: "Mineradora de Níquel T2",

        t1_cobalt_miner: "Mineradora de Cobalto T1",
        t2_cobalt_miner: "Mineradora de Cobalto T2",

        t1_turkey_source: "Fonte de Peru T1",
        t2_turkey_source: "Fonte de Peru T2",

        // ================================
        // MÁQUINAS T7
        // ================================
        t7_cutter: "Cortador T7",
        t7_ore_crusher: "Triturador de Minério T7",
        t7_mixer: "Misturador T7",
        t7_press: "Prensa T7",
        t7_induction_smelter: "Fundidora de Indução T7",
        t7_alloy_smelter: "Fundidora de Liga T7",
        t7_extruder: "Extrusora T7",
        t7_rolling_machine: "Laminadora T7",
        t7_gear_press: "Prensa de Engrenagem T7",
        t7_dual_assembler: "Montadora Dupla T7",
        t7_triple_assembler: "Montadora Tripla T7",
        t7_quadruple_assembler: "Montadora Quádrupla T7",

        // ================================
        // ITENS BASE
        // ================================
        coral_rag: "Pano de Coral",
        zinc_gravel: "Cascalho de Zinco",
        samarium_gravel: "Cascalho de Samário",
        nickel_gravel: "Cascalho de Níquel",
        cobalt_gravel: "Cascalho de Cobalto",

        activated_zinc: "Zinco Ativado",
        activated_samarium: "Samário Ativado",
        activated_nickel: "Níquel Ativado",
        activated_cobalt: "Cobalto Ativado",

        pressed_coral: "Coral Prensado",

        // ================================
        // LINGOTES / LIGAS
        // ================================
        zinc_ingot: "Lingote de Zinco",
        samarium_ingot: "Lingote de Samário",
        nickel_ingot: "Lingote de Níquel",
        cobalt_ingot: "Lingote de Cobalto",

        magnet: "Ímã",
        cobalt_alloy: "Liga de Cobalto",
        zinc_nickel_alloy: "Liga de Zinco-Níquel",
        cobalt_alloy_plate: "Placa de Liga de Cobalto",

        // ================================
        // BOBINAS / ENROLAMENTOS
        // ================================
        zinc_coil: "Bobina de Zinco",
        magnetic_coil: "Bobina Magnética",
        zinc_winding: "Enrolamento de Zinco",
        magnetic_winding: "Enrolamento Magnético",

        // ================================
        // PEÇAS / COMPONENTES
        // ================================
        cobalt_gear: "Engrenagem de Cobalto",
        permanent_magnet: "Ímã Permanente",
        battery: "Bateria",
        mechanism: "Mecanismo",
        mechanical_turk: "Turco Mecânico",
        transformer: "Transformador",
        generator: "Gerador",
        motor: "Motor",
        speaker: "Alto-falante",

        // ================================
        // MEGA COMPONENTES
        // ================================
        mega_battery: "Mega Bateria",
        mega_mechanism: "Mega Mecanismo",
        mega_transformer: "Mega Transformador",
        mega_generator: "Mega Gerador",
        mega_motor: "Mega Motor",

        robot: "Robô",
        talking_robot: "Robô Falante",
        mega_robot: "Mega Robô",
        mega_zod: "Mega Zod"
    },

    rawResources: {
        coral: {
            miners: {
                normal: "t1_coral_harvester",
                advanced: "t2_coral_harvester"
            }
        },

        zinc_ore: {
            miners: {
                normal: "t1_zinc_miner",
                advanced: "t2_zinc_miner"
            }
        },

        samarium_ore: {
            miners: {
                normal: "t1_samarium_miner",
                advanced: "t2_samarium_miner"
            }
        },

        nickel_ore: {
            miners: {
                normal: "t1_nickel_miner",
                advanced: "t2_nickel_miner"
            }
        },

        cobalt_ore: {
            miners: {
                normal: "t1_cobalt_miner",
                advanced: "t2_cobalt_miner"
            }
        },

        turkey: {
            miners: {
                normal: "t1_turkey_source",
                advanced: "t2_turkey_source"
            }
        }
    },

    recipes: {
        // ================================
        // BASE
        // ================================
        coral_rag: {
            tier: 7,
            machine: "t7_cutter",
            outputPerMinute: 60,
            ingredients: {
                coral: 1
            }
        },

        zinc_gravel: {
            tier: 7,
            machine: "t7_ore_crusher",
            outputPerMinute: 60,
            ingredients: {
                zinc_ore: 1
            }
        },

        samarium_gravel: {
            tier: 7,
            machine: "t7_ore_crusher",
            outputPerMinute: 60,
            ingredients: {
                samarium_ore: 1
            }
        },

        nickel_gravel: {
            tier: 7,
            machine: "t7_ore_crusher",
            outputPerMinute: 60,
            ingredients: {
                nickel_ore: 1
            }
        },

        cobalt_gravel: {
            tier: 7,
            machine: "t7_ore_crusher",
            outputPerMinute: 60,
            ingredients: {
                cobalt_ore: 1
            }
        },

        activated_zinc: {
            tier: 7,
            machine: "t7_mixer",
            outputPerMinute: 60,
            ingredients: {
                salt_shard: 1,
                zinc_gravel: 1
            }
        },

        activated_samarium: {
            tier: 7,
            machine: "t7_mixer",
            outputPerMinute: 60,
            ingredients: {
                salt_shard: 1,
                samarium_gravel: 1
            }
        },

        activated_nickel: {
            tier: 7,
            machine: "t7_mixer",
            outputPerMinute: 60,
            ingredients: {
                salt_shard: 1,
                nickel_gravel: 1
            }
        },

        activated_cobalt: {
            tier: 7,
            machine: "t7_mixer",
            outputPerMinute: 60,
            ingredients: {
                salt_shard: 1,
                cobalt_gravel: 1
            }
        },

        pressed_coral: {
            tier: 7,
            machine: "t7_press",
            outputPerMinute: 60,
            ingredients: {
                coral_rag: 1
            }
        },

        // ================================
        // LINGOTES
        // ================================
        zinc_ingot: {
            tier: 7,
            machine: "t7_induction_smelter",
            outputPerMinute: 60,
            ingredients: {
                activated_zinc: 1
            }
        },

        samarium_ingot: {
            tier: 7,
            machine: "t7_induction_smelter",
            outputPerMinute: 60,
            ingredients: {
                activated_samarium: 1
            }
        },

        nickel_ingot: {
            tier: 7,
            machine: "t7_induction_smelter",
            outputPerMinute: 60,
            ingredients: {
                activated_nickel: 1
            }
        },

        cobalt_ingot: {
            tier: 7,
            machine: "t7_induction_smelter",
            outputPerMinute: 60,
            ingredients: {
                activated_cobalt: 1
            }
        },

        // ================================
        // LIGAS
        // ================================
        magnet: {
            tier: 7,
            machine: "t7_alloy_smelter",
            outputPerMinute: 60,
            ingredients: {
                cobalt_ingot: 1,
                samarium_ingot: 1
            }
        },

        cobalt_alloy: {
            tier: 7,
            machine: "t7_alloy_smelter",
            outputPerMinute: 60,
            ingredients: {
                cobalt_ingot: 1,
                nickel_ingot: 1
            }
        },

        zinc_nickel_alloy: {
            tier: 7,
            machine: "t7_alloy_smelter",
            outputPerMinute: 60,
            ingredients: {
                nickel_ingot: 1,
                zinc_ingot: 1
            }
        },

        cobalt_alloy_plate: {
            tier: 7,
            machine: "t7_press",
            outputPerMinute: 60,
            ingredients: {
                cobalt_alloy: 1
            }
        },

        // ================================
        // BOBINAS / ENROLAMENTOS
        // ================================
        zinc_coil: {
            tier: 7,
            machine: "t7_extruder",
            outputPerMinute: 60,
            ingredients: {
                zinc_nickel_alloy: 1
            }
        },

        magnetic_coil: {
            tier: 7,
            machine: "t7_extruder",
            outputPerMinute: 60,
            ingredients: {
                magnet: 1
            }
        },

        zinc_winding: {
            tier: 7,
            machine: "t7_rolling_machine",
            outputPerMinute: 60,
            ingredients: {
                zinc_coil: 1
            }
        },

        magnetic_winding: {
            tier: 7,
            machine: "t7_rolling_machine",
            outputPerMinute: 60,
            ingredients: {
                magnetic_coil: 1
            }
        },

        cobalt_gear: {
            tier: 7,
            machine: "t7_gear_press",
            outputPerMinute: 60,
            ingredients: {
                cobalt_alloy_plate: 1
            }
        },

        // ================================
        // COMPONENTES
        // ================================
        permanent_magnet: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                cobalt_alloy: 1,
                magnet: 1
            }
        },

        battery: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                magnet: 1,
                zinc_coil: 1
            }
        },

        mechanism: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                cobalt_gear: 1,
                zinc_winding: 1
            }
        },

        mechanical_turk: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                cobalt_gear: 1,
                turkey: 1
            }
        },

        transformer: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                permanent_magnet: 1,
                zinc_winding: 1
            }
        },

        generator: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                mechanism: 1,
                permanent_magnet: 1
            }
        },

        motor: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                battery: 1,
                mechanism: 1
            }
        },

        speaker: {
            tier: 7,
            machine: "t7_triple_assembler",
            outputPerMinute: 60,
            ingredients: {
                cobalt_alloy_plate: 1,
                permanent_magnet: 1,
                zinc_coil: 1
            }
        },

        // ================================
        // MEGA COMPONENTES
        // ================================
        mega_battery: {
            tier: 7,
            machine: "t7_triple_assembler",
            outputPerMinute: 60,
            ingredients: {
                battery: 1,
                magnet: 1,
                magnetic_coil: 1
            }
        },

        mega_mechanism: {
            tier: 7,
            machine: "t7_triple_assembler",
            outputPerMinute: 60,
            ingredients: {
                magnetic_winding: 1,
                mechanism: 1,
                transformer: 1
            }
        },

        mega_transformer: {
            tier: 7,
            machine: "t7_triple_assembler",
            outputPerMinute: 60,
            ingredients: {
                magnetic_winding: 1,
                mega_battery: 1,
                transformer: 1
            }
        },

        mega_generator: {
            tier: 7,
            machine: "t7_triple_assembler",
            outputPerMinute: 60,
            ingredients: {
                generator: 1,
                magnetic_winding: 1,
                mega_mechanism: 1
            }
        },

        mega_motor: {
            tier: 7,
            machine: "t7_triple_assembler",
            outputPerMinute: 60,
            ingredients: {
                mega_battery: 1,
                mega_mechanism: 1,
                motor: 1
            }
        },

        robot: {
            tier: 7,
            machine: "t7_quadruple_assembler",
            outputPerMinute: 60,
            ingredients: {
                cobalt_alloy_plate: 1,
                generator: 1,
                motor: 1,
                transformer: 1
            }
        },

        talking_robot: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                robot: 1,
                speaker: 1
            }
        },

        mega_robot: {
            tier: 7,
            machine: "t7_quadruple_assembler",
            outputPerMinute: 60,
            ingredients: {
                mega_generator: 1,
                mega_motor: 1,
                mega_transformer: 1,
                robot: 1
            }
        },

        mega_zod: {
            tier: 7,
            machine: "t7_dual_assembler",
            outputPerMinute: 60,
            ingredients: {
                energy_crystal: 1,
                mega_robot: 1
            }
        }
    },

    prices: {
        coral: { tier: 7, price: "62N" },
        zinc_ore: { tier: 7, price: "140N" },
        samarium_ore: { tier: 7, price: "140N" },
        nickel_ore: { tier: 7, price: "190N" },
        cobalt_ore: { tier: 7, price: "190N" },

        coral_rag: { tier: 7, price: "198N" },
        zinc_gravel: { tier: 7, price: "380N" },
        samarium_gravel: { tier: 7, price: "380N" },
        nickel_gravel: { tier: 7, price: "380N" },
        cobalt_gravel: { tier: 7, price: "380N" },

        activated_zinc: { tier: 7, price: "760N" },
        activated_samarium: { tier: 7, price: "760N" },
        activated_nickel: { tier: 7, price: "760N" },
        activated_cobalt: { tier: 7, price: "760N" },
        pressed_coral: { tier: 7, price: "760N" },

        zinc_ingot: { tier: 7, price: "1.45de" },
        samarium_ingot: { tier: 7, price: "1.45de" },
        nickel_ingot: { tier: 7, price: "1.45de" },
        cobalt_ingot: { tier: 7, price: "1.45de" },

        magnet: { tier: 7, price: "9de" },
        cobalt_alloy: { tier: 7, price: "8.5de" },
        zinc_nickel_alloy: { tier: 7, price: "8.5de" },
        cobalt_alloy_plate: { tier: 7, price: "18de" },

        zinc_coil: { tier: 7, price: "17de" },
        magnetic_coil: { tier: 7, price: "70de" },
        zinc_winding: { tier: 7, price: "34de" },
        magnetic_winding: { tier: 7, price: "140de" },

        cobalt_gear: { tier: 7, price: "36de" },
        permanent_magnet: { tier: 7, price: "35de" },
        battery: { tier: 7, price: "52de" },
        mechanism: { tier: 7, price: "180de" },
        mechanical_turk: { tier: 7, price: "200de" },
        speaker: { tier: 7, price: "200de" },
        transformer: { tier: 7, price: "363de" },
        generator: { tier: 7, price: "499de" },
        mega_battery: { tier: 7, price: "499de" },
        motor: { tier: 7, price: "1.6Ud" },

        mega_transformer: { tier: 7, price: "2Ud" },
        mega_generator: { tier: 7, price: "2.55Ud" },
        mega_mechanism: { tier: 7, price: "2.7Ud" },
        mega_motor: { tier: 7, price: "5.4Ud" },

        robot: { tier: 7, price: "19Ud" },
        talking_robot: { tier: 7, price: "35Ud" },
        mega_robot: { tier: 7, price: "99Ud" },
        mega_zod: { tier: 7, price: "297Ud" }
    }
};
