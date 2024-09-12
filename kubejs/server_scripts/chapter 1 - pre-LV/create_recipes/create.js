ServerEvents.recipes(
    event => {
        const files = Ingredient.of("#forge:tools/files");
        const wrenches = Ingredient.of("#forge:tools/wrenches");
        const screwdrivers = Ingredient.of("#forge:tools/screwdrivers");
        const hammers = Ingredient.of("#forge:tools/hammers");
        const cutters = Ingredient.of("#forge:tools/wire_cutters");

        //Removing couple items
        event.remove({output: 'create:shaft'});
        event.remove({output: 'copycats:copycat_shaft'});
        
        //Gregify
        event.shaped(
            '8x create:shaft', [
                '  A',
                'sSh',
                'A  '
            ], {
                A: 'create:andesite_alloy',
                s: screwdrivers,
                S: 'gtceu:long_iron_rod',
                h: hammers
            }
        ).keepIngredient([screwdrivers, hammers]).damageIngredient([screwdrivers, hammers]);

        event.shaped(
            '8x copycats:copycat_shaft', [
                '  A',
                'sSh',
                'A  '
            ], {
                A: '#forge:ingots/zinc',
                s: screwdrivers,
                S: 'gtceu:long_iron_rod',
                h: hammers
            }
        ).keepIngredient([screwdrivers, hammers]).damageIngredient([screwdrivers, hammers]);
    }
)