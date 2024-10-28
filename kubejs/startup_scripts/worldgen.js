//priority: 100

WorldgenEvents.remove(
    event => {
        event.removeOres( 
            ores => {
                ores.blocks = [
                    'luckytntmod:uranium_ore', 'luckytntmod:deepslate_uranium_ore', 'luckytntmod:gunpowder_ore', 'luckytntmod:deepslate_gunpowder_ore',

                    'projectred_exploration:ruby_ore', 'projectred_exploration:deepslate_ruby_ore', 'projectred_exploration:sapphire_ore', 'projectred_exploration:deepslate_sapphire_ore', 'projectred_exploration:peridot_ore', 'projectred_exploration:deepslate_peridot_ore', 'projectred_exploration:tin_ore', 'projectred_exploration:deepslate_tin_ore', 'projectred_exploration:silver_ore', 'projectred_exploration:deepslate_silver_ore', 'projectred_exploration:electrotine_ore', 'projectred_exploration:deepslate_electrotine_ore',
                    
                    'iceandfire:silver_ore', 'iceandfire:sapphire_ore', 'iceandfire:deepslate_silver_ore',

                    'bigreactors:yellorite_ore', 'bigreactors:deepslate_yellorite_ore', 'bigreactors:anglesite_ore', 'bigreactors:benitoite_ore',

                    'xycraft_world:xychorium_ore_kivi_light', 'xycraft_world:aluminum_ore_stone', 'xycraft_world:aluminum_ore_deepslate', 'xycraft_world:aluminum_ore_kivi',

                    'wizards_reborn:nether_salt_ore', 
                    
                    'embers:lead_ore', 'embers:deepslate_lead_ore', 'embers:silver_ore', 'embers:deepslate_silver_ore', 'bigreactors:yellorite_ore'
                    ]
            }
        )
    }
)

let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function createStoneTypeOre(type, properties) {
        if (properties === undefined);
            properties = {};

        if (properties.baseModel === undefined);
            properties.baseModel = type.namespace + ":block/" + type.path;

        if (properties.material === undefined);
            properties.material = null;

        if (properties.blockState === undefined);
            properties.blockState = (() => Block.getBlock(type).defaultBlockState());

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty);
    };

    createStoneTypeOre('xycraft_world:kivi');

    createStoneTypeOre('create:asurine', { baseModel: 'create:block/asurine_natural_0' });
    createStoneTypeOre('create:crimsite', { baseModel: 'create:block/crimsite_natural_0' });
    createStoneTypeOre('create:limestone');
    createStoneTypeOre('create:ochrum', { baseModel: 'create:block/ochrum_natural_0' });
    createStoneTypeOre('create:scoria');
    createStoneTypeOre('create:scorchia');
    createStoneTypeOre('create:veridium', { baseModel: 'create:block/veridium_natural_0' });
})