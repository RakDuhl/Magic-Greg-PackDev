//priority: 9398


GTCEuStartupEvents.registry(
    'gtceu:recipe_type',
    event => {
        event.create('alchemical_flower')
            .category('alchemical_flower')
            //Sets how many IO ports it can have. (Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs)
            .setMaxIOSize(2, 2, 0, 0)
            .setSound(GTSoundEntries.COMPRESSOR);

        event.create('create_combustion_engine')
            .category('create_combustion_engine')
            .setMaxIOSize(1, 0, 0, 0)
            .setSound(GTSoundEntries.COMBUSTION);

//        event.create('kinetic_alternator')
//            .category('kinetic_alternator')
//            .setMaxIOSize(0, 0, 1, 0)
//            .setSound(GTSoundEntries.MOTOR);

        event.create('big_pool')
            .category('big_pool')
            .setMaxIOSize(4, 4, 6, 0)
            .setSound(GTSoundEntries.BATH);

        event.create('terrestrial_chamber')
            .category('terrestrial_chamber')
            .setMaxIOSize(2, 1, 12, 0)
            .setSound(GTSoundEntries.REPLICATOR);

//        event.create('arcane_alloyer')
//            .category('arcane_alloyer')
//            .setMaxIOSize(9, 2, 3, 2)
//            .setSound(GTSoundEntries.FURNACE);

        event.create('singularity_compressor')
            .category('singularity_compressor')
            //Sets how many IO ports it can have. (Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs)
            .setMaxIOSize(27, 4, 12, 0)
            .setSound(GTSoundEntries.SCIENCE);

        event.create('multi_alloy_smelter')
            .category('multi_alloy_smelter')
            .setMaxIOSize(5, 1, 6, 2)
            .setSound(GTSoundEntries.FURNACE);

        event.create('mana_steam_boiler')
            .category('mana_steam_boiler')
            .setMaxIOSize(2, 0, 6, 2)
            .setSound(GTSoundEntries.BOILER);
    }
)