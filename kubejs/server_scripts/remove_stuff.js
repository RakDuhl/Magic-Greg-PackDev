// priority: 9999

ServerEvents.recipes(RemovingCraftingTables => {
    let AllRemovingVariable = [
        "#forge:workbench"
    ]
    RemovingCraftingTables.remove(
        {output: AllRemovingVariable}
    )
})
ServerEvents.recipes(event => {
    let Furnaces = [
        'gtceu:lv_electric_furnace',
        'gtceu:mv_electric_furnace',
        'gtceu:hv_electric_furnace',
        'gtceu:ev_electric_furnace',
        'gtceu:iv_electric_furnace',
        'gtceu:luv_electric_furnace',
        'gtceu:zpm_electric_furnace',
        'gtceu:uv_electric_furnace',
        'gtceu:primitive_blast_furnace',
        'gtceu:electric_blast_furnace',
        'projecte:dm_furnace',
        'projecte:rm_furnace',
        'quark:deepslate_furnace',
        'quark:blackstone_furnace',
        'twilightforest:cinder_furnace',
        'thermal:machine_furnace'
    ]
    event.remove(
        {output: Furnaces}
    )

    let MCStuff = [
        'minecraft:furnace',
        'minecraft:blast_furnace',
        'minecraft:enchanting_table',
        'minecraft:ender_chest',
        'minecraft:barrel',
        'minecraft:smoker',
        'minecraft:grindstone',
        'minecraft:smithing_table',
        'minecraft:stonecutter',
        'minecraft:piston',
        'minecraft:sticky_piston',
        'minecraft:observer',
        'minecraft:hopper',
        'minecraft:dispenser',
        'minecraft:dropper',
        'minecraft:daylight_detector',
        'minecraft:powered_rail',
        'minecraft:rail',
        'minecraft:detector_rail',
        'minecraft:activator_rail'
    ]
    event.remove(
        {output: MCStuff}
    )

    let ProjectEX = [
        'projectexpansion:basic_collector', 
        'projectexpansion:dark_collector', 
        'projectexpansion:red_collector', 
        'projectexpansion:magenta_collector', 
        'projectexpansion:pink_collector', 
        'projectexpansion:purple_collector', 
        'projectexpansion:violet_collector', 
        'projectexpansion:blue_collector', 
        'projectexpansion:cyan_collector', 
        'projectexpansion:green_collector', 
        'projectexpansion:lime_collector', 
        'projectexpansion:yellow_collector', 
        'projectexpansion:orange_collector', 
        'projectexpansion:white_collector', 
        'projectexpansion:fading_collector', 
        'projectexpansion:final_collector', 
        'projectexpansion:basic_compressed_collector', 
        'projectexpansion:dark_compressed_collector', 
        'projectexpansion:red_compressed_collector', 
        'projectexpansion:magenta_compressed_collector', 
        'projectexpansion:pink_compressed_collector', 
        'projectexpansion:violet_compressed_collector', 
        'projectexpansion:purple_compressed_collector', 
        'projectexpansion:blue_compressed_collector', 
        'projectexpansion:cyan_compressed_collector', 
        'projectexpansion:green_compressed_collector', 
        'projectexpansion:lime_compressed_collector', 
        'projectexpansion:yellow_compressed_collector', 
        'projectexpansion:orange_compressed_collector', 
        'projectexpansion:white_compressed_collector', 
        'projectexpansion:fading_compressed_collector', 
        'projectexpansion:final_compressed_collector',
        'projectexpansion:basic_power_flower', 
        'projectexpansion:dark_power_flower',
        'projectexpansion:red_power_flower',
        'projectexpansion:magenta_power_flower',
        'projectexpansion:pink_power_flower',
        'projectexpansion:purple_power_flower',
        'projectexpansion:violet_power_flower',
        'projectexpansion:blue_power_flower',
        'projectexpansion:cyan_power_flower',
        'projectexpansion:green_power_flower',
        'projectexpansion:lime_power_flower',
        'projectexpansion:yellow_power_flower',
        'projectexpansion:orange_power_flower',
        'projectexpansion:white_power_flower',
        'projectexpansion:fading_power_flower',
        'projectexpansion:final_power_flower',
        'projectexpansion:basic_relay',
        'projectexpansion:dark_relay',
        'projectexpansion:red_relay',
        'projectexpansion:magenta_relay',
        'projectexpansion:pink_relay',
        'projectexpansion:purple_relay',
        'projectexpansion:violet_relay',
        'projectexpansion:blue_relay',
        'projectexpansion:cyan_relay',
        'projectexpansion:green_relay',
        'projectexpansion:lime_relay',
        'projectexpansion:yellow_relay',
        'projectexpansion:orange_relay',
        'projectexpansion:white_relay',
        'projectexpansion:fading_relay',
        'projectexpansion:final_relay',
        'projecte:red_matter',
        'projecte:dark_matter',
        'projectexpansion:magenta_matter',
        'projectexpansion:pink_matter',
        'projectexpansion:purple_matter',
        'projectexpansion:violet_matter',
        'projectexpansion:blue_matter',
        'projectexpansion:cyan_matter',
        'projectexpansion:green_matter',
        'projectexpansion:lime_matter',
        'projectexpansion:yellow_matter',
        'projectexpansion:orange_matter',
        'projectexpansion:white_matter',
        'projectexpansion:matter_upgrader'
    ]
    event.remove(
        {output: ProjectEX}
    )

    let Botania = [
        'botania:apothecary_desert',
        'botania:apothecary_taiga',
        'botania:apothecary_mesa',
        'botania:apothecary_mossy',
        'botania:apothecary_livingrock',
        'botania:apothecary_deepslate',
        'botania:gaia_pylon',
        'botania:natura_pylon',
        'botania:mana_pylon',
        'botania:alfheim_portal',
        'botania:terra_plate',
        'botania:mana_spreader',
        'botania:elven_spreader',
        'botania:gaia_spreader',
        'botania:runic_altar',
        'botania:mana_distributor',
        'botania:apothecary_swamp',
        'botania:apothecary_fungal',
        'botania:apothecary_mountain',
        'botania:apothecary_plains',
        'botania:apothecary_forest',
        'botania:apothecary_default',
        'botania:fabulous_pool',
        'botania:diluted_pool',
        'botania:mana_pool'
    ]
    event.remove(
        {output: Botania}
    )

    let GTCEuStuff = [
        'gtceu:good_electronic_circuit', 
        'gtceu:basic_electronic_circuit', 
        'gtceu:microchip_processor', 
        'gtceu:micro_processor_computer', 
        'gtceu:micro_processor_mainframe', 
        'gtceu:nano_processor_mainframe',
        'gtceu:nano_processor_computer', 
        'gtceu:quantum_processor_computer', 
        'gtceu:quantum_processor_mainframe', 
        'gtceu:crystal_processor_mainframe', 
        'gtceu:wetware_processor_mainframe',
        'gtceu:compressed_coke_clay',
        'gtceu:coke_oven_brick',
        'gtceu:fireclay_dust'
    ]
    
    event.remove(
        {output: GTCEuStuff}
    )
})
