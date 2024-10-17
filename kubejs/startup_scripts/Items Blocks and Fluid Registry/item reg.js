// priority: 9000

//ItemEvent.toolTierRegistry(
//    event => {
//        
//    }
//)

StartupEvents.registry(
    'item',
    event => {
        event
            .create('kubejs:mainframe_housing')
            .displayName('Standard Serverrack Frame')
            .texture('kubejs:item/mainframe_housing');
        
        event.create('arcane_gold_paxel', 'paxel')
            .displayName('Arcane Gold Paxel')
            .texture('kubejs:item/tools/arcane_gold_paxel')
            .tier('diamond')
            .unstackable()
            .glow(true)

        event.create('manasteel_paxel', 'paxel')
            .displayName('Mana Steel Paxel')
            .texture('kubejs:item/tools/manasteel_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('elementium_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('kubejs:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('silver_paxel', 'paxel')
            .displayName('Silver Paxel')
            .texture('kubejs:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('copper_paxel', 'paxel')
            .displayName('Copper Paxel')
            .texture('kubejs:item/tools/copper_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('tin_paxel', 'paxel')
            .displayName('Tin Paxel')
            .texture('kubejs:item/tools/tin_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('lead_paxel', 'paxel')
            .displayName('Lead Paxel')
            .texture('kubejs:item/tools/lead_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('stone_paxel', 'paxel')
            .displayName('Stone Paxel')
            .texture('kubejs:item/tools/stone_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('iron_paxel', 'paxel')
            .displayName('Iron Paxel')
            .texture('kubejs:item/tools/iron_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('gold_paxel', 'paxel')
            .displayName('Gold Paxel')
            .texture('kubejs:item/tools/gold_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('diamond_paxel', 'paxel')
            .displayName('Diamond Paxel')
            .texture('kubejs:item/tools/diamond_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('netherite_paxel', 'paxel')
            .displayName('Netherite Paxel')
            .texture('kubejs:item/tools/netherite_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('dragonbone_paxel', 'paxel')
            .displayName('Dragonbone Paxel')
            .texture('kubejs:item/tools/dragonbone_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('desert_myrex_chitin_paxel', 'paxel')
            .displayName('Desert Myrex Chitin Paxel')
            .texture('kubejs:item/tools/desert_myrex_chitin_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('jungle_myrex_chitin_paxel', 'paxel')
            .displayName('Jungle Myrex Chitin Paxel')
            .texture('kubejs:item/tools/jungle_myrex_chitin_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('fire_dragonsteel_paxel', 'paxel')
            .displayName('Fire Dragonsteel Paxel')
            .texture('kubejs:item/tools/fire_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('ice_dragonsteel_paxel', 'paxel')
            .displayName('Ice Dragonsteel Paxel')
            .texture('kubejs:item/tools/ice_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('lightning_dragonsteel_paxel', 'paxel')
            .displayName('Lightning Dragonsteel Paxel')
            .texture('kubejs:item/tools/lightning_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('ironwood_paxel', 'paxel')
            .displayName('Ironwood Paxel')
            .texture('kubejs:item/tools/ironwood_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('steeleaf_paxel', 'paxel')
            .displayName('Steeleaf Paxel')
            .texture('kubejs:item/tools/steeleaf_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('arcane_wood_paxel', 'paxel')
            .displayName('Arcane Wood Paxel')
            .texture('kubejs:item/tools/arcane_wood_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('innocent_wood_paxel', 'paxel')
            .displayName('Innocent Wood Paxel')
            .texture('kubejs:item/tools/innocent_wood_paxel')
            .tier('diamond')
            .unstackable()
    }
)