//priority: 9015

//ItemEvent.toolTierRegistry(
//    event => {
//        
//    }
//)

StartupEvents.registry(
    'item',
    items => {
        items
            .create('kubejs:mainframe_housing')
            .displayName('Standard Serverrack Frame')
            .texture('kubejs:item/mainframe_housing');

        items.create('carbon_rod')
        .displayName('Carbon Rod')
        .texture('item/carbon_rod');
        items.create('raw_carbon_rod')
        .displayName('Raw Carbon Rod')
        .texture('item/raw_carbon_rod')

        items.create('lv_small_coil')
        .displayName('LV Small Coil')
        .texture('item/lv_small_coil');
        items.create('mv_small_coil')
        .displayName('MV Small Coil')
        .texture('item/mv_small_coil');
        items.create('hv_small_coil')
        .displayName('HV Small Coil')
        .texture('item/hv_small_coil');
        items.create('ev_small_coil')
        .displayName('EV Small Coil')
        .texture('item/ev_small_coil');
        items.create('iv_small_coil')
        .displayName('IV Small Coil')
        .texture('item/iv_small_coil');
        items.create('luv_small_coil')
        .displayName('LuV Small Coil')
        .texture('item/luv_small_coil');
        items.create('zpm_small_coil')
        .displayName('ZPM Small Coil')
        .texture('item/zpm_small_coil');
        items.create('uv_small_coil')
        .displayName('UV Small Coil')
        .texture('item/uv_small_coil');

        /*
        items.create('arcane_gold_paxel', 'paxel')
            .displayName('Arcane Gold Paxel')
            .texture('kubejs:item/tools/arcane_gold_paxel')
            .tier('diamond')
            .unstackable()
            .glow(true)

        items.create('manasteel_paxel', 'paxel')
            .displayName('Mana Steel Paxel')
            .texture('kubejs:item/tools/manasteel_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('elementium_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('kubejs:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('silver_paxel', 'paxel')
            .displayName('Silver Paxel')
            .texture('kubejs:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('copper_paxel', 'paxel')
            .displayName('Copper Paxel')
            .texture('kubejs:item/tools/copper_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('tin_paxel', 'paxel')
            .displayName('Tin Paxel')
            .texture('kubejs:item/tools/tin_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('lead_paxel', 'paxel')
            .displayName('Lead Paxel')
            .texture('kubejs:item/tools/lead_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('stone_paxel', 'paxel')
            .displayName('Stone Paxel')
            .texture('kubejs:item/tools/stone_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('iron_paxel', 'paxel')
            .displayName('Iron Paxel')
            .texture('kubejs:item/tools/iron_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('gold_paxel', 'paxel')
            .displayName('Gold Paxel')
            .texture('kubejs:item/tools/gold_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('diamond_paxel', 'paxel')
            .displayName('Diamond Paxel')
            .texture('kubejs:item/tools/diamond_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('netherite_paxel', 'paxel')
            .displayName('Netherite Paxel')
            .texture('kubejs:item/tools/netherite_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('dragonbone_paxel', 'paxel')
            .displayName('Dragonbone Paxel')
            .texture('kubejs:item/tools/dragonbone_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('desert_myrex_chitin_paxel', 'paxel')
            .displayName('Desert Myrex Chitin Paxel')
            .texture('kubejs:item/tools/desert_myrex_chitin_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('jungle_myrex_chitin_paxel', 'paxel')
            .displayName('Jungle Myrex Chitin Paxel')
            .texture('kubejs:item/tools/jungle_myrex_chitin_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('fire_dragonsteel_paxel', 'paxel')
            .displayName('Fire Dragonsteel Paxel')
            .texture('kubejs:item/tools/fire_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('ice_dragonsteel_paxel', 'paxel')
            .displayName('Ice Dragonsteel Paxel')
            .texture('kubejs:item/tools/ice_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
            
        items.create('lightning_dragonsteel_paxel', 'paxel')
            .displayName('Lightning Dragonsteel Paxel')
            .texture('kubejs:item/tools/lightning_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('ironwood_paxel', 'paxel')
            .displayName('Ironwood Paxel')
            .texture('kubejs:item/tools/ironwood_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('steeleaf_paxel', 'paxel')
            .displayName('Steeleaf Paxel')
            .texture('kubejs:item/tools/steeleaf_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('arcane_wood_paxel', 'paxel')
            .displayName('Arcane Wood Paxel')
            .texture('kubejs:item/tools/arcane_wood_paxel')
            .tier('diamond')
            .unstackable()
        
        items.create('innocent_wood_paxel', 'paxel')
            .displayName('Innocent Wood Paxel')
            .texture('kubejs:item/tools/innocent_wood_paxel')
            .tier('diamond')
            .unstackable()
            */
    }
)