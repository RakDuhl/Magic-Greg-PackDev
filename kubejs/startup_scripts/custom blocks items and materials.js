// priority: 9000

//Fluids
StartupEvents.registry(
    'fluid',
    event => {
        event.create('mana')
            .displayName('Mana')
            .noBucket()
            .stillTexture('magicgreg:block/mana_still')
            .flowingTexture('magicgreg:block/mana_flowing')
            .viscosity(1)
    }
)


//Blocks
StartupEvents.registry(
    'block',
    event => {
        event.create('magicgreg:manasteel_coil_block', 'gtceu:coil')
        .soundType('metal')
        .temperature(3750)
        .level(24)
        .energyDiscount(8)
        .tier(3)
        .coilMaterial(() => GTMaterials.get('mana_steel'))
        .texture('magicgreg:block/coils/coil_manasteel')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('magicgreg:incomplete_generator_block')
        .displayName('Incomplete Generator')
        .texture('north', 'magicgreg:block/machines/incomplete_generator_side')
        .texture('south', 'magicgreg:block/machines/incomplete_generator_side')
        .texture('east', 'magicgreg:block/machines/incomplete_generator_side')
        .texture('west', 'magicgreg:block/machines/incomplete_generator_side')
        .texture('up', 'magicgreg:block/machines/incomplete_generator_top')
        .texture('down', 'magicgreg:block/machines/incomplete_generator_top')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('magicgreg:incomplete_basic_machine_frame')
        .displayName('Incomplete Basic Machine Frame')
        .textureAll('magicgreg:block/machines/incomplete_basic_machine')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('magicgreg:incomplete_redstone_controll')
        .displayName('Incomplete Redstone Controller')
        .textureAll('magicgreg:block/machines/incomplete_redston_controller')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('magicgreg:incomplete_advanced_machine_frame')
        .displayName('Incomplete Generator')
        .textureAll('magicgreg:block/machines/incomplete_advanced_machine')
        .soundType('metal')
        .hardness(3)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event.create('magicgreg:zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(16)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('mana_steel'))
        .texture('magicgreg:block/coils/machine_coil_zalloy')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal');
    }
)

StartupEvents.registry(
    'item',
    event => {
        event
            .create('magicgreg:mainframe_housing')
            .displayName('Standard Serverrack Frame')
            .texture('magicgreg:item/mainframe_housing');
    }
)