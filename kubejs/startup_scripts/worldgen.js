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

//WorldGen Layers
GTCEuStartupEvents.registry(
    'gtceu:world_gen_layer',
    event => {
        event.create('twilight_forest')
            .targets('minecraft:stone', 'minecraft:diorite', 'minecraft:andesite', 'minecraft:granite')
            .dimensions('twilightforest:twilight_forest_type')
    }
)