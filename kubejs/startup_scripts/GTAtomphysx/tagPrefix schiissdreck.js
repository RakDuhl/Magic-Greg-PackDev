//priority: 9305


const TagPrefixRule = 'setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])';
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
//        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_storage_blue'));
//        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_green'));
//        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_red'));
//        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_dark'));
//        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_storage_light'));
//
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_blue'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_green'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_red'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_dark'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_stone_light'));
//        TagPrefix.oreDeepslate[TagPrefixRule]   (GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_blue'));
//        TagPrefix.oreDeepslate[TagPrefixRule]   (GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_green'));
//        TagPrefix.oreDeepslate[TagPrefixRule]   (GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_red'));
//        TagPrefix.oreDeepslate[TagPrefixRule]   (GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_dark'));
//        TagPrefix.oreDeepslate[TagPrefixRule]   (GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_ore_deepslate_light'));
//        
//        TagPrefix.gem[TagPrefixRule]            (GTMaterials.get('bluexychorium'), () => Item.getItem('xycraft_world:xychorium_gem_blue'));
//        TagPrefix.gem[TagPrefixRule]            (GTMaterials.get('greenxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_green'));
//        TagPrefix.gem[TagPrefixRule]            (GTMaterials.get('redxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_red'));
//        TagPrefix.gem[TagPrefixRule]            (GTMaterials.get('darkxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_dark'));
//        TagPrefix.gem[TagPrefixRule]            (GTMaterials.get('lightxychorium'), () => Item.getItem('xycraft_world:xychorium_gem_light'));

        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_block'));
        TagPrefix.ingot[TagPrefixRule]          (GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'));
        TagPrefix.nugget[TagPrefixRule]         (GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_nugget'));
        
        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_block'));
        TagPrefix.ingot[TagPrefixRule]          (GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'));
        TagPrefix.nugget[TagPrefixRule]         (GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_nugget'));

        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_block'));
        TagPrefix.ingot[TagPrefixRule]          (GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'));
        TagPrefix.nugget[TagPrefixRule]         (GTMaterials.get('elementium'), () => Item.getItem('botania:terrasteel_nugget'));

        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:arcane_gold_block'));
        TagPrefix.ingot[TagPrefixRule]          (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:arcane_gold_ingot'));
        TagPrefix.nugget[TagPrefixRule]         (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:arcane_gold_nugget'));
//        TagPrefix.rawOre[TagPrefixRule]         (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:raw_arcane_gold'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:arcane_gold_ore'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:deepslate_arcane_gold_ore'));
//        TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:nether_arcane_gold_ore'));
//        TagPrefix.rawOreBlock[TagPrefixRule]    (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:raw_arcane_gold_block'));
        TagPrefix.plate[TagPrefixRule]          (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:arcane_gold_sheet'));
//        TagPrefix.crushed[TagPrefixRule]        (GTMaterials.get('arcanegold'), () => Item.getItem('wizards_reborn:crushed_raw_arcane_gold'));

        //TagPrefix.ore[TagPrefixRule]            (GTMaterials.get('arcanum'), () => Item.getItem('wizards_reborn:arcanum_ore'));
        //TagPrefix.oreDeepslate[TagPrefixRule]   (GTMaterials.get('arcanum'), () => Item.getItem('wizards_reborn:deepslate_arcanum_ore'));
        TagPrefix.gem[TagPrefixRule]            (GTMaterials.get('arcanum'), () => Item.getItem('wizards_reborn:arcanum'));
        TagPrefix.dust[TagPrefixRule]           (GTMaterials.get('arcanum'), () => Item.getItem('wizards_reborn:arcanum_dust'));
        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('arcanum'), () => Item.getItem('wizards_reborn:arcanum_block'));

        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('alfsteel'), () => Item.getItem('mythicbotany:alfsteel_block'));
        TagPrefix.ingot[TagPrefixRule]          (GTMaterials.get('alfsteel'), () => Item.getItem('mythicbotany:alfsteel_ingot'));
        TagPrefix.nugget[TagPrefixRule]         (GTMaterials.get('alfsteel'), () => Item.getItem('mythicbotany:alfsteel_nugget'));

        TagPrefix.block[TagPrefixRule]          (GTMaterials.get('ember'), () => Item.getItem('embers:ember_crystal_cluster'));
        TagPrefix.ingot[TagPrefixRule]          (GTMaterials.get('ember'), () => Item.getItem('embers:ember_crystal'));
        TagPrefix.nugget[TagPrefixRule]         (GTMaterials.get('ember'), () => Item.getItem('embers:ember_shard'));
        TagPrefix.dust[TagPrefixRule]           (GTMaterials.get('ember'), () => Item.getItem('embers:ember_grit'));

    }
)
