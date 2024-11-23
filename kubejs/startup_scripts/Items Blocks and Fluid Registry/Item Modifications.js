//priority: 9010

const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")

ItemEvents.modification(
    event => {
        /*
        event.modify(
            'minecraft:coal',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = 
            }
        )
*/
       const CoalTime = 1600
       let PinkTime = CoalTime * 1024
       let GreenTime = PinkTime * 1024
       let IntLimit = 2147483647

        event.modify(
            'projecte:alchemical_coal',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 4
                console.log("Alchemical Coal Burntime: " + CoalTime * 4)
            }
        )
        let AlchemicalCoalTime = CoalTime * 4
        event.modify(
            'projecte:mobius_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 16
                console.log("Mobius Fuel Burntime: " + CoalTime * 16)
            }
        )
        let MobiusFuelTime = CoalTime * 16
        event.modify(
            'projecte:aeternalis_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 64
                console.log("Aeternalis Fuel Burntime: " + CoalTime * 64)
            }
        )
        let AeternalisFuelTime = CoalTime * 64
        event.modify(
            'projectexpansion:magenta_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 256
                console.log("Magenta Fuel Burntime: " + CoalTime * 256)
            }
        )
        event.modify(
            'projectexpansion:pink_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime
                console.log("Pink Fuel Burntime: " + PinkTime)
            }
        )
        event.modify(
            'projectexpansion:purple_fuel', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 4
                console.log("Purple Fuel Burntime: " + PinkTime * 4)
            }
        )
        event.modify(
            'projectexpansion:violet_fuel', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 16
                console.log("Violet Fuel Burntime: " + PinkTime * 16)
            }
        )
        event.modify(
            'projectexpansion:blue_fuel', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 64
                console.log("Blue Fuel Burntime: " + PinkTime * 64)
            }
        )
        event.modify(
            'projectexpansion:cyan_fuel', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 256
                console.log("Cyan Fuel Burntime: " + PinkTime * 256)
            }
        )
        event.modify(
            'projectexpansion:green_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = GreenTime
                console.log("Green Fuel Burntime: " + GreenTime)
            }
        )
        event.modify(
            'projectexpansion:lime_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit 
                //literally can't go higher than this....
                console.log("Lime Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:yellow_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Yellow Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:orange_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Orange Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:white_fuel',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("White Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projecte:alchemical_coal_block', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 4 * 9
                console.log("Alchemical Coal Block Burntime: " + CoalTime * 4 * 9)
            }
        )
        event.modify(
            'projecte:mobius_fuel_block', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 16 * 9
                console.log("Mobius Fuel Block Burntime: " + CoalTime * 16 * 9)
            }
        )
        event.modify(
            'projecte:aeternalis_fuel_block', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 64 * 9
                console.log(" Block Burntime: " + CoalTime * 64 * 9)
            }
        )
        event.modify(
            'projectexpansion:magenta_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 256 * 9
                console.log("Magenta Fuel Block Burntime: " + CoalTime * 256 * 9)
            }
        )
        event.modify(
            'projectexpansion:pink_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 9
                console.log("Pink Fuel Block Burntime: " + PinkTime * 9)
            }
        )
        event.modify(
            'projectexpansion:purple_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 9 * 4
                console.log("Purple Fuel Block Burntime: " + PinkTime * 9 * 4)
            }
        )
        event.modify(
            'projectexpansion:violet_fuel_block', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 9 * 16
                console.log("Violet Fuel Block Burntime: " + PinkTime * 9 * 16)
            }
        )
        event.modify(
            'projectexpansion:blue_fuel_block', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = PinkTime * 9 * 64
                console.log("Blue Fuel Block Burntime: " + PinkTime * 9 * 64)
            }
        )
        event.modify(
            'projectexpansion:cyan_fuel_block', 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Cyan Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:green_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Green Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:lime_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Lime Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:yellow_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Yellow Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:orange_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("Orange Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            'projectexpansion:white_fuel_block',
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = IntLimit
                console.log("White Fuel Burntime: " + IntLimit)
            }
        )
        event.modify(
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:mc_coal"}'),
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = CoalTime * 16384
                console.log("Coal Singularity Burntime: " + CoalTime * 16384)
            }
        )
        event.modify(
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:pe_alchemical_coal"}'), 
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = AlchemicalCoalTime * 16384
                console.log("Alchemical Coal Singularity Burntime: " + AlchemicalCoalTime * 16384)
            }
        )
        event.modify(
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:pe_mobius_fuel"}'),
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = MobiusFuelTime * 16384
                console.log("Mobius Fuel Singularity Burntime: " + MobiusFuelTime * 16384)
            }
        )
        event.modify(
            Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:pe_aeternalis_fuel"}'),
            item => {
                //200 Ticks for 1 Item
                //Coal BurnTime is 1600, 8 Items
                item.burnTime = AeternalisFuelTime * 16384
                console.log("Aeternalis Fuel Singularity Burntime: " + AeternalisFuelTime * 16384)
            }
        )

        //Changing Rarity of Items
        event.modify(
            'extendedcrafting:singularity',
            item => {
                item.rarity = "common"
            }
        )
        event.modify(
            'create:creative_motor',
            item => {
                item.rarity = "common"
            }
        )
        event.modify(
            'botania:creative_pool',
            item => {
                item.rarity = "common"
            }
        )
        event.modify(
            'botania:infrangible_platform',
            item => {
                item.rarity = "common"
            }
        )
    }
)

GTCEuStartupEvents.registry(
    'gtceu:material',
    event => {
        /*
        CableMaterialsCustom.forEach(
            element => {
                let mat = GTMaterials.get(element.ele)
                mat.properties.removeProperty(PropertyKey.WIRE);
                mat.setProperty(
                    PropertyKey.WIRE, 
                    new $WireProperties(element.v, element.a, element.loss)
                );
            }
        );
        */
        GTMaterials.Aluminium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Cobalt.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Copper.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Europium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Gold.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Iron.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Lead.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Nickel.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Osmium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Platinum.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Silver.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Tin.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Tungsten.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Naquadah.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Tritanium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Trinium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.AnnealedCopper.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Cupronickel.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Electrum.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Kanthal.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Nichrome.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.NiobiumNitride.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.NiobiumTitanium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.RTMAlloy.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Steel.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.VanadiumGallium.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.YttriumBariumCuprate.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.Graphene.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.BlackSteel.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.TungstenSteel.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.NaquadahAlloy.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.HSSG.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.RedAlloy.properties.removeProperty(PropertyKey.WIRE);
        GTMaterials.BlueAlloy.properties.removeProperty(PropertyKey.WIRE);

        //very Good normal conductors
        GTMaterials.RedAlloy.setProperty(PropertyKey.WIRE,              new $WireProperties(V('ulv'), 1, 0));
        GTMaterials.BlueAlloy.setProperty(PropertyKey.WIRE,             new $WireProperties(V('hv'), 2, 1));
        GTMaterials.Graphene.setProperty(PropertyKey.WIRE,              new $WireProperties(V('iv'), 1, 1));
        GTMaterials.NiobiumNitride.setProperty(PropertyKey.WIRE,        new $WireProperties(V('luv'), 1, 1));
        GTMaterials.NiobiumTitanium.setProperty(PropertyKey.WIRE,       new $WireProperties(V('luv'), 4, 1));
        GTMaterials.VanadiumGallium.setProperty(PropertyKey.WIRE,       new $WireProperties(V('zpm'), 4, 1));
        GTMaterials.Naquadah.setProperty(PropertyKey.WIRE,              new $WireProperties(V('zpm'), 2, 2));
        GTMaterials.YttriumBariumCuprate.setProperty(PropertyKey.WIRE,  new $WireProperties(V('uv'), 4, 1));

        //Good Conductors
        GTMaterials.Copper.setProperty(PropertyKey.WIRE,                new $WireProperties(V('mv'), 1, 3));
        GTMaterials.AnnealedCopper.setProperty(PropertyKey.WIRE,        new $WireProperties(V('mv'), 1, 3));
        GTMaterials.Gold.setProperty(PropertyKey.WIRE,                  new $WireProperties(V('hv'), 3, 3));
        GTMaterials.Silver.setProperty(PropertyKey.WIRE,                new $WireProperties(V('hv'), 1, 3));
        GTMaterials.Electrum.setProperty(PropertyKey.WIRE,              new $WireProperties(V('hv'), 2, 3));
        GTMaterials.Aluminium.setProperty(PropertyKey.WIRE,             new $WireProperties(V('ev'), 1, 3));

        //average conductor
        GTMaterials.Cobalt.setProperty(PropertyKey.WIRE,                new $WireProperties(V('lv'), 2, 4));
        GTMaterials.Nickel.setProperty(PropertyKey.WIRE,                new $WireProperties(V('lv'), 3, 4));
        GTMaterials.Tin.setProperty(PropertyKey.WIRE,                   new $WireProperties(V('lv'), 1, 4));
        GTMaterials.Iron.setProperty(PropertyKey.WIRE,                  new $WireProperties(V('mv'), 2, 4));
        GTMaterials.RTMAlloy.setProperty(PropertyKey.WIRE,              new $WireProperties(V('ev'), 6, 4));
        GTMaterials.Tungsten.setProperty(PropertyKey.WIRE,              new $WireProperties(V('iv'), 2, 4));
        GTMaterials.Platinum.setProperty(PropertyKey.WIRE,              new $WireProperties(V('iv'), 2, 4));
        GTMaterials.Osmium.setProperty(PropertyKey.WIRE,                new $WireProperties(V('luv'), 4, 4));

        //mediocre conductors
        GTMaterials.Lead.setProperty(PropertyKey.WIRE,                  new $WireProperties(V('ulv'), 2, 5));
        GTMaterials.Cupronickel.setProperty(PropertyKey.WIRE,           new $WireProperties(V('mv'), 1, 5));
        GTMaterials.Kanthal.setProperty(PropertyKey.WIRE,               new $WireProperties(V('hv'), 4, 5));
        GTMaterials.TungstenSteel.setProperty(PropertyKey.WIRE,         new $WireProperties(V('iv'), 3, 5));
        GTMaterials.Nichrome.setProperty(PropertyKey.WIRE,              new $WireProperties(V('ev'), 4, 5));
        GTMaterials.Steel.setProperty(PropertyKey.WIRE,                 new $WireProperties(V('ev'), 2, 5));

        //bad conductors
        GTMaterials.Europium.setProperty(PropertyKey.WIRE,              new $WireProperties(V('hv'), 2,32));
        GTMaterials.BlackSteel.setProperty(PropertyKey.WIRE,            new $WireProperties(V('ev'), 3, 6));
        GTMaterials.HSSG.setProperty(PropertyKey.WIRE,                  new $WireProperties(V('luv'), 4, 6));
        GTMaterials.Trinium.setProperty(PropertyKey.WIRE,               new $WireProperties(V('zpm'), 6, 7));
        GTMaterials.Tritanium.setProperty(PropertyKey.WIRE,             new $WireProperties(V('uv'), 1, 8));
        GTMaterials.NaquadahAlloy.setProperty(PropertyKey.WIRE,         new $WireProperties(V('uv'), 2, 7));

    }
)

// Global object to store item burn times
//global.burnableItems = {};

// Gather burnable items during startup
//StartupEvents.registry(
//    'item', 
//    event => {
//        const items = event.getRegistry();
//        for (const item of items) {
//          const burnTime = item.getBurnTime();
//          if (burnTime > 0) {
//                global.burnableItems[item.getId()] = burnTime;
//            }
//        }
//    }
//);