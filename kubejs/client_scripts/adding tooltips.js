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
ItemEvents.tooltip(
    event => {
        event.add(/gtceu:/, 'Arcane Mechanist® Guild');
        event.add(/extendedcrafting:/, 'Mystech Solutions®');
        event.add(/iceandfire:/, 'Mythic Beastworks®');
        event.add(/create_wizardry:/, 'Aether Company™');
        event.add(/embers:/, 'Eldritch Industries & Alchemical Foundry™');
        event.add(/forbidden_arcanus:/, "Thaumaturgic Syndicate®");
        event.add(/draconicevolution:/, "DrakeFusion Engineering®");
        event.add(/createframed:/, "Create® Crystal & Crown Glassworks™");
        event.add(/create_dd:/, "Create® Monarch's Stone & Masonry Guild™");
        event.add(/create_things_and_misc:/, "Create® Atlas Machinists™");
        event.add(/create_connected:/, "Create® Titanworks Industrial Mechanics™");
        event.add(/bellsandwhistles:/, "Create® Royal Locomotive Consortium™");
        event.add(/copycats:/, "Create® Royal Ironbound Steelworks™");
        event.add(/design_decor:/, "Create® Imperial Pillar Masonry™");
        event.add(/railways:/, "Create® Transcontinental Ironway Syndicate™");
        event.add(/interiors:/, "Create® Regency Interiors & Decor™");
//        event.add(/extendedgears:/,);
    }
)