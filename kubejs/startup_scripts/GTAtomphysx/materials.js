// priority: 8900

GTCEuStartupEvents.materialModification(
    event => {
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_block'))
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_ingot'))
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_nugget'))
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_block'))
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_ingot'))
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_nugget'))
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'),  () => Item.getItem('wizards_reborn:arcane_gold_block'))
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'),  () => Item.getItem('wizards_reborn:arcane_gold_ingot'))
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'),  () => Item.getItem('wizards_reborn:arcane_gold_nugget'))
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_block'))
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_ingot'))
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_nugget'))
    }
);

GTCEuStartupEvents.registry(
    'gtceu:material',
    event => {
        event.create('mana_steel')
        //Fe₃✬₃
            .composition('3x iron', '3x mana')
            .fluid()
            .fluidTemp(823)
            .color(0x67b9ee)
            .secondaryColor(0xB5FFFC)
            .element(GTElements.get('mana_steel'))
            .cableProperties(V('lv'), 2, 0, true)
            .iconSet(GTMaterialIconSet.getByName('mana'))
            .flags(
                foil,
                fine_wire,
                lens,
                plates,
                rod,
                frame,
                gear,
                long_rod,
                no_abs_recipe
            );

        event.create('terra_steel')
        //Fe₃✬₆V⁽³⁾₃
            .composition('3x iron', '6x mana', '3x vanadium')
            .fluid()
            .fluidTemp(1682)
            .color(0x55f609)
            .element(GTElements.get('terrasteel'))
            .iconSet(GTMaterialIconSet.SHINY)
            .cableProperties(V('ev'), 4, 0, true)
            .flags(
                foil,
                fine_wire,
                lens,
                plates,
                rod,
                frame,
                gear,
                long_rod,
                no_abs_recipe 
            );
        

        event.create('alfsteel')
            .color(0xFFC74E)
            .fluid()
            .fluidTemp(2045)
            .secondaryColor(0xE27500)
            .element(GTElements.get('alfsteel'))
            .iconSet(GTMaterialIconSet.SHINY)
            .cableProperties(V('luv'), 6, 0, true)
            .flags(
                foil,
                fine_wire,
                lens,
                plates,
                rod,
                frame,
                gear,
                long_rod,
                no_abs_recipe 
            );
        
        event.create('adamantium')
            .ingot()
            .fluid()
            .fluidTemp(4210)
            .element(GTElements.get('adamantium'))
            .color(0xAD0F0D)
            .secondaryColor(0x64082B)
            .iconSet(DULL)
            .fluid()
            .cableProperties(V('zpm'), 8, 0, true)
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
            )
            .blastTemp(4210, 'mid', VA('luv'), 32)
            .ore();
        
        event.create('mithril')
            .ingot()
            .fluid()
            .fluidTemp(750)
            .element(GTElements.get('mithril'))
            .color(0xd6edff)
            .secondaryColor(0x9BFFFF)
            .iconSet(SHINY)
            .fluid()
            .cableProperties(V('ev'), 2, 0, true)
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
            )
            .blastTemp(750, null, VA('mv'), 300)
            .ore();
        
        event.create('arcane_gold')
        //Au₃✬₃
            .element(GTElements.get('arcane_gold'))
            .color(0xEDC992)
            .iconSet(METALLIC)
            .fluid()
            .cableProperties(V('ev'), 3, 0, true)
            .flags(
                foil,
                fine_wire,
                lens,
                plates,
                rod,
                frame,
                gear,
                long_rod,
                solder_mat_good,
                no_abs_recipe
            );

        event.create('mana')
            .fluid()
            .color(0x20DAFF)
            .fluidTemp(271)
            .composition()
    }
)