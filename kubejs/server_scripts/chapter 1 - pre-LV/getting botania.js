ServerEvents.recipes(
    event => {    
        //Minecraft Recipes
        // @ts-ignore
        event.shaped(
            'extendedcrafting:basic_table', [
                'A',
                'C'
            ], {
                A: '#minecraft:wooden_pressure_plates',
                C: '#minecraft:logs'
            }
        );

        // @ts-ignore
        event.shapeless(
            'minecraft:crafting_table', [
                'extendedcrafting:basic_table'
            ]
        );

    
        //Minecraft Furnace
        const StoneSlabs = [
            'minecraft:stone_slab', 
            'minecraft:smooth_stone_slab', 
            'minecraft:cobblestone_slab', 
            'minecraft:granite_slab', 
            'minecraft:andesite_slab', 
            'minecraft:diorite_slab', 
            'minecraft:cobbled_deepslate_slab', 
            'minecraft:blackstone_slab', 
            'blue_skies:turquoise_stone_slab', 
            'blue_skies:turquoise_cobblestone_slab', 
            'botania:livingrock_slab'
        ]
        // @ts-ignore
        event.shaped(
            'minecraft:furnace', [
                'SSS',
                'C C',
                'CFC'
            ], {
                S: StoneSlabs,
                C: '#forge:cobblestone',
                F: 'minecraft:campfire'
            }
        )
        //Blast Furnace
        // @ts-ignore
        event.shaped(
            'minecraft:blast_furnace', [
                'DDD',
                'SFS',
                'SMS'
            ], {
                D: 'create:cut_deepslate_slab',
                S: 'minecraft:smooth_stone',
                F: 'minecraft:furnace',
                M: 'minecraft:magma_block'
            }
        )
        
        //Replaces th create propeller item with GTCEu propeller
        let hammer = '#forge:tools/hammers'
        let wrench = '#forge:tools/wrenches'
        let hammerSoft = '#forge:tools/mallets'

        event.replaceInput({ input: 'create:propeller'}, 'create:propeller', 'gtceu:iron_rotor')
    
        
        //very early game Mana Steel production
        //You need Manasteel in order to make the Mana Pool
        event.recipes.create.mixing(
            '2x botania:manasteel_nugget',
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
                    count: 4,
                    item: 'botania:livingrock',
                  },
                  {
                    item: 'botania:livingrock_slab'
                  },
                  {
                    item: 'botania:manasteel_ingot'
                  }
                ],
                results: [
                  {
                    item: 'botania:mana_pool'
                  }
                ]
            }
        )
    }
)

