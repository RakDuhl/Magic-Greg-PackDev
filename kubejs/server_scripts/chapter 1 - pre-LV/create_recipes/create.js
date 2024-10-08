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
    

        //Removing couple items
        event.remove({output: 'create:shaft'});
        event.remove({output: 'copycats:copycat_shaft'});
        
        //Gregify Components
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
        event.shapeless('create:fluid_pipe', 
        	['gtceu:copper_normal_fluid_pipe']
        );

        //Fluid Filter
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
        );

        //Mechanical Saw
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
        );

        //Sequenced Gearshift
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
        );

        //Rot Speed Controller
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
        );

        //mechanical arm
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
        );
    }
);
