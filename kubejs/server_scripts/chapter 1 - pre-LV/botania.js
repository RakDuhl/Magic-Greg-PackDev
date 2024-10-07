ServerEvents.recipes(
    event => {    
       
        //Replaces th create propeller item with GTCEu propeller
        let hammer =            Ingredient.of('#forge:tools/hammers');
        let wrench =            Ingredient.of('#forge:tools/wrenches');
        let hammerSoft =        Ingredient.of('#forge:tools/mallets');
        let LivingRock =        Ingredient.of('botania:livingrock');
        let Manasteel =         Ingredient.of('botania:manasteel_ingot');
        let Caminite =          Ingredient.of('embers:caminite_blend');
        let ArcaneCrys =        Ingredient.of('forbidden_arcanus:arcane_crystal');
        const ArcanumDust =     Ingredient.of('wizards_reborn:arcanum_dust');
        const Petals =          Ingredient.of('#botania:petals');

        event.replaceInput({ input: 'create:propeller'}, 'create:propeller', 'gtceu:iron_rotor')
    
        
        //very early game Mana Steel production
        //You need Manasteel in order to make the Mana Pool
        event.recipes.create.mixing(
            '2x botania:manasteel_ingot',
            [
                '2x botania:blue_petal',
                '1x botania:white_petal',
                '4x botania:light_blue_petal',
                '2x wizards_reborn:arcanum_dust',
                'forbidden_arcanus:arcane_crystal',
                '3x minecraft:iron_ingot'
            ]
        ).heated()
        
        //Botania Mana Pool
        event.custom(
            {
                type: 'create:compacting',
                ingredients: [
                  {
                    count: 2,
                    item: 'botania:livingrock'
                  },
                  {
                    item: 'forbidden_arcanus:arcane_crystal'
                  },
                  {
                    count: 3,
                    item: 'embers:caminite_blend'
                  }
                ],
                results: [
                  {
                    item: 'botania:mana_pool'
                  }
                ]
            }
        )

        //Petal Apothecaries
        event.shaped(
            'botania:apothecary_default', [
                'SPS',
                'CWC',
                'sAs'
            ], {
                S: 'minecraft:stone_slab',
                P: Petals,
                C: Caminite,
                W: 'minecraft:stone_brick_wall',
                s: 'minecraft:stone',
                A: ArcanumDust
            }
        );
        event.shaped(
            'botania:apothecary_mossy', [
                'SPS',
                'CWC',
                'sAs'
            ], {
                S: 'minecraft:mossy_cobblestone_slab',
                P: Petals,
                C: Caminite,
                W: 'minecraft:mossy_stone_brick_wall',
                s: 'minecraft:mossy_cobblestone',
                A: ArcanumDust
            }
        );
        event.shaped(
            'botania:apothecary_livingrock', [
                'SPS',
                'CWC',
                'sAs'
            ], {
                S: 'botania:livingrock_slab',
                P: Petals,
                C: Caminite,
                W: 'botania:livingrock_wall',
                s: LivingRock,
                A: ArcanumDust
            }
        );
        event.shaped(
            'botania:apothecary_deepslate', [
                'SPS',
                'CWC',
                'sAs'
            ], {
                S: 'minecraft:cobbled_deepslate_slab',
                P: Petals,
                C: Caminite,
                W: 'minecraft:cobbled_deepslate_wall',
                s: 'minecraft:cobbled_deepslate',
                A: ArcanumDust
            }
        );
    }
)

