//priority: 9305

GTCEuStartupEvents.materialModification(
    event => {
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'),    () => Item.getItem('botania:manasteel_block'));
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'),    () => Item.getItem('botania:manasteel_ingot'));
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'),    () => Item.getItem('botania:manasteel_nugget'));
        
        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'),   () => Item.getItem('botania:terrasteel_block'));
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'),   () => Item.getItem('botania:terrasteel_ingot'));
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'),   () => Item.getItem('botania:terrasteel_nugget'));

        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'),   () => Item.getItem('botania:elementium_block'));
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'),   () => Item.getItem('botania:elementium_ingot'));
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'),   () => Item.getItem('botania:terrasteel_nugget'));

        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_block'));
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_ingot'));
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_nugget'));
        TagPrefix.rawOre[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:raw_arcane_gold'));
//        TagPrefix.ore[      'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_ore'));
//        TagPrefix.ore[      'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:deepslate_arcane_gold_ore'));
//        TagPrefix.ore[      'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:nether_arcane_gold_ore'));
//        TagPrefix.rawOreBlock['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:raw_arcane_gold_block'));
        TagPrefix.plate[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_sheet'));
        TagPrefix.crushed[  'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:crushed_raw_arcane_gold'));

        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_block'));
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_ingot'));
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_nugget'));

        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_crystal_cluster'));
        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_crystal'));
        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_shard'));
        TagPrefix.dust[     'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_grit'));

    }
)