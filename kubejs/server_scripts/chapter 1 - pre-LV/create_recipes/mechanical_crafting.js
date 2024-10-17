ServerEvents.recipes(
    event => {
        let inter = 'kubejs:incomplete_generator_block';//Generator Block
        /*
        event.recipes.create.sequenced_assembly(
            [
                Item.of('immersiveengineering:generator')
            ], 
            'immersiveengineering:steel_scaffolding_standard', 
            [
                event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_mv']),
                event.recipes.create.deploying(inter, [inter, 'gtceu:mana_steel_single_wire']),
                event.recipes.create.filling(inter, [inter, Fluid.of('thermal:redstone', 960)]),
                event.recipes.create.deploying(inter, [inter, 'gtceu:mana_steel_single_wire']),
                event.recipes.create.deploying(inter, [inter, 'botania:rune_mana']),
                event.recipes.create.deploying(inter, [inter, 'gtceu:mana_steel_single_wire'])
            ]
        ).transitionalItem(inter);
        */
    }
)

ServerEvents.recipes(
    e => {
        let inter = 'extendedcrafting:black_iron_slate'
        e.custom(
            {
                type: "create:sequenced_assembly",
                ingredient: {item: "create:sturdy_sheet"},
                loops: 1,
                results: [{item: "extendedcrafting:advanced_catalyst"}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter},
                            [{item: "botania:manasteel_nugget"}]
                        ],
                        results: [{item: inter}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter},
                            [{tag: "forge:plates/gold"}]
                        ],
                        results: [{item: inter}]
                    },
                    {
                    type: "create:pressing",
                    ingredients: [{item: inter}],
                    results: [{item: inter}]
                    }
                ],
                "transitionalItem": {item: inter}
            }
        );

        //First LV Circuit
        let inter2 = 'gtceu:resin_printed_circuit_board'
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:resin_printed_circuit_board'},
                loops: 1,
                results: [{item: 'gtceu:basic_electronic_circuit'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter2},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter2}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter2},
                            [{item: 'gtceu:resistor'}]
                        ],
                        results: [{item: inter2}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter2},
                            [{item: 'gtceu:resistor'}]
                        ],
                        results: [{item: inter2}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter2},
                            [{tag: 'forge:plates/copper'}]
                        ],
                        results: [{item: inter2}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter2},
                            [{tag: 'gtceu:circuits/ulv'}]
                        ],
                        results: [{item: inter2}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter2},
                            [{tag: 'gtceu:circuits/ulv'}]
                        ],
                        results: [{item: inter2}]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            {item: inter2},
                            {
                                amount: 72,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: inter2}]
                    },
                ],
                transitionalItem: {item: inter2}
            }
        )

        //First MV Circuit
        let inter3 = 'gtceu:phenolic_printed_circuit_board'
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:phenolic_printed_circuit_board'},
                loops: 1,
                results: [{item: 'gtceu:basic_electronic_circuit'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter3},
                            [{item: 'gtceu:basic_electronic_circuit'}]
                        ],
                        results: [{item: inter3}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter3},
                            [{item: 'gtceu:basic_electronic_circuit'}]
                        ],
                        results: [{item: inter3}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter3},
                            [{tag: 'forge:plates/copper'}]
                        ],
                        results: [{item: inter3}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter3},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter3}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter3},
                            [{tag: 'gtceu:resistors'}]
                        ],
                        results: [{item: inter3}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter3},
                            [{tag: 'gtceu:diodes'}]
                        ],
                        results: [{item: inter3}]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            {item: inter3},
                            {
                                amount: 72,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: inter3}]
                    },
                ],
                transitionalItem: {item: inter3}
            }
        )

        //Microprocessor Assembly
        let inter4 = 'gtceu:plastic_printed_circuit_board'
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:plastic_printed_circuit_board'},
                loops: 1,
                results: [{item: 'gtceu:micro_processor_computer'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:cpu_chip'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:cpu_chip'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:ram_chip'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:ram_chip'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:lpic_chip'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:fine_electrum_wire'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:microchip_processor'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:microchip_processor'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:microchip_processor'}]
                        ],
                        results: [{item: inter4}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter4},
                            [{item: 'gtceu:microchip_processor'}]
                        ],
                        results: [{item: inter4}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: inter4},
                            {
                                amount: 72,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: inter4}]
                    },
                ],
                transitionalItem: {item: inter4}
            }
        );
        //Micro Mainframe
        let mainframe = 'gtceu:titanium_carbide_plate'
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:aluminium_frame'},
                loops: 1,
                results: [{item: 'gtceu:micro_processor_mainframe'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'kubejs:manasteel_coil_block'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:mpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:mpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: mainframe},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: mainframe}]
                    },
                ],
                transitionalItem: {item: mainframe}
            }
        )

        //Nanoprocessor Assembly
        let inter5 = 'gtceu:plastic_printed_circuit_board'
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:plastic_printed_circuit_board'},
                loops: 1,
                results: [{item: 'gtceu:micro_processor_mainframe'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:micro_processor_computer'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:micro_processor_computer'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:annealed_copper_single_cable'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'kubejs:manasteel_coil_block'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:mpic_chip'}]
                        ],
                        results: [{item: inter5}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter5},
                            [{item: 'gtceu:mpic_chip'}]
                        ],
                        results: [{item: inter5}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: inter5},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: inter5}]
                    },
                ],
                transitionalItem: {item: inter5}
            }
        )
        //Nano Mainframe
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:aluminium_frame'},
                loops: 1,
                results: [{item: 'gtceu:nano_processor_mainframe'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'kubejs:manasteel_coil_block'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: mainframe},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: mainframe}]
                    },
                ],
                transitionalItem: {item: mainframe}
            }
        )

        //Quantumprocessor Assembly
        let inter6 = 'gtceu:fiber_reinforced_printed_circuit_board'
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:fiber_reinforced_printed_circuit_board'},
                loops: 1,
                results: [{item: 'gtceu:quantum_processor_computer'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:quantum_processor_assembly'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:qbit_cpu_chip'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:qbit_cpu_chip'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:advanced_soc'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:fine_platinum_wire'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:fine_platinum_wire'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:micro_processor'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:micro_processor'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:micro_processor'}]
                        ],
                        results: [{item: inter6}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: inter6},
                            [{item: 'gtceu:fine_mana_steel_wire'}]
                        ],
                        results: [{item: inter6}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: inter6},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: inter6}]
                    },
                ],
                transitionalItem: {item: inter6}
            }
        )
        //Quantum Mainframe
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:aluminium_frame'},
                loops: 1,
                results: [{item: 'gtceu:quantum_processor_mainframe'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:quantum_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:quantum_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:quantum_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:quantum_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:quantum_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:quantum_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'kubejs:manasteel_coil_block'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: mainframe},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: mainframe}]
                    },
                ],
                transitionalItem: {item: mainframe}
            }
        )

        //Crystal Mainframe
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:aluminium_frame'},
                loops: 1,
                results: [{item: 'gtceu:crystal_processor_mainframe'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:crystal_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:crystal_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:crystal_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:hpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:crystal_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:superconducting_coil'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'kubejs:manasteel_coil_block'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:micro_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: mainframe},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: mainframe}]
                    },
                ],
                transitionalItem: {item: mainframe}
            }
        )

        //Wetaware Mainframe
        e.custom(
            {
            type: "create:sequenced_assembly",
                ingredient: {item: 'gtceu:aluminium_frame'},
                loops: 1,
                results: [{item: 'gtceu:wetware_processor_mainframe'}],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:crystal_processor_mainframe'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:aluminium_plate'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:wetware_processor_computer'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:gold_single_cable'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:wetware_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:wetware_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'kubejs:manasteel_coil_block'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:superconducting_coil'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:nano_processor_assembly'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:uhpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            {item: mainframe},
                            [{item: 'gtceu:uhpic_chip'}]
                        ],
                        results: [{item: mainframe}]
                    },
                        {
                        type: "create:filling",
                        ingredients: [
                            {item: mainframe},
                            {
                                amount: 576,
                                fluid: "gtceu:soldering_alloy",
                                nbt: {}
                            }
                        ],
                        results: [{item: mainframe}]
                    },
                ],
                transitionalItem: {item: mainframe}
            }
        )
    }
)