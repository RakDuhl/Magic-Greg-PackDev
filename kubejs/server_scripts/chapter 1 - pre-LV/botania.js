ServerEvents.recipes(
    event => {    
       
        //Replaces th create propeller item with GTCEu propeller
        let hammer =            Ingredient.of('#forge:tools/hammers');
        let wrench =            Ingredient.of('#forge:tools/wrenches');
        let hammerSoft =        Ingredient.of('#forge:tools/mallets');
        let LivingRock =      Ingredient.of('botania:livingrock');
        let Manasteel =       Ingredient.of('botania:manasteel_ingot');
        let Caminite =        Ingredient.of('embers:caminite_blend');
        let ArcaneCrys =      Ingredient.of('forbidden_arcanus:arcane_crystal');

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
    }
)

