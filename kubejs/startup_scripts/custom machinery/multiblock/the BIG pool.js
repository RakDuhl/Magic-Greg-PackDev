//priority: 9257

CustomMultiblock(
    event => {
        event.create('big_pool', 'multiblock', Tier('ev'), Tier('iv'), Tier('luv'), Tier('zpm'), Tier('uv'),)
        .recipeType('big_pool')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .rotationState(RotationState.NON_Y_AXIS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('...CLC...', '...CLC...', '...CLC...', '...CCC...', '.........')
            .aisle('.LCCCCCL.', '.LCRRRCL.', '.LCRRRCL.', '.LMGGGML.', '.........')
            .aisle('.CCRRRCC.', '.CM   MC.', '.CR   RC.', '.MG   GM.', '...GGG...')
            .aisle('CCRRRRRCC', 'CR     RC', 'CR     RC', 'CG     GC', '..GGGGG..')
            .aisle('LCRRMRRCL', 'LR     RL', 'LR     RL', 'CG     GC', '..GGGGG..')
            .aisle('CCRRRRRCC', 'CR     RC', 'CR     RC', 'CG     GC', '..GGGGG..')
            .aisle('.CCRRRCC.', '.CM   MC.', '.CR   RC.', '.MG   GM.', '...GGG...')
            .aisle('.LCCCCCL.', '.LCRRRCL.', '.LCRRRCL.', '.LMGGGML.', '.........')
            .aisle('...CcC...', '...CLC...', '...CLC...', '...CCC...', '.........')
            .where('R', Predicates.blocks('botania:livingrock'))
            .where('M', Predicates.blocks('botania:manasteel_block'))
            .where('L', Predicates.blocks('botania:livingwood_log'))
            .where('G', Predicates.blocks('botania:mana_glass'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(2).setMinGlobalLimited(1)))
            .where('c', Predicates.controller(Predicates.blocks(definition.get())))
            .where('.', Predicates.any())
            .where(' ', Predicates.air())
            .build()
        )
        .workableCasingRenderer(
            GTCEu.id("block/casings/solid/machine_casing_robust_tungstensteel"),
            GTCEu.id("block/multiblock/implosion_compressor"),
            false
        )
    }
)