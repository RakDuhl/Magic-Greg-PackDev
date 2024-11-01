GTCEuStartupEvents.registry(
    'gtceu:machine',
    event => {
        event.create('mana_steam_boiler', 'multiblock', Tier('ulv'), Tier('lv'), Tier('mv'), Tier('hv'), Tier('ev'))
        .recipetype('mana_steam_boiler')
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .rotationState(RotationState.NON_Y_AXIS)
        .pattern(
            definition => FactoryBlockPattern.start()
            .aisle('.ICI.', '.CCC.', '.MMM.', '.CCC.', '.....')
            .aisle('FCCCF', 'CPPPC', 'MPPPM', 'CPPPC', '.OOO.')
            .aisle('FCCCF', 'CPPPC', 'MPPPM', 'CPPPC', '.OOO.')
            .aisle('FCCCF', 'CPPPC', 'MPPPM', 'CPPPC', '.OOO.')
            .aisle('.IcI.', '.CCC.', '.MMM.', '.CCC.', '.....')
            .where('I', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS).or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1)))
            .where('F', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS).or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(6)))
            .where('O', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS).or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(9).setMinGlobalLimited(1)))
            .where('C', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS).setMinGlobalLimited(24))
            .where('P', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE))
            .where('M', Predicates.blocks('botania:manasteel_block'))
            .where('c', Predicates.controller(Predicates.blocks(definition.gt())))
            .where('.', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            GTCEu.id("block/casings/solid/machine_casing_bronze_plated_bricks"),
            GTCEu.id("block/multiblock/steam_oven"),
            false
        )
    }
)