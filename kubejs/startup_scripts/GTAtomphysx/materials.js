// priority: 8900

//Superscript   ¹²³⁴⁵⁶⁷⁸⁹⁰⁺⁻⁼⁽⁾
//Subscript     ₁₂₃₄₅₆₇₈₉₀₊₋₌₍₎
//Special characters ✬
//Ag₄✬₆

GTCEuStartupEvents.registry(
    'gtceu:material',
    event => {

        event.create('mana')
//        .components('2x mana')
        .element(GTElements.get('Mana'))
        .fluid()
        .color(0x20DAFF);
        
        event.create('adamantium')
        .element(GTElements.get('Adamantium'))
        .color(0xAD0F0D).secondaryColor(0x64082B).iconSet(DULL)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('zpm'), 8, 0, false)
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
            no_abs_recipe
        );
        
        event.create('mithril')
        //Ag₄✬₆Ti
        .components('4x silver', '6x mana', 'titanium')
        .color(0xd6edff).secondaryColor(0x9BFFFF).iconSet(SHINY)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('ev'), 2, 0, false)
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
            no_abs_recipe
        );
        
        event.create('arcane_gold')
        //Au₃✬₃
        .components('3x gold', '3x mana')
        .color(0xEDC992).iconSet(SHINY)
        .fluid()
        .ingot()
        .cableProperties(V('ev'), 3, 0, true)
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
        
        event.create('vulcanite')
        //
        .element(GTElements.get('Vulcanite'))
        .color(0xFFB08A).secondaryColor(0xF24F00).iconSet(DULL)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('iv'), 2, 1, false)
        .blastTemp(2320, 'mid', 3280, 250)
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
        
        event.create('hihiirokane')
        //
        .element(GTElements.get('hihiirokan'))
        .color(0xF24F7D).secondaryColor(0xF24F00).iconSet(METALLIC)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('uv'), 3, 0, true)
        .blastTemp(3972, 'high', 58470, 510)
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
        
        event.create('prometheum')
        //
        .element(GTElements.get('prometheum'))
        .color(0x5A8156).secondaryColor(0x354D33).iconSet(DULL)
        .ingot()
        .fluid()
        .ore()
        .cableProperties(V('hv'), 3, 0, true)
        .blastTemp(1580, null, 620, 185)
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
        
        event.create('orichalcum')
        //
        .element(GTElements.get('Orichalcum'))
        .color(0x780874).secondaryColor(0xF871E3).iconSet(METALLIC)
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

        event.create('mana_steel')
        //Fe₃✬₃
        .components('3x iron', '3x mana')
        .color(0x67b9ee).secondaryColor(0xB5FFFC).iconSet(METALLIC)
        .ingot()
        .fluid()
        .cableProperties(V('mv'), 2, 0, false)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod
        );
        
        event.create('elementium')
        //(Fe₃✬₃)₂(SiO₂)₄Fe
//        .components('2x mana_steel', '3x amethyst', '2x silver')
        .color(0xE084A5).secondaryColor(0xC543A8).iconSet(SHINY)
        .fluid()
        .ingot()
        .cableProperties(V('ev'), 4, 0, false)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod
        );
        
        event.create('terra_steel')
        //(Fe₃✬₃)₃✬₆V₃
//        .components('3x mana_steel', '6x mana', '3x vanadium')
        .color(0xCCFFB5).secondaryColor(0x2BB93B).iconSet(SHINY)
        .fluid()
        .ingot()
        .cableProperties(V('iv'), 4, 0, true)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod
        );

        
        event.create('alfsteel')
        //W₂Ma₇((Fe₃✬₃)₂(SiO₂)₄Fe)₂
//        .components('2x tungsten', '7x mana', '2x elementium')
        .color(0xFFC74E).secondaryColor(0xE27500).iconSet(SHINY)
        .fluid()
        .ingot()
        .cableProperties(V('luv'), 6, 0, true)
        .blastTemp(2759, 'mid', 5800, 100)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod,
            no_abs_recipe 
        );
        
    }
)


GTCEuStartupEvents.materialModification(
    event => {
//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_nugget'));
//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_nugget'));
//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'),  () => Item.getItem('wizards_reborn:arcane_gold_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'),  () => Item.getItem('wizards_reborn:arcane_gold_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'),  () => Item.getItem('wizards_reborn:arcane_gold_nugget'));
//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_nugget'));
    }
);