
CustomMultiblock(
    event => {
        event.create('arcane_alloyer', 'multiblock')
        .recipeType('arcane_alloyer')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.MACHINE_CASING_MV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('.CMC.', '.CMC.', '.HHH.', '.GGG.', '.CCC.', '.....')
            .aisle('CCCCC', 'CPPPC', 'H   H', 'G   G', 'CCCCC', '.....')
            .aisle('MCCCM', 'MPPPM', 'H   H', 'G   G', 'CCPCC', '..P..')
            .aisle('CCCCC', 'CPPPC', 'H   H', 'G   G', 'CCCCC', '..P..')
            .aisle('.CMC.', '.CMC.', '.HHH.', '.GGG.', '.CCC.', '..P..')
            .aisle('.....', '.....', '.....', '.....', '.....', '..P..')
            .aisle('.....', '.....', '.....', '.....', '.....', '..P..')
            .aisle('.CCC.', '.HMH.', '.HMH.', '.HMH.', '.CCC.', '..P..')
            .aisle('.CCC.', '.M M.', '.M M.', '.M M.', '.CCC.', '..P..')
            .aisle('.CAC.', '.HMH.', '.HMH.', '.HMH.', '.CCC.', '.....')
            .where('C', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get())
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(4)))
            .where('M', Predicates.blocks('botania:manasteel_block'))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('.', Predicates.any())
            .where(' ', Predicates.air())
            .where('H', Predicates.heatingCoils())
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .build()
        )
        .workableCasingRenderer(
            GTCEu.id("block/casings/solid/machine_casing_heatproof"),
            GTCEu.id("block/multiblock/blast_furnace"),
            false
        )
    }
)
