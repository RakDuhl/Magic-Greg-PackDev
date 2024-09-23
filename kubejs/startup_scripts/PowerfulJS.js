// priority: 9200
//Script for allowing ONLY pulling out mana from the Manapool as a Liquid
CapabilityEvents.blockEntity(
    event => {
        event.attach('botania:mana_pool',
            CapabilityBuilder.FLUID.customBlockEntity()
                .getCapacity(be => {
                   return be.updateTag.getInt('manaCap')
                })
                .getFluid(be => {
                    return Fluid.of('kubejs:mana', be.updateTag.getInt('mana'))
                })
                .onDrain((be, fluidStack, simulate) => {
                    if(!(fluidStack.id == 'kubejs:mana')) return 0
                    //let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null)
                    let mana = be.updateTag.getInt('mana')
                    let extracted = Math.min(mana, fluidStack.amount)
                    if(!simulate){
                        let data = Utils.server.getLevel('minecraft:overworld').getBlock(be.blockPos).entityData
                        data.merge({'mana':mana - extracted})
                        Utils.server.getLevel('minecraft:overworld').getBlock(be.blockPos).setEntityData(data)
                    }
                    return extracted
                }
            )
        )
    }
)