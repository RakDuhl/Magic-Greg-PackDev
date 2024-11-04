//priority: 9309
/**
 * Script for all the naturally spawning materials
 */

console.log('Registering all custom natural Materials and Elements!')

GTCEuStartupEvents.registry(
    'gtceu:material_icon_set',
    icon => {
        icon.create('wissen').parent(NETHERSTAR)
        icon.create('orichalcum').parent(BRIGHT)
        icon.create('rosequartz').parent(CERTUS)
        icon.create('arcanegold').parent(BRIGHT)
        icon.create('spinel').parent(RUBY)
        icon.create('mana').parent(QUARTZ)
        icon.create('ember').parent(QUARTZ)
//        icon.create().parent()
//        icon.create().parent()
    }
)

//First Stage Materials
GTCEuStartupEvents.registry(
    'gtceu:material',
    material => {
        //Arcane Element for Mana
        material.create('mana')
//        .components('2x mana')
        .element(GTElements.get("mana"))
        .fluid()
        .gem()
        .color(0xFFFFFF).iconSet('mana');
        console.log('Registered arcane element Mana ' + GTElements.get('mana') + ' !');

        //Arcane Element for Ember
        material.create('ember')
        //🔥
        .element(GTElements.get("ember"))
        .color(0xFFFFFF).iconSet('ember')
        .gem()
        .flags(
            lens
        );
        console.log('Registered arcane element Ember ' + GTElements.get('ember') + ' !');

        material.create('wissen')
        //⚙
        .element(GTElements.get("wissen"))
        .color(0xFFFFFF).secondaryColor(0xCDEDFE).iconSet('wissen')
        .gem()
        .flags(
            lens,
            no_decomp,
        );
        console.log('Registered arcane element Wissen ' + GTElements.get('wissen') + ' !');

        //Stardust
        //Found anywhere, very rare
        material.create('stardust')
        //Sd
        .element(GTElements.get("stardust"))
        .color(0x42599D).secondaryColor(0xCCF2FF).iconSet(NETHERSTAR)
        .dust()
        .ore()
        .flags(
            centrifuge
        )
        .addOreByproducts();
        console.log('Registered cosmic material Stardust ' + GTElements.get('stardust') + ' !');
    }
)

GTCEuStartupEvents.registry(
    'gtceu:material',
    material => {



        //Create Rose Quartz
        material.create('rosequartz')
        .components('8x redstone', '1x quartzite')
        //GTMaterials.Reds
        .gem()
        .color(0xFFFFFF).secondaryColor(0xFFF2E0).iconSet('rosequartz')
        .flags(
            electrolyze
        );


        //Arcane Gold
        //Au★
        //Early game arcane Alloy with gold
        //Same as Mithril with conductivity, can take higher Amps
        material.create('arcanegold')
        .components('1x gold', '1x mana')
        .color(0xFFFFFF).iconSet('arcanegold')
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
            solder_mat_good,
            electrolyze
        )
        .addOreByproducts();
        console.log('Registered arcane alloy Arcane Gold ' + GTMaterials.get('arcanegold') + ' !');


        //Ember Quartz
        //gem material for getting Ember
        material.create('emberquartz')
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
        material.create('adamantium')
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
        .toolStats(
            ToolProperty.Builder.of(25.0, 1.0, 12400, 5).attackSpeed(0.1).enchantability(18).build()
        )
        .addOreByproducts('scheelite', 'hematite', 'ruby',);
        console.log('Registered natural Adamantium ' + GTElements.get('adamantium') + ' !');
        
        //Mithril
        //Ag₄★₆Ti
        //EV alloy, great conductivity, magical superconductor
        //Required for circuits
        material.create('mithril')
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
            solder_mat,
            electrolyze
        )
        .addOreByproducts('ilmenite', 'silver',);
        console.log('Registered natural Mithril ' + GTMaterials.get('mithril') + ' !');
        
        //Prometheum
        //Catalyst element, used for various chemical tasks
        //Horrible conductor
        material.create('prometheum')
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
        )
        .addOreByproducts('spodumene', 'alunite',);
        console.log('Registered natural Prometheum ' + GTElements.get('prometheum') + ' !');
        
        //Orichalcum
        //
        material.create('orichalcum')
        .element(GTElements.get("orichalcum"))
        .color(0xFFFFFF).iconSet('orichalcum')
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
        material.create('vulcanite')
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
        )
        .addOreByproducts('obsidian', 'hematite',);
        console.log('Registered natural Vulcanite ' + GTElements.get('vulcanite') + ' !');

        //Ca(Li₂Al)Al₆(BO₃)₃Si₆O₁₈(OH)₃F
        material.create('arcanespinel')
 //       .element(GTElements.get('arcanespinel'))
        .components('2x mana', 'calcium', 'dilithiumalumite', '6x aluminium', 'borate3', '6x silicon', '18x oxygen', '4x ember', 'hydroxyl', 'fluorine')
        .color(0xFFFFFF).iconSet('spinel')
        .gem(3)
        .ore(2,3, true,)
        .flags(
            block,
            electrolyze
        )
    }
)

GTCEuStartupEvents.materialModification(
    event => {
        GTMaterials.get('arcanespinel').setFormula('★2Ca(Li2Al)Al6(BO3)3Si6O18🔥4(OH)3F');
    }
)