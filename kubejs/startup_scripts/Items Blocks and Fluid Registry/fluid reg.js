// priority: 9025
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