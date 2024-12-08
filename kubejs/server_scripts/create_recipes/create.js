ServerEvents.recipes(
    event => {

        //Creating Constants to ease writing the same Items
        const files =           Ingredient.of("#forge:tools/files");
        const screwdrivers =    Ingredient.of("#forge:tools/screwdrivers");
        const hammers =         Ingredient.of("#forge:tools/hammers");
        const cutters =         Ingredient.of("#forge:tools/wire_cutters");
        let Hammer =            Ingredient.of('#forge:tools/hammers');
        let Wrench =            Ingredient.of('#forge:tools/wrenches');
        let Mallet =            Ingredient.of('#forge:tools/mallets');
        let FEPlates =          Ingredient.of('#forge:plates/iron');
        let smallCog =          Ingredient.of('create:cogwheel');
        let largeCog =          Ingredient.of('create:large_cogwheel');
        let ACasing =           Ingredient.of('create:andesite_casing');
        let BCasing =           Ingredient.of('create:brass_casing');
        let Shaft =             Ingredient.of('create:shaft');
        let AAlloy =            Ingredient.of('create:andesite_alloy');
        
        //Gregify Components
        //Shaft
        event.remove({output: 'create:shaft'});
        event.shaped(
            '8x create:shaft', [
                '  A',
                'sSh',
                'A  '
            ], {
                h: hammers,
                s: screwdrivers,
                A: 'create:andesite_alloy',
                S: 'gtceu:long_iron_rod'
            }
        ).keepIngredient([screwdrivers, hammers]).damageIngredient([screwdrivers, hammers]);
        
        //Copycat Shaft
        /*
        event.remove({output: 'copycats:copycat_shaft'});
        event.shaped(
            '8x copycats:copycat_shaft', [
                '  A',
                'sSh',
                'A  '
            ], {
                h: hammers,
                s: screwdrivers,
                A: '#forge:ingots/zinc',
                S: 'gtceu:long_iron_rod'
            }
        ).keepIngredient([screwdrivers, hammers]).damageIngredient([screwdrivers, hammers]);
*/
        //Small Water Wheel
        event.remove({output: 'create:water_wheel'});
        event.shaped(
            'create:water_wheel', [
                ' P ',
                'PCP',
                ' P '
            ], {
                P: '#forge:plates/treated_wood',
                C: 'create:andesite_casing'
            }
        );

        //Large Water Wheel
        event.remove({output: 'create:large_water_wheel'});
        event.shaped(
            'create:large_water_wheel', [
                'PPP',
                'PWP',
                'PPP'
            ], {
                P: '#forge:plates/treated_wood',
                W: 'create:water_wheel'
            }
        );

        //Millstone
        event.remove({output: 'create:millstone'});
        event.shaped(
            'create:millstone', [
                'HC ',
                'SsS',
                'SSS'
            ], {
                H: Hammer,
                C: smallCog,
                S: 'minecraft:stone',
                s: 'minecraft:smooth_stone_slab'
            }
        ).keepIngredient([Hammer]).damageIngredient([Hammer]);

        //Mechanical Pump
        event.remove({output: 'create:mechanical_pump'});
        event.shaped(
            'create:mechanical_pump', [
                'PCP',
                'pRp',
                'HPW'
            ], {
                W: Wrench,
                H: Hammer,
                P: FEPlates,
                R: 'gtceu:iron_rotor',
                p: 'gtceu:copper_normal_fluid_pipe'
            }
        ).keepIngredient([Wrench, Hammer]).damageIngredient([Wrench, Hammer]);

        //Mechanical Fan
        event.remove({output: 'create:encased_fan'});
        event.shaped(
            'create:encased_fan', [
                ' S ',
                'MCW',
                ' s '
            ], {
                M: Mallet,
                C: ACasing,
                W: Wrench,
                s: Shaft,
                S: 'railways:smokestack_diesel'
            }
        ).keepIngredient([Mallet, Wrench]).damageIngredient([Mallet, Wrench]);

        //weighted ejector
        event.remove({output: 'create:weighted_ejector'});
        event.shaped(
            'create:weighted_ejector', [
                'PPP',
                'HSW',
                ' A '
            ], {
                P: FEPlates,
                H: Hammer,
                W: Wrench,
                A: ACasing,
                S: 'gtceu:iron_spring'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Blaze Cage
        event.remove({output: 'create:empty_blaze_burner'});
        event.shaped(
            'create:empty_blaze_burner', [
                'I I',
                'IHI',
                'iNi'
            ], {
                H: Hammer,
                I: 'minecraft:iron_bars',
                i: 'minecraft:iron_ingot',
                N: 'minecraft:netherrack'
            }
        );

        //Create Pipe
        event.remove({output: 'create:fluid_pipe'});
        event.shapeless('create:fluid_pipe', 
        	['gtceu:copper_normal_fluid_pipe']
        );

        //Fluid Filter
        event.remove({output: 'create:smart_fluid_pipe'});
        event.shaped(
            'create:smart_fluid_pipe', [
                'HFW',
                'CVC',
            ], {
                H: Hammer,
                W: Wrench,
                F: 'create:filter',
                C: 'gtceu:copper_normal_fluid_pipe',
                V: 'create:fluid_valve'
            }
        ).keepIngredient([Wrench, Hammer]).damageIngredient([Wrench, Hammer]);

        //Cart Assembler
        event.remove({output: 'create:cart_assembler'});
        event.shaped(
            'create:cart_assembler', [
                'iGi',
                'ACA',
                'AWA'
            ], {
                A: ACasing,
                W: Wrench,
                i: 'minecraft:iron_ingot',
                C: 'gtceu:circuits/ulv',
                G: 'create:gantry_carriage'
            }
        ).keepIngredient([Wrench]).damageIngredient([Wrench]);

        //wooden Bracket
        event.remove({output: 'create:wooden_bracket'});
        event.shaped(
            'create:wooden_bracket', [
                'MSW',
                'IRI',
                'SPS'
            ], {
                M: Mallet,
                W: Wrench,
                S: '#minecraft:wooden_slabs',
                I: 'gtceu:iron_rod',
                R: 'gtceu:iron_ring',
                P: '#minecraft:planks'
            }
        ).keepIngredient([Mallet, Wrench]).damageIngredient([Mallet, Wrench]);

        //Mechanical Drill
        event.remove({output: 'create:mechanical_drill'});
        event.shaped(
            'create:mechanical_drill', [
                ' D ',
                'HAW',
                ' S '
            ], {
                H: Hammer,
                A: ACasing,
                W: Wrench,
                S: Shaft,
                D: 'gtceu:steel_drill_head'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Press
        event.remove({output: 'create:mechanical_press'});
        event.shaped(
            'create:mechanical_press', [
                ' S ',
                'MAW',
                'asa'
            ], {
                S: Shaft,
                M: Mallet,
                W: Wrench,
                A: ACasing,
                a: AAlloy,
                s: 'botania:manasteel_block'
            }
        ).keepIngredient([Mallet, Wrench]).damageIngredient([Mallet, Wrench]);

        //Mixer
        event.remove({output: 'create:mechanical_mixer'});
        event.shaped(
            'create:mechanical_mixer', [
                ' C ',
                'MAW',
                ' w '
            ], {
                C: smallCog,
                M: Mallet,
                W: Wrench,
                A: ACasing,
                w: 'create:whisk'
            }
        ).keepIngredient([Mallet, Wrench]).damageIngredient([Mallet, Wrench]);

        //Create Cauldron
        event.remove({output: 'create:basin'});
        event.shaped(
            'create:basin', [
                'ACA',
                ' A '
            ], {
                A: AAlloy,
                C: 'minecraft:cauldron'
            }
        );

        //Smart Chute
        event.remove({output: 'create:smart_chute'});
        event.shaped(
            'create:smart_chute', [
                'BTB',
                'BCB',
                ' W '
            ], {
                W: Wrench,
                B: '#forge:plates/brass',
                T: 'create:electron_tube',
                C: 'create:chute'
            }
        ).keepIngredient([Wrench]).damageIngredient([Wrench]);

        //Tank
        event.remove({output: 'create:fluid_tank'});
        event.shaped(
            'create:fluid_tank', [
                'CGC',
                'GHG',
                'CGC'
            ], {
                H: Hammer,
                C: '#forge:plates/copper',
                G: '#forge:glass_panes/colorless'
            }
        ).keepIngredient([Hammer]).damageIngredient([Hammer]);

        //Metal Bracket
        event.remove({output: 'create:metal_bracket'});
        event.shaped(
            'create:metal_bracket', [
                'HIW',
                'RrR',
                'IiI'
            ], {
                H: Hammer,
                W: Wrench,
                I: FEPlates,
                R: 'gtceu:iron_rod',
                r: 'gtceu:iron_ring',
                i: 'minecraft:iron_ingot'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Girder
        event.remove({output: 'create:metal_girder'});
        event.shaped(
            'create:metal_girder', [
                ' A ',
                'PPP',
                'HAW'
            ], {
                A: AAlloy,
                H: Hammer,
                W: Wrench,
                P: FEPlates
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Electron Tube
        event.remove({output: 'create:metal_girder'});
        event.shaped(
            'create:metal_girder', [
                'MRW',
                'IcI'
            ], {
                M: Mallet,
                W: Wrench,
                I: FEPlates,
                c: 'gtceu:resin_printed_circuit_board'
            }
        ).keepIngredient([Mallet, Wrench]).damageIngredient([Mallet, Wrench]);

        //Steam Engine
        event.remove({output: 'create:steam_engine'});
        event.shaped(
            'create:steam_engine', [
                ' C ',
                'HPW',
                ' T '
            ], {
                H: Hammer,
                W: Wrench,
                C: 'create:hand_crank',
                P: 'minecraft:piston',
                T: 'create:fluid_tank'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Mechanical Saw
        event.remove({output: 'create:mechanical_saw'});
        event.shaped(
            'create:mechanical_saw', [
                'HBW',
                'SAS',
            ], {
                H: Hammer,
                W: Wrench,
                S: Shaft,
                A: ACasing
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Sequenced Gearshift
        event.remove({output: 'create:sequenced_gearshift'});
        event.shaped(
            'create:sequenced_gearshift', [
                'HEW',
                'SBS',
                ' T '
            ], {
                H: Hammer,
                W: Wrench,
                S: Shaft,
                B: BCasing,
                E: 'gtceu:basic_electronic_circuit',
                T: 'create:electron_tube'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //Rot Speed Controller
        event.remove({output: 'create:rotation_speed_controller'});
        event.shaped(
            'create:rotation_speed_controller', [
                'gML',
                'HBW',
                'CSG'
            ], {
                H: Hammer,
                W: Wrench,
                S: Shaft,
                C: smallCog,
                L: largeCog,
                B: BCasing,
                g: 'gtceu:small_iron_gear',
                M: 'create:precision_mechanism',
                G: 'gtceu:iron_gear'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);

        //mechanical arm
        event.remove({output: 'create:mechanical_arm'});
        event.shaped(
            'create:mechanical_arm', [
                ' R ',
                'HLW',
                ' C '
            ], {
                H: Hammer,
                W: Wrench,
                L: largeCog,
                C: BCasing,
                R: 'gtceu:lv_robot_arm'
            }
        ).keepIngredient([Hammer, Wrench]).damageIngredient([Hammer, Wrench]);
    }
);
