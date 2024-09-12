ServerEvents.recipes(
    event => {
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
                s: '#forge:tools/screwdrivers',
                S: 'gtceu:long_iron_rod',
                h: '#forge:tools/hammers'
            }
        ).keepIngredient(Ingredient.of('#forge:tools/screwdrivers')).keepIngredient(Ingredient.of('#forge:tools/hammers'));

        event.shaped(
            '8x copycats:copycat_shaft', [
                '  A',
                'sSh',
                'A  '
            ], {
                A: '#forge:ingots/zinc',
                s: '#forge:tools/screwdrivers',
                S: 'gtceu:long_iron_rod',
                h: '#forge:tools/hammers'
            }
        ).keepIngredient(Ingredient.of('#forge:tools/screwdrivers')).keepIngredient(Ingredient.of('#forge:tools/hammers'));
    }
)