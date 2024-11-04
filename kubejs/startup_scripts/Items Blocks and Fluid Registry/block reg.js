//priority: 9035

//function for general convenience later
const capitalizeFirstLetter = (str) => str.split('_').map(word => word.charAt(0).toUpperCase() + str.slice(1)).join(' ');

//Blocks
StartupEvents.registry(
    'block',
    event => {
        event.create('manasteel_coil_block', 'gtceu:coil')
        .soundType('metal')
        .temperature(3750)
        .level(24)
        .energyDiscount(8)
        .tier(3)
        .coilMaterial(() => GTMaterials.get('mana_steel'))
        .texture('kubejs:block/coils/coil_manasteel')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('incomplete_generator_block')
        .displayName('Incomplete Generator')
        .texture('north', 'kubejs:block/machines/incomplete_generator_side')
        .texture('south', 'kubejs:block/machines/incomplete_generator_side')
        .texture('east', 'kubejs:block/machines/incomplete_generator_side')
        .texture('west', 'kubejs:block/machines/incomplete_generator_side')
        .texture('up', 'kubejs:block/machines/incomplete_generator_top')
        .texture('down', 'kubejs:block/machines/incomplete_generator_top')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('incomplete_basic_machine_frame')
        .displayName('Incomplete Basic Machine Frame')
        .textureAll('kubejs:block/machines/incomplete_basic_machine')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('incomplete_redstone_controll')
        .displayName('Incomplete Redstone Controller')
        .textureAll('kubejs:block/machines/incomplete_redston_controller')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('incomplete_advanced_machine_frame')
        .displayName('Incomplete Generator')
        .textureAll('kubejs:block/machines/incomplete_advanced_machine')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

//    event.create('mana_intake')
//        .displayName('Mana Intake')
//        .model('kubejs:block/mana_intake')
//        .soundType('metal')
//        .hardness(2)
//        .tagBlock('forge:mineable/wrench')


    //Molten Dynamics

        const MetalTypes = [
            { metal: 'copper' },
            { metal: 'gold' },
            { metal: 'iron' },
            { metal: 'lead' },
            { metal: 'nickel' },
            { metal: 'silver' },
            { metal: 'tin' },
            { metal: 'zinc' },
            { metal: 'beryllium' },
            { metal: 'cobalt' },
            { metal: 'molybdenum' },
            { metal: 'manganese' },
            { metal: 'antimony' },
            { metal: 'magnesium' },
            { metal: 'bismuth' },
            { metal: 'arcane_gold'}
        ]

/*
//This all became useless once I was suggested to add the Create: Metallurgy mod...
//I'm just keeping it for legacy sake, if I ever need it again...
        event.create('kubejs:empty_ingot_mold')
            .displayName('Empty Ingot Mold')
            .model('kubejs:block/moltendynamics/mold')
            .soundType('deepslate')
            .hardness(0.1)
            .resistance(0.5)
            .tagBlock('mineable/pickaxe')
            .renderType('cutout')
            .fullBlock(false)
            .box(5, 0, 3, 11, 4, 13, true);

        event.create('kubejs:empty_block_mold')
            .displayName('Empty Block Mold')
            .model('kubejs:block/moltendynamics/block_mold')
            .soundType('deepslate')
            .hardness(0.1)
            .resistance(0.5)
            .tagBlock('mineable/pickaxe')
            .renderType('cutout')
            .fullBlock(false)
            .box(1, 0, 1, 14, 14, 14, true)

        MetalTypes.forEach(
            (metalObj) => {
                const metal = metalObj.metal; 
                const metalNameUpper = capitalizeFirstLetter(metal);
        
                event.create(`kubejs:molten_${metal}_mold`)
                    .displayName(`Molten ${metalNameUpper} Ingot Mold`)
                    .model(`kubejs:block/moltendynamics/molten_${metal}_mold`)
                    .soundType('deepslate')
                    .hardness(0.1)
                    .resistance(0.5)
                    .tagBlock("mineable/pickaxe")
                    .transparent(true)
                    .fullBlock(false)
                    .box(5, 0, 3, 11, 4, 13, true);
                
                event.create(`kubejs:molten_${metal}_block_mold`)
                    .displayName(`Molten ${metalNameUpper} Block Mold`)
                    .model(`kubejs:block/moltendynamics/molten_${metal}_block_mold`)
                    .soundType('deepslate')
                    .hardness(0.1)
                    .resistance(0.5)
                    .tagBlock('mineable/pickaxe')
                    .renderType('cutout')
                    .fullBlock(false)
                    .box(1, 0, 1, 14, 14, 14, true)
            }
        );
*/
    }
)
