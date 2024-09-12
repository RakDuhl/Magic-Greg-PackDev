// priority: 100

JEIEvents.hideItems(
    event => {
        event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
        event.hide('mekanism:upgrade_anchor')
        event.hide(Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:}}]}}'))
        event.hide(/gtceu:.*_bucket/)
        event.hide(/gtceu:(granite|diorite|andesite|deepslate|tuff|sand|red_sand|gravel|basalt|netherrack|endstone|red_granite|marble|blackstone)_.*_ore/)
        event.hide(/.*:.*_spawn_egg/)
        event.hide('enderio:filled_soul_vial')
        event.hide('irons_spellbooks:scroll')

        Color.DYE.forEach(
            color => {
                ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
                .forEach(
                    machine => {
                        event.hide(`refinedstorage:${color}_${machine}`)
                    }
                )
            }
        );
  
        Color.DYE.forEach(
            color => {
                ['stained_framed_glass', 'stained_framed_glass_door', 'stained_framed_glass_trapdoor', 'stained_framed_glass_pane', 'stained_tiled_glass_pane', 'stained_tiled_glass']
                .forEach(
                    type => {
                        event.hide(`createframed:${color}_${type}`)
                    }
                )
                ['horizontal', 'vertical']
                .forEach(
                    direction => {
                        event.hide(`createframed:${direction}_${color}_${type}`)
                    }
                )
            }
        );

        event.forEach(
            modID => {
                ['thermal', 'twilightforest', 'supplementaries', 'quark', 'mythicbotany', 'irons_spellbooks', 'iceandfire', 'minecraft']
                event.hide(`${modID}:`)
            }
        );
    }
)
