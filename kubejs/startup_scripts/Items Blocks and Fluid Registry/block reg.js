//priority: 9035

//function for general convenience later
const capitalizeFirstLetter = (str) => str.split('_').map(word => word.charAt(0).toUpperCase() + str.slice(1)).join(' ');

//Blocks
StartupEvents.registry(
    'block',
    event => {
        event.create('manasteel_coil_block', 'gtceu:coil')
        .soundType('metal')
        .temperature(2421)
        //.level() states what's the max amount of items it can Parallelize (Int * 32)
        .level(2)
        //.energyDiscount() has a value from 1 to 16. It gets calculated by dividing 16 by (Int)
        .energyDiscount(2)
        //.tier() is used for the energy discount in the cracking unit (100 - 10 * coilTier) and pyrolyse oven (100 - 10 * tier)
        .tier(2)
        .coilMaterial(() => GTMaterials.get('manasteel'))
        .texture('kubejs:block/coils/coil_manasteel')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool');

        event.create('mithril_coil_block', 'gtceu:coil')
        .soundType('metal')
        .temperature(3631)
        .level(3)
        .energyDiscount(3)
        .tier(3)
        .coilMaterial(() => GTMaterials.get('mithril'))
        .texture('kubejs:block/coils/coil_mithril')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool');
        
//        event.create('emberscorch_coil_block', 'gtceu:coil')
//        .soundType('metal')
//        .temperature(4842)
//        .level(4)
//        .energyDiscount(4)
//        .tier(4)
//        .coilMaterial(() => GTMaterials.get('emberscorch'))
//        .texture('kubejs:block/coils/coil_emberscorch')
//        .hardness(5)
//        .requiresTool(true)
//        .resistance(5)
//        .tagBlock('forge:mineable/wrench')
//        .tagBlock('minecraft:needs_iron_tool');

//        event.create('toughlite_coil_block', 'gtceu:coil')
//        .soundType('metal')
//        .temperature(6052)
//        .level(5)
//        .energyDiscount(5)
//        .tier(5)
//        .coilMaterial(() => GTMaterials.get('toughlite'))
//        .texture('kubejs:block/coils/coil_toughlite')
//        .hardness(5)
//        .requiresTool(true)
//        .resistance(5)
//        .tagBlock('forge:mineable/wrench')
//        .tagBlock('minecraft:needs_iron_tool');

        event.create('vulcanite_coil_block', 'gtceu:coil')
        .soundType('metal')
        .temperature(9684)
        .level(8)
        .energyDiscount(8)
        .tier(8)
        .coilMaterial(() => GTMaterials.get('vulcanite'))
        .texture('kubejs:block/coils/coil_vulcanite')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool');
        
        event.create('atlarus_coil_block', 'gtceu:coil')
        .soundType('metal')
        .temperature(14526)
        .level(16)
        .energyDiscount(16)
        .tier(16)
        .coilMaterial(() => GTMaterials.get('atlarus'))
        .texture('kubejs:block/coils/coil_atlarus')
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
