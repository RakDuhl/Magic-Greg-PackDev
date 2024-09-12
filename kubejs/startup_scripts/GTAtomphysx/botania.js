GTCEuStartupEvents.registry(
    'gtceu:material',
    event => {
        event.create('mana_steel')
        .fluid()
        .color(0x67b9ee)
        .element(GTElements.get('mana_steel'))
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
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
        .cableProperties(GTValues.V[GTValues.MV], 8, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME
        )
    }
)

GTCEuStartupEvents.materialModification(
    event => {
        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'), () => Item.getItem('botania:manasteel_nugget'))
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'), () => Item.getItem('botania:manasteel_ingot'))
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'), () => Item.getItem('botania:terrasteel_ingot'))
        TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana_steel'), () => Item.getItem('botania:manasteel_nugget'))
        TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terra_steel'), () => Item.getItem('botania:terrasteel_nugget'))

    }
)