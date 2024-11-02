//priority: 9256

GTCEuStartupEvents.registry(
    'gtceu:machine',
    event => {
        event.create('terrestrial_chamber', 'multiblock', Tier('iv'), Tier('luv'), Tier('zpm'), Tier('uv'))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('terrestrial_chamber')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(
            definition => FactoryBlockPattern.start()
            .aisle('..RLR..', '..LML..', '..RLR..', '.......', '.......')
            .aisle('..CCC..', '..CGC..', '..CCC..', '.......', '.......')
            .aisle('RCRLRCR', 'LCGGGCL', 'RCGGGCR', '..CCC..', '..RLR..')
            .aisle('LCLTLCL', 'MGG GGM', 'LCGGGCL', '..CGC..', '..LML..')
            .aisle('RCRLRCR', 'LCGGGCL', 'RCGGGCR', '..CCC..', '..RLR..')
            .aisle('..CCC..', '..CGC..', '..CCC..', '.......', '.......')
            .aisle('..RcR..', '..LML..', '..RLR..', '.......', '.......')
            .where('R', Predicates.blocks('botania:livingrock'))
            .where('M', Predicates.blocks('botania:manasteel_block'))
            .where('G', Predicates.blocks('botania:mana_glass'))
            .where('T', Predicates.blocks('botania:terrasteel_block'))
            .where('L', Predicates.blocks('minecraft:lapis_block'))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(4)))
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