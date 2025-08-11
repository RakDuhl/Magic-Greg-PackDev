//priority: 9398


GTCEuStartupEvents.registry(
    'gtceu:recipe_type',
    machine => {
        //ULV Machines
        machine.create('mana_steam_boiler')
            .category('mana_steam_boiler')
            .setMaxIOSize(2, 0, 6, 2)
            .setSound(GTSoundEntries.BOILER);

        //LV Machines
        machine.create('create_combustion_engine')
            .category('create_combustion_engine')
            .setMaxIOSize(1, 0, 0, 0)
            .setSound(GTSoundEntries.COMBUSTION);
        machine.create('kinetic_steam_turbine')
            .category('kinetic_steam_turbine')
            .setMaxIOSize(0, 0, 4, 1)
            .setSound(GTSoundEntries.TURBINE);
        machine.create('huge_kinetic_alternator')
            .category('huge_kinetic_alternator')
            .setMaxIOSize(0, 0, 4, 0)
            .setEUIO('out')
            .setSound(GTSoundEntries.MOTOR);

        //MV Machines
        machine.create('alchemical_flower')
            .category('alchemical_flower')
            //Sets how many IO ports it can have. (Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs)
            .setMaxIOSize(2, 2, 0, 0)
            .setSound(GTSoundEntries.COMPRESSOR);
        machine.create('big_pool')
            .category('big_pool')
            .setMaxIOSize(4, 4, 6, 0)
            .setSound(GTSoundEntries.BATH);
        machine.create('extreme_embers_boiler')
            .category('extreme_embers_boiler')
            .setMaxIOSize(12, 0, 8, 5)
            .setSound(GTSoundEntries.BOILER);

        //HV Machines
        machine.create('multi_alloy_smelter')
            .category('multi_alloy_smelter')
            .setMaxIOSize(5, 1, 6, 2)
            .setSound(GTSoundEntries.FURNACE);


        //EV Machines
        machine.create('terrestrial_chamber')
            .category('terrestrial_chamber')
            .setMaxIOSize(2, 1, 12, 0)
            .setSound(GTSoundEntries.REPLICATOR);

        //IV Machines


        //LuV Machines


        //ZPM Machines


        //UV Machines
        machine.create('singularity_compressor')
            .category('singularity_compressor')
            //Sets how many IO ports it can have. (Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs)
            .setMaxIOSize(27, 4, 12, 0)
            .setSound(GTSoundEntries.SCIENCE);

        //UHV Machines

    }
)