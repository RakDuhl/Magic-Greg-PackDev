// priority: 9001
//Fluids
StartupEvents.registry(
    'fluid',
    event => {
        event.create('mana')
            .displayName('Mana')
            .noBucket()
            .stillTexture('kubejs:block/mana_still')
            .flowingTexture('kubejs:block/mana_flowing')
            .viscosity(1)
    }
)