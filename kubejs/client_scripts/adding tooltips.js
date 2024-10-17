/**
 * Platform.mods.kubejs.name                   = "Arcenia Technologies®"
 * Platform.mods.gtceu.name                    = "Arcane Mechanist® Guild"
 * Platform.mods.farmersdelight.name
 * Platform.mods.ends_delight.name
 * Platform.mods.ice_and_fire_delight.name     
 * Platform.mods.extendedcrafting.name         = "Mystech Solutions®"
 * Platform.mods.iceandfire.name               = "Mythic Beastworks®"
 * Platform.mods.create_wizardry.name          = "Aether Company™"
 * Platform.mods.embers.name                   = "Eldritch Industries & Alchemical Foundry™"
 * Platform.mods.forbidden_arcanus.name        = "Thaumaturgic Syndicate®"
 * Platform.mods.draconicevolution.name        = "DrakeFusion Engineering®"
 * Platform.mods..name
 * 
 * Create Add-Ons
 * Platform.mods.createframed.name             = "Create® Crystal & Crown Glassworks™"
 * Platform.mods.create_dd.name                = "Create® Monarch's Stone & Masonry Guild™"
 * Platform.mods.create_things_and_misc.name   = "Create® Atlas Machinists™"
 * Platform.mods.create_connected.name         = "Create® Titanworks Industrial Mechanics™"
 * Platform.mods.bellsandwhistles.name         = "Create® Royal Locomotive Consortium™"
 * Platform.mods.copycats.name                 = "Create® Royal Ironbound Steelworks™"
 * Platform.mods.design_decor.name             = "Create® Imperial Pillar Masonry™"
 * Platform.mods.railways.name                 = "Create® Transcontinental Ironway Syndicate™"
 * Platform.mods.interiors.name                = "Create® Regency Interiors & Decor™"
 * Platform.mods.extendedgears.name            = "Create®"
*/ 
ItemEvents.modifyTooltips(
    event => {
        event.modify(/gtceu:/, tooltip => {
            tooltip.add(Text['GregTech Community Edition unofficial'])
        });
        event.modify(/extendedcrafting:/, tooltip => {
            tooltip.add(Text['Extended Crafting'])
        });
        event.modify(/iceandfire:/, tooltip => {
            tooltip.add(Text['Ice And Fire'])
        });
        event.modify(/create_wizardry:/, tooltip => {
            tooltip.add(Text['Create Wizardry'])
        });
        event.modify(/embers:/, tooltip => {
            tooltip.add(Text['Embers Rekindled'])
        });
        event.modify(/forbidden_arcanus:/, tooltip => {
            tooltip.add(Text['Forbidden and Arcanus'])
        });
        event.modify(/draconicevolution:/, tooltip => {
            tooltip.add(Text['Draconic Evolution'])
        });
        event.modify(/createframed:/, tooltip => {
            tooltip.add(Text['Create: Framed'])
        });
        event.modify(/create_dd:/, tooltip => {
            tooltip.add(Text['Create: Dreams & Desires'])
        });
        event.modify(/create_things_and_misc:/, tooltip => {
            tooltip.add(Text['Create: Things and Misc'])
        });
        event.modify(/create_connected:/, tooltip => {
            tooltip.add(Text['Create: Connected'])
        });
        event.modify(/bellsandwhistles:/, tooltip => {
            tooltip.add(Text['Create: Bells and Whistles'])
        });
        event.modify(/copycats:/, tooltip => {
            tooltip.add(Text['Create: Copycats'])
        });
        event.modify(/design_decor:/, tooltip => {
            tooltip.add(Text['Create: Design & Decor'])
        });
        event.modify(/railways:/, tooltip => {
            tooltip.add(Text['Create: Railways'])
        });
        event.modify(/interiors:/, tooltip => {
            tooltip.add(Text['Create: Interiors'])
        });
        event.modify(/extendedgears:/, tooltip => {
            tooltip.add(Text['Create: Extended gears'])
        });
//        event.modify(/ :/, tooltip => {
//            tooltip.add(Text[''])
//        });
    }
)