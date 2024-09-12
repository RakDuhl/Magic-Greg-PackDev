ServerEvents.recipes(
    event => {

        //compressed unfired Coke Oven Bricks
        event.shapeless(
            '8x gtceu:compressed_coke_clay', [
                '5x gtceu:stone_dust', 
                '#forge:sand', 
                'minecraft:clay', 
                '2x gtceu:calcite_dust'
            ]
        );

        event.smelting(
            //Result                 //Input
            'gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay'
        );
        //Coke Oven Bricks
        event.shaped(
            'gtceu:coke_oven_bricks', [
                'BCB',
                'CBC',
                'BCB'
            ], {
                B: 'gtceu:coke_oven_brick',
                C: 'minecraft:clay_ball'
            }
        )

        //Blast Furnace dust
        event.shapeless(
            '3x gtceu:fireclay_dust', [
                'gtceu:asbestos_dust',
                'gtceu:brick_dust',
                'gtceu:calcite_dust'
            ]
        )
        //Firebricks
        ['gtceu:firebrick', 'minecraft:clay_ball', 'gtceu:firebricks']
        event.shaped(
            'gtceu:firebricks', [
                'BCB',
                'CBC',
                'BCB'
            ], {
                B: 'gtceu:firebrick',
                C: 'minecraft:clay_ball'
            }
        )
        //Primitive Blast Furnace
        event.shaped(
            'gtceu:primitive_blast_furnace', [
                'bSb',
                'S S',
                'BCB'
            ], {
                b: 'gtceu:firebrick',
                S: '#forge:plates/iron',
                B: 'gtceu:firebricks',
                C: 'minecraft:clay'
            }
        )
    }
)