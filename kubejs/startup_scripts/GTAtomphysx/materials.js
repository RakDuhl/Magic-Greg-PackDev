// priority: 8900

GTCEuStartupEvents.materialModification(
    event => {
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_block'))
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_ingot'))
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'),   () => Item.getItem('botania:manasteel_nugget'))
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_block'))
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_ingot'))
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'),  () => Item.getItem('botania:terrasteel_nugget'))
//        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'), () => Item.getItem('wizards_reborn:arcane_gold_block'))
//        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'), () => Item.getItem('wizards_reborn:arcane_gold_ingot'))
//        TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcane_gold'), () => Item.getItem('wizards_reborn:arcane_gold_nugget'))
//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_block'))
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_ingot'))
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_nugget'))
    }
);

GTCEuStartupEvents.registry(
    'gtceu:material',
    event => {
        event.create('mana_steel')
        .fluid()
        .color(0x67b9ee)
        .element(GTElements.get('mana_steel'))
        .cableProperties(GTValues.V[GTValues.LV], 2, 0, true)
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        )

        event.create('terra_steel')
        .color(0x55f609)
        .ingot()
        .element(GTElements.get('terrasteel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.EV], 6, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME
        )
    }
)
