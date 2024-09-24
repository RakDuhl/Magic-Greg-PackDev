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
            .create('magicgreg:mainframe_housing')
            .displayName('Standard Serverrack Frame')
            .texture('magicgreg:item/mainframe_housing');
        
        event.create('arcane_gold_paxel', 'paxel')
            .displayName('Arcane Gold Paxel')
            .texture('magicgreg:item/tools/arcane_gold_paxel')
            .tier('diamond')
            .unstackable()
            .glow(true)

        event.create('manasteel_paxel', 'paxel')
            .displayName('Mana Steel Paxel')
            .texture('magicgreg:item/tools/manasteel_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('elementium_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('silver_paxel', 'paxel')
            .displayName('Silver Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('copper_paxel', 'paxel')
            .displayName('Copper Paxel')
            .texture('magicgreg:item/tools/copper_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('tin_paxel', 'paxel')
            .displayName('Tin Paxel')
            .texture('magicgreg:item/tools/tin_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('lead_paxel', 'paxel')
            .displayName('Lead Paxel')
            .texture('magicgreg:item/tools/lead_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('stone_paxel', 'paxel')
            .displayName('Stone Paxel')
            .texture('magicgreg:item/tools/stone_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('iron_paxel', 'paxel')
            .displayName('Iron Paxel')
            .texture('magicgreg:item/tools/iron_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('gold_paxel', 'paxel')
            .displayName('Gold Paxel')
            .texture('magicgreg:item/tools/gold_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('diamond_paxel', 'paxel')
            .displayName('Diamond Paxel')
            .texture('magicgreg:item/tools/diamond_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('netherite_paxel', 'paxel')
            .displayName('Netherite Paxel')
            .texture('magicgreg:item/tools/netherite_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('dragonbone_paxel', 'paxel')
            .displayName('Dragonbone Paxel')
            .texture('magicgreg:item/tools/dragonbone_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('desert_myrex_chitin_paxel', 'paxel')
            .displayName('Desert Myrex Chitin Paxel')
            .texture('magicgreg:item/tools/desert_myrex_chitin_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('jungle_myrex_chitin_paxel', 'paxel')
            .displayName('Jungle Myrex Chitin Paxel')
            .texture('magicgreg:item/tools/jungle_myrex_chitin_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('fire_dragonsteel_paxel', 'paxel')
            .displayName('Fire Dragonsteel Paxel')
            .texture('magicgreg:item/tools/fire_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('ice_dragonsteel_paxel', 'paxel')
            .displayName('Ice Dragonsteel Paxel')
            .texture('magicgreg:item/tools/ice_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
            
        event.create('lightning_dragonsteel_paxel', 'paxel')
            .displayName('Lightning Dragonsteel Paxel')
            .texture('magicgreg:item/tools/lightning_dragonsteel_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('ironwood_paxel', 'paxel')
            .displayName('Ironwood Paxel')
            .texture('magicgreg:item/tools/ironwood_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('steeleaf_paxel', 'paxel')
            .displayName('Steeleaf Paxel')
            .texture('magicgreg:item/tools/steeleaf_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('arcane_wood_paxel', 'paxel')
            .displayName('Arcane Wood Paxel')
            .texture('magicgreg:item/tools/arcane_wood_paxel')
            .tier('diamond')
            .unstackable()
        
        event.create('innocent_wood_paxel', 'paxel')
            .displayName('Innocent Wood Paxel')
            .texture('magicgreg:item/tools/innocent_wood_paxel')
            .tier('diamond')
            .unstackable()
    }
)