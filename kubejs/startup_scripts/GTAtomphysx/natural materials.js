//priority: 9309
/**
 * Script for all the naturally spawning materials
 */

console.log('Registering all custom natural Materials and Elements!')

GTCEuStartupEvents.registry(
    'gtceu:material_icon_set',
    event => {
        event.create('wissen').parent(NETHERSTAR)
        event.create('orichalcum').parent(BRIGHT)
        event.create('rosequartz').parent(CERTUS)
        event.create('arcanegold').parent(BRIGHT)
//        event.create().parent()
//        event.create().parent()
//        event.create().parent()
    }
)

GTCEuStartupEvents.registry(
    'gtceu:material',
    event => {

        //Arcane Element for Mana
        event.create('mana')
//        .components('2x mana')
        .element(GTElements.get("mana"))
        .fluid()
        .gem()
        .color(0x20DAFF);
        console.log('Registered arcane element Mana ' + GTElements.get('mana') + ' !');

        //Arcane Element for Ember
        event.create('ember')
        //🔥
        .element(GTElements.get("ember"))
        .color(0xFF5200).secondaryColor(0xFFAA5C).iconSet(LAPIS)
        .gem()
        .flags(
            lens
        );
        console.log('Registered arcane element Ember ' + GTElements.get('ember') + ' !');

        event.create('wissen')
        //⚙
        .element(GTElements.get("wissen"))
        .color(0x577FB8).secondaryColor(0xCDEDFE).iconSet('wissen')
        .gem()
        .flags(
            lens,
            no_decomp
        );
        console.log('Registered arcane element Wissen ' + GTElements.get('wissen') + ' !');

        //Stardust
        //Found anywhere, very rare
        event.create('stardust')
        //Sd
        .element(GTElements.get("stardust"))
        .color(0x42599D).secondaryColor(0xCCF2FF).iconSet(NETHERSTAR)
        .dust()
        .flags(
            centrifuge
        );
        console.log('Registered cosmic material Stardust ' + GTElements.get('stardust') + ' !');
        
        //Create Rose Quartz
        event.create('rosequartz')
        .components('8x redstone', '1x quartz')
        .gem()
        .color(0xFC8C88).secondaryColor(0xFFAA5C).iconSet('rosequartz')
        .flags(
            electrolyze
        );

        //Arcane Gold
        //Au★
        //Early game arcane Alloy with gold
        //Same as Mithril with conductivity, can take higher Amps
        event.create('arcanegold')
        .components('1x gold', '1x mana')
        .color(0xEDC992).secondaryColor(0xB97B67).iconSet('arcanegold')
        .fluid()
        .ingot(2)
        .ore(1, 2)
        .cableProperties(V('ev'), 4, 0, false)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod,
            solder_mat_good
        );
        console.log('Registered arcane alloy Arcane Gold ' + GTMaterials.get('arcanegold') + ' !');
        
        //Ember Quartz
        //gem material for getting Ember
        event.create('emberquartz')
        .components('1x rosequartz', '3x ember')
        .color(0xFF5200).secondaryColor(0xFFAA5C).iconSet(CERTUS)
        .gem(2, 18000)
        .ore(3, 2, true)
        .flags(
            not_alloy,
            electrolyze
        );

        //Adamantium
        //ZPM metal
        //Used for extreme stress and pressure situations, extremely tough
        event.create('adamantium')
        .element(GTElements.get("Adamantium"))
        .color(0xAD0F0D).secondaryColor(0x64082B).iconSet(DULL)
        .ingot(5)
        .fluid()
        .ore(1, 2)
//        .cableProperties(V('zpm'), 8, 0, false)
        .blastTemp(4210, 'high', 24800, 320)
        .flags(
            no_unify,
            plates,
            dense_plate,
            rod,
            bolt_and_screw,
            frame,
            gear,
            long_rod,
            block,
            foil,
            ring,
            fine_wire,
            no_smelt,
            no_abs_recipe,
            no_block_craft,
            no_hand_craft,
            no_decomp,
            no_plate_compressor_craft,
            no_smashing
        )
        .toolStats(new ToolProperty(25.0, 1.0, 12400, 5, []));
        console.log('Registered natural Adamantium ' + GTElements.get('adamantium') + ' !');
        
        //Mithril
        //Ag₄★₆Ti
        //EV alloy, great conductivity, magical superconductor
        //Required for circuits
        event.create('mithril')
        .components('4x silver', '6x mana', 'titanium')
        .color(0xd6edff).secondaryColor(0x9BFFFF).iconSet(SHINY)
        .ingot()
        .fluid()
        .ore(1, 2)
        .cableProperties(V('ev'), 2, 0, true)
        .blastTemp(750, 'mid', 288, 300)
        .flags(
            plates,
            dense_plate,
            rod,
            frame,
            gear,
            small_gear,
            long_rod,
            block,
            foil,
            fine_wire,
            no_abs_recipe,
            solder_mat
        );
        console.log('Registered natural Mithril ' + GTMaterials.get('mithril') + ' !');
                
        //Prometheum
        //Catalyst element, used for various chemical tasks
        //Horrible conductor
        event.create('prometheum')
        .element(GTElements.get("prometheum"))
        .color(0x5A8156).secondaryColor(0x354D33).iconSet(DULL)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('hv'), 1, 4, false)
        .blastTemp(1580, null, 620, 185)
        .flags(
            plates,
            rod,
            long_rod,
            block,
            foil,
            fine_wire,
            no_abs_recipe,
            no_unify
        );
        console.log('Registered natural Prometheum ' + GTElements.get('prometheum') + ' !');
        
        //Orichalcum
        //
        event.create('orichalcum')
        .element(GTElements.get("orichalcum"))
        .color(0x780874).secondaryColor(0xF871E3).iconSet('orichalcum')
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('zpm'), 3, 0, false)
        .blastTemp(2313, 'high', 2100, 720)
        .flags(
            plates,
            dense_plate,
            rod,
            gear,
            small_gear,
            long_rod,
            block,
            foil,
            fine_wire,
            no_abs_recipe
        );
        console.log('Registered natural Orichalcum ' + GTElements.get('orichalcum') + ' !');
                
        //Vulcanite
        //Natural ultra high heat resistance and very good Heating properties
        //Will be used for EBF Coils
        event.create('vulcanite')
        .element(GTElements.get("vulcanite"))
        .color(0xFFB08A).secondaryColor(0xF24F00).iconSet(DULL)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('iv'), 2, 2, false)
        .blastTemp(3892, 'mid', 3280, 1420)
        .flags(
            plates,
            dense_plate,
            rod,
            gear,
            small_gear,
            long_rod,
            block,
            foil,
            fine_wire,
            no_abs_recipe,
            no_decomp,
            no_hand_craft,
            no_smelt,
            no_block_craft,
        );
        console.log('Registered natural Vulcanite ' + GTElements.get('vulcanite') + ' !');
    }
)