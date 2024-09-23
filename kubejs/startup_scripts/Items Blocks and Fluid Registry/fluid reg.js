// priority: 9001
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