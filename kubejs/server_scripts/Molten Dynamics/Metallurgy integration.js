// priority: 8500

//Removing stuff
ServerEvents.recipes(
    event => {
        //Metallurgy Melting
        event.remove(
            {type: 'createmetallurgy:melting'}
        );

        //Metallurgy Casting
        event.remove(
            {type: 'createmetallurgy:casting_in_basin'}
        );
        event.remove(
            {type: 'createmetallurgy:casting_in_table'}
        );
    }
)

//If anything new appears, just add the new ore here AND in "embers melter.js"!
const rawMaterials2 = [
    { item: 'gtceu:raw_beryllium',                      fluid: 'gtceu:beryllium',   amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_beryllium_block',                fluid: 'gtceu:beryllium',   amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_cobalt',                         fluid: 'gtceu:cobalt',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_cobalt_block',                   fluid: 'gtceu:cobalt',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_molybdenum',                     fluid: 'gtceu:molybdenum',  amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_molybdenum_block',               fluid: 'gtceu:molybdenum',  amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_goethite',                       fluid: 'gtceu:iron',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_goethite_block',                 fluid: 'gtceu:iron',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_cobaltite',                      fluid: 'gtceu:cobalt',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_cobaltite_block',                fluid: 'gtceu:cobalt',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_magnetite',                      fluid: 'gtceu:iron',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_magnetite_block',                fluid: 'gtceu:iron',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_molybdenite',                    fluid: 'gtceu:molybdenum',  amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_molybdenite_block',              fluid: 'gtceu:molybdenum',  amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_pyrite',                         fluid: 'gtceu:iron',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_pyrite_block',                   fluid: 'gtceu:iron',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_pyrolusite',                     fluid: 'gtceu:manganese',   amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_pyrolusite_block',               fluid: 'gtceu:manganese',   amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_sphalerite',                     fluid: 'gtceu:zinc',        amount: 160,    heating: 'heated', time: 40, tag: false}, //Multiple
    { item: 'gtceu:raw_sphalerite_block',               fluid: 'gtceu:zinc',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_stibnite',                       fluid: 'gtceu:antimony',    amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_stibnite_block',                 fluid: 'gtceu:antimony',    amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_tetrahedrite',                   fluid: 'gtceu:copper',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_tetrahedrite_block',             fluid: 'gtceu:copper',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_yellow_limonite',                fluid: 'gtceu:iron',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_yellow_limonite_block',          fluid: 'gtceu:iron',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_chalcocite',                     fluid: 'gtceu:copper',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_chalcocite_block',               fluid: 'gtceu:copper',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_pentlandite',                    fluid: 'gtceu:nickel',      amount: 160,    heating: 'heated', time: 40, tag: false}, //Multiple
    { item: 'gtceu:raw_pentlandite_block',              fluid: 'gtceu:nickel',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_malachite',                      fluid: 'gtceu:copper',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_malachite_block',                fluid: 'gtceu:copper',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_bornite',                        fluid: 'gtceu:copper',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_bornite_block',                  fluid: 'gtceu:copper',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_chalcopyrite',                   fluid: 'gtceu:copper',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_chalcopyrite_block',             fluid: 'gtceu:copper',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'minecraft:raw_copper',                     fluid: 'gtceu:copper',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'minecraft:raw_copper_block',               fluid: 'gtceu:copper',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'minecraft:raw_gold',                       fluid: 'gtceu:gold',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'minecraft:raw_gold_block',                 fluid: 'gtceu:gold',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'minecraft:raw_iron',                       fluid: 'gtceu:iron',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'minecraft:raw_iron_block',                 fluid: 'gtceu:iron',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_hematite',                       fluid: 'gtceu:iron',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_hematite_block',                 fluid: 'gtceu:iron',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_galena',                         fluid: 'gtceu:lead',        amount: 160,    heating: 'heated', time: 40, tag: false}, //Multiple
    { item: 'gtceu:raw_galena_block',                   fluid: 'gtceu:lead',        amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'forge:raw_materials/lead',                 fluid: 'gtceu:lead',        amount: 160,    heating: 'heated', time: 40, tag: true},
    { item: 'forge:storage_blocks/raw_lead',            fluid: 'gtceu:lead',        amount: 1440,   heating: 'heated', time: 40, tag: true},
    { item: 'gtceu:raw_garnierite',                     fluid: 'gtceu:nickel',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_garnierite_block',               fluid: 'gtceu:nickel',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_nickel',                         fluid: 'gtceu:nickel',      amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'gtceu:raw_nickel_block',                   fluid: 'gtceu:nickel',      amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'forge:raw_materials/silver',               fluid: 'gtceu:silver',      amount: 160,    heating: 'heated', time: 40, tag: true}, //Multiple
    { item: 'forge:storage_blocks/raw_silver',          fluid: 'gtceu:silver',      amount: 1440,   heating: 'heated', time: 40, tag: true},
    { item: 'gtceu:raw_cassiterite',                    fluid: 'gtceu:tin',         amount: 160,    heating: 'heated', time: 40, tag: false}, //Multiple
    { item: 'gtceu:raw_cassiterite_block',              fluid: 'gtceu:tin',         amount: 1440,   heating: 'heated', time: 40, tag: false},
    { item: 'forge:raw_materials/tin',                  fluid: 'gtceu:tin',         amount: 160,    heating: 'heated', time: 40, tag: true},
    { item: 'forge:storage_blocks/raw_tin',             fluid: 'gtceu:tin',         amount: 1440,   heating: 'heated', time: 40, tag: true},
    { item: 'create:raw_zinc',                          fluid: 'gtceu:zinc',        amount: 160,    heating: 'heated', time: 40, tag: false},
    { item: 'create:raw_zinc_block',                    fluid: 'gtceu:zinc',        amount: 1440,   heating: 'heated', time: 40, tag: false},
]

const casting = [
    {fluid: 'forge:molten_iron',        block: 'minecraft:iron_block',      ingot: 'minecraft:iron_ingot',      nugget: 'minecraft:iron_nugget', isTag: true},
    {fluid: 'forge:molten_gold',        block: 'minecraft:gold_block',      ingot: 'minecraft:gold_ingot',      nugget: 'minecraft:gold_nugget', isTag: true},
    {fluid: 'forge:molten_copper',      block: 'minecraft:copper_block',    ingot: 'create:copper_nugget',      nugget: 'minecraft:copper_ingot', isTag: true},
    {fluid: 'forge:molten_lead',        block: 'embers:lead_block',         ingot: 'gtceu:lead_ingot',          nugget: 'gtceu:lead_nugget', isTag: true},
    {fluid: 'forge:molten_silver',      block: 'iceandfire:silver_block',   ingot: 'gtceu:silver_ingot',        nugget: 'gtceu:silver_nugget', isTag: true},
    {fluid: 'forge:molten_nickel',      block: 'gtceu:nickel_block',        ingot: 'gtceu:nickel_ingot',        nugget: 'gtceu:nickel_nugget', isTag: true},
    //{fluid: 'forge:molten_tin',        block: , ingot: , nugget: , isTag: true},
    {fluid: 'forge:molten_bronze',      block: 'gtceu:bronze_block',        ingot: 'gtceu:bronze_ingot',        nugget: 'gtceu:bronze_nugget', isTag: true},
    {fluid: 'forge:molten_zinc',        block: 'create:zinc_block',         ingot: 'create:zinc_ingot',         nugget: 'create:zinc_nugget', isTag: true},
    {fluid: 'forge:molten_electrum',    block: 'gtceu:electrum_block',      ingot: 'gtceu:electrum_ingot',      nugget: 'gtceu:electrum_nugget', isTag: true},
    {fluid: 'forge:molten_invar',       block: 'gtceu:invar_block',         ingot: 'gtceu:invar_ingot',         nugget: 'gtceu:invar_nugget', isTag: true},
    {fluid: 'forge:molten_brass',       block: 'create:brass_block',        ingot: 'create:brass_ingot',        nugget: 'create:brass_nugget', isTag: true},
    {fluid: 'embers:molten_dawnstone',  block: 'embers:dawnstone_block',    ingot: 'embers:dawnstone_ingot',    nugget: 'embers:dawnstone_nugget', isTag: false},
    {fluid: 'gtceu:beryllium',          block: 'gtceu:beryllium_block',     ingot: 'gtceu:beryllium_ingot',     nugget: 'gtceu:beryllium_nugget', isTag: false},
    {fluid: 'gtceu:cobalt',             block: 'gtceu:cobalt_block',        ingot: 'gtceu:cobalt_ingot',        nugget: 'gtceu:cobalt_nugget', isTag: false},
    {fluid: 'gtceu:molybdenum',         block: 'gtceu:molybdenum_block',    ingot: 'gtceu:molybdenum_ingot',    nugget: 'gtceu:molybdenum_nugget', isTag: false},
    {fluid: 'gtceu:manganese',          block: 'gtceu:manganese_block',     ingot: 'gtceu:manganese_ingot',     nugget: 'gtceu:manganese_nugget', isTag: false},
    {fluid: 'gtceu:antimony',           block: 'gtceu:antimony_block',      ingot: 'gtceu:antimony_ingot',      nugget: 'gtceu:antimony_nugget', isTag: false},
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
    //{fluid: , block: , ingot: , nugget: , timeBlock: , timeIngot: , timeNugget: , isTag: },
]
ServerEvents.recipes(
    event => {
        function addMetallurgyMelting(input, output, heating, amount, time, isinputForgeTag) {
            let ingredient = isinputForgeTag
                ? { tag: input } : { item: input };
            
            event.custom({
                "type": "createmetallurgy:melting",
                "ingredients": [
                    ingredient
                ],
                "processingTime": time,
                "results": [
                    {
                        "fluid": output,
                        "amount": amount
                    }
                ],
                "heatRequirement": heating
            });
        }
        rawMaterials2.forEach(
            material => {
                addMetallurgyMelting(material.item, material.fluid, material.heating, material.amount, material.time, material.tag);
            }
        );

        function createCastingRecipes(input, block, ingot, nugget, isForgeTag) {
            let ingredientBlock = isForgeTag
                ? { fluidTag: input, "amount": 1260} : { fluid: input, "amount": 1296};
            let ingredientIngot = isForgeTag
                ? { fluidTag: input, "amount": 1260} : { fluid: input, "amount": 144};
            let ingredientNugget = isForgeTag
                ? { fluidTag: input, "amount": 1260} : { fluid: input, "amount": 16};
            event.custom(
                {
                    "type": "createmetallurgy:casting_in_basin",
                    "ingredients": [
                        ingredientBlock
                    ],
                    "processingTime": 85,
                    "mold_consumed": false,
                    "result": {
                        "item": block
                    }
                }
            );
            event.custom(
                {
                    "type": "createmetallurgy:casting_in_table",
                    "ingredients": [
                      {
                        "item": "createmetallurgy:graphite_ingot_mold"
                      },
                      ingredientIngot
                    ],
                    "processingTime": 35,
                    "mold_consumed": false,
                    "result": {
                      "item": ingot
                    }
                }
            );
            event.custom(
                {
                    "type": "createmetallurgy:casting_in_table",
                    "ingredients": [
                      {
                        "item": "createmetallurgy:graphite_nugget_mold"
                      },
                      ingredientNugget
                    ],
                    "processingTime": 15,
                    "mold_consumed": false,
                    "result": {
                      "item": nugget
                    }
                }
            )
        };
        casting.forEach(
            material => {
                createCastingRecipes(material.fluid, material.block, material.ingot, material.nugget, material.isTag)
            }
        );
    }
);