// priority: 9000

ItemEvent.toolTierRegistry(
    event => {
        
    }
)

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
            .glow()
            
        event.create('elementium_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            .glow()
        
        event.create('silver_paxel', 'paxel')
            .displayName('Silver Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            .glow()
            
        event.create('_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            .glow()
        
        event.create('_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            .glow()
            
        event.create('_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            .glow()
        
        event.create('_paxel', 'paxel')
            .displayName(' Paxel')
            .texture('magicgreg:item/tools/_paxel')
            .tier('diamond')
            .unstackable()
            .glow()
    }
)