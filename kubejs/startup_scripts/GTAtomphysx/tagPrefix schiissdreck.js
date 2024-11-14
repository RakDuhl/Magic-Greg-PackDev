//priority: 9305

//This part is used from the modpack ReFactory: Expert
let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry(
    'gtceu:tag_prefix', 
    event => {
        function createStoneTypeOre(type, properties) {
            if (properties === undefined);
                properties = {};

            if (properties.baseModel === undefined);
                properties.baseModel = type.namespace + ":block/" + type.path;

            if (properties.material === undefined);
                properties.material = null;

            if (properties.blockState === undefined);
                properties.blockState = (() => Item.getItem(type).defaultBlockState());

            event.create(type.path, 'ore')
                .stateSupplier(properties.blockState)
                .baseModelLocation(properties.baseModel)
                .materialSupplier(properties.material)
                .unificationEnabled(true)
                .materialIconType(GTMaterialIconType.ore)
                .miningToolTag("mineable/pickaxe")
                .generationCondition(ItemGenerationCondition.hasOreProperty);
        };

//        createStoneTypeOre('xycraft_world:kivi');

//        createStoneTypeOre('create:asurine', {blockState: () => UtilsJS.parseBlockState("creat:asurine")});
//        createStoneTypeOre('create:crimsite', {blockState: () => UtilsJS.parseBlockState("creat:crimsite")});
//        createStoneTypeOre('create:limestone');
//        createStoneTypeOre('create:ochrum', {blockState: () => UtilsJS.parseBlockState("creat:ochrum")});
//        createStoneTypeOre('create:scoria');
//        createStoneTypeOre('create:scorchia');
//        createStoneTypeOre('create:veridium', {blockState: () => UtilsJS.parseBlockState("creat:veridium")});
    }
)



GTCEuStartupEvents.materialModification(
    event => {
//        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_storage_blue'));
//        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_green'));
//        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_red'));
//        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_dark'));
//        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_light'));
//
//        TagPrefix.ore['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_blue'));
//        TagPrefix.ore['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_green'));
//        TagPrefix.ore['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_red'));
//        TagPrefix.ore['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_dark'));
//        TagPrefix.ore['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_light'));
//        TagPrefix.oreDeepslate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_blue'));
//        TagPrefix.oreDeepslate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_green'));
//        TagPrefix.oreDeepslate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_red'));
//        TagPrefix.oreDeepslate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_dark'));
//        TagPrefix.oreDeepslate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_light'));
//        
//        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_gem_blue'));
//        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_green'));
//        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_red'));
//        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_dark'));
//        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_light'));

//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'),    () => Item.getItem('botania:manasteel_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'),    () => Item.getItem('botania:manasteel_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'),    () => Item.getItem('botania:manasteel_nugget'));
        
//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'),   () => Item.getItem('botania:terrasteel_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'),   () => Item.getItem('botania:terrasteel_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'),   () => Item.getItem('botania:terrasteel_nugget'));

//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'),   () => Item.getItem('botania:elementium_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'),   () => Item.getItem('botania:elementium_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'),   () => Item.getItem('botania:terrasteel_nugget'));

//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_nugget'));
//        TagPrefix.rawOre[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:raw_arcane_gold'));
//        TagPrefix.ore[      'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_ore'));
//        TagPrefix.ore[      'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:deepslate_arcane_gold_ore'));
//        TagPrefix.ore[      'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:nether_arcane_gold_ore'));
//        TagPrefix.rawOreBlock['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:raw_arcane_gold_block'));
//        TagPrefix.plate[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:arcane_gold_sheet'));
//        TagPrefix.crushed[  'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('arcanegold'),   () => Item.getItem('wizards_reborn:crushed_raw_arcane_gold'));

//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_block'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_ingot'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'),     () => Item.getItem('mythicbotany:alfsteel_nugget'));

//        TagPrefix.block[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_crystal_cluster'));
//        TagPrefix.ingot[    'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_crystal'));
//        TagPrefix.nugget[   'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_shard'));
//        TagPrefix.dust[     'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ember'),        () => Item.getItem('embers:ember_grit'));

    }
)
