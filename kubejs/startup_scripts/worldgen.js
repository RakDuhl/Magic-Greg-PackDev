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
                    
                    'embers:lead_ore', 'embers:deepslate_lead_ore', 'embers:silver_ore', 'embers:deepslate_silver_ore', 'bigreactors:yellorite_ore',
                    
                    //'minecraft:copper_ore', 'minecraft:lapis_ore', 'wizards_reborn:arcanum_ore', 'forbidden_arcanus:xpetrified_ore', 'minecraft:diamond_ore', 'create:zinc_ore', 'xycraft_world:xychorium_ore_stone_green', 'minecraft:iron_ore', 'forbidden_arcanus:arcane_crystal_ore',
                    //'minecraft:coal_ore', 'xycraft_world:xychorium_ore_deepslate_dark', 'xycraft_world:xychorium_ore_deepslate_red', 'minecraft:deepslate_redstone_ore',
                    //'forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:stella_arcanum', 'forbidden_arcanus:stella_arcanum', 'draconicevolution:overworld_draconium_ore', 'xycraft_world:xychorium_ore_stone_light', 'xycraft_world:xychorium_ore_stone_dark', 'xycraft_world:xychorium_ore_stone_red', 'xycraft_world:xychorium_ore_stone_green', 'xycraft_world:xychorium_ore_stone_blue', 'wizards_reborn:arcanum_ore', 'wizards_reborn:arcane_gold_ore', 'forbidden_arcanus:xpetrified_ore']
                ]
            }
        )
    }
)

//WorldGen Layers
GTCEuStartupEvents.registry(
    'gtceu:world_gen_layer',
    event => {
        event.create('twilight_forest')
            .targets('minecraft:stone', 'minecraft:diorite', 'minecraft:andesite', 'minecraft:granite')
            .dimensions('twilightforest:twilight_forest')
    }
)