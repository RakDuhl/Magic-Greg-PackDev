ServerEvents.recipes(
    event => {

        //Minecraft
        event.shaped(
            'minecraft:stonecutter', [
                ' I ',
                ' s ',
                'PSP'
            ], {
                I: '#forge:plates/iron',
                s: 'minecraft:stone_slab',
                S: 'minecraft:stone',
                P: '#minecraft:planks'
            }
        );
        
        event.shaped(
            '3x minecraft:hopper', [
                'PCP',
                'PcP',
                ' P'
            ], {
                P: '#forge:plates/iron',
                C: '#forge:chests/wooden',
                c: 'create:chute'
            }
        );
        event.shaped(
            'minecraft:piston', [
                'sss',
                'crc',
                'cSc'
            ], {
                s: '#minecraft:wooden_slabs',
                c: '#forge:cobblestone',
                r: 'create:piston_extension_pole',
                S: 'thermal:redstone_servo'
            }
        );
        const SuperGlue = Ingredient.of('create:super_glue');

        event.shapeless(
            'minecraft:sticky_piston', [
                'minecraft:piston', SuperGlue
            ]
        ).keepIngredient(SuperGlue).damageIngredient(SuperGlue);
        event.shaped(
            'minecraft:dispenser', [
                'CCC',
                'CBP',
                'SsS'
            ], {
                S: 'minecraft:smooth_stone_slab',
                C: '#forge:cobblestone',
                s: 'thermal:redstone_servo',
                B: 'minecraft:crossbow',
                P: 'gtceu:tin_small_item_pipe'
            }
        )
        event.shaped(
            'minecraft:dropper', [
                'CCC',
                'CsP',
                'SsS'
            ], {
                S: 'minecraft:smooth_stone_slab',
                C: '#forge:cobblestone',
                s: 'thermal:redstone_servo',
                P: 'gtceu:tin_small_item_pipe'
            }
        );
        event.shaped(
            'minecraft:hopper', [
                'ICI',
                ' c ',
                ' I '
            ], {
                I: '#forge:plates/iron',
                c: 'create:chute',
                C: '#forge:chests/wooden'
            }
        );
        event.shaped(
            'minecraft:observer', [
                'ScS',
                'RQR',
                'sAs'
            ], {
                S: '#forge:stone',
                R: 'thermal:redstone_servo',
                s: 'minecraft:smooth_stone_slab',
                c: 'minecraft:comparator',
                Q: '#forge:gems/quartz',
                A: '#forge:gems/amethyst'
            }
        );
        event.shaped(
            'minecraft:daylight_detector', [
                'QQQ',
                'LWL',
                ' S '
            ], {
                Q: '#forge:gems/quartz',
                L: '#minecraft:planks',
                W: 'projectred_core:electrotine_silicon',
                S: 'thermal:redstone_servo'
            }
        );
        event.shaped(
            'minecraft:ender_chest', [
                'PDP',
                'PcP',
                'PCP'
            ], {
                P: '#forge:plates/obsidian',
                D: '#forge:gems/diamond',
                c: 'extendedcrafting:ender_catalyst',
                C: '#forge:chests/wooden'
            }
        );
        event.shaped(
            'minecraft:rail', [
                'ISI',
                'NSN',
                'ISI'
            ], {
                I: 'gtceu:long_iron_rod',
                S: '#forge:rods/wooden',
                N: '#forge:nuggets/iron' 
            }
        );
        event.shaped(
            'minecraft:powered_rail', [
                'ISI',
                'GLG',
                'ISI'
            ], {
                I: 'gtceu:long_iron_rod',
                G: 'gtceu:long_gold_rod',
                L: '#quark:ladders',
                S: 'thermal:redstone_servo'
            }
        );
        event.shaped(
            'minecraft:detector_rail', [
                'IPI',
                'NLN',
                'ISI'
            ], {
                P: 'minecraft:stone_pressure_plate',
                N: '#forge:nuggets/iron',
                I: 'gtceu:long_iron_rod',
                L: '#quark:ladders',
                S: 'thermal:redstone_servo'
            }
        );
        event.shaped(
            'minecraft:activator_rail', [
                'ISI',
                'NLN',
                'ISI'
            ], {
                N: '#forge:nuggets/iron',
                I: 'gtceu:long_iron_rod',
                L: '#quark:ladders',
                S: 'thermal:redstone_servo'
            }
        );
        event.shaped(
            'minecraft:tnt', [
                'PPP',
                'PGP',
                'PCP'
            ], {
                P: 'minecraft:paper',
                G: '#forge:storage_blocks/gunpowder',
                C: '#forge:storage_blocks/coal'
            }
        )
    }
)