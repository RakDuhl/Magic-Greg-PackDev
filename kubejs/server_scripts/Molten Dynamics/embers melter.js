
//Creating easily exandable Object List for Embers Melter, those dont have any Bonuses
const rawMaterials = [
    { item: 'gtceu:raw_beryllium',              fluid: 'gtceu:beryllium',       amount: 272},
    { item: 'gtceu:raw_beryllium_block',        fluid: 'gtceu:beryllium',       amount: 2304},
    { item: 'gtceu:raw_cobalt',                 fluid: 'gtceu:cobalt',          amount: 272},
    { item: 'gtceu:raw_cobalt_block',           fluid: 'gtceu:cobalt',          amount: 2304},
    { item: 'gtceu:raw_molybdenum',             fluid: 'gtceu:molybdenum',      amount: 272},
    { item: 'gtceu:raw_molybdenum_block',       fluid: 'gtceu:molybdenum',      amount: 2304},
    { item: 'gtceu:raw_goethite',               fluid: 'gtceu:iron',            amount: 272},
    { item: 'gtceu:raw_goethite_block',         fluid: 'gtceu:iron',            amount: 2304},
    { item: 'gtceu:raw_cobaltite',              fluid: 'gtceu:cobalt',          amount: 272},
    { item: 'gtceu:raw_cobaltite_block',        fluid: 'gtceu:cobalt',          amount: 2304},
    { item: 'gtceu:raw_magnetite',              fluid: 'gtceu:iron',            amount: 272},
    { item: 'gtceu:raw_magnetite_block',        fluid: 'gtceu:iron',            amount: 2304},
    { item: 'gtceu:raw_molybdenite',            fluid: 'gtceu:molybdenum',      amount: 272},
    { item: 'gtceu:raw_molybdenite_block',      fluid: 'gtceu:molybdenum',      amount: 2304},
    { item: 'gtceu:raw_pyrite',                 fluid: 'gtceu:iron',            amount: 272},
    { item: 'gtceu:raw_pyrite_block',           fluid: 'gtceu:iron',            amount: 2304},
    { item: 'gtceu:raw_pyrolusite',             fluid: 'gtceu:manganese',       amount: 272},
    { item: 'gtceu:raw_pyrolusite_block',       fluid: 'gtceu:manganese',       amount: 2304},
    { item: 'gtceu:raw_sphalerite',             fluid: 'embers:molten_zinc',    amount: 272},
    { item: 'gtceu:raw_sphalerite_block',       fluid: 'embers:molten_zinc',    amount: 2304},
    { item: 'gtceu:raw_stibnite',               fluid: 'gtceu:antimony',        amount: 272},
    { item: 'gtceu:raw_stibnite_block',         fluid: 'gtceu:antimony',        amount: 2304},
    { item: 'gtceu:raw_tetrahedrite',           fluid: 'embers:molten_copper',  amount: 272},
    { item: 'gtceu:raw_tetrahedrite_block',     fluid: 'embers:molten_copper',  amount: 2304},
    { item: 'gtceu:raw_yellow_limonite',        fluid: 'gtceu:iron',            amount: 272},
    { item: 'gtceu:raw_yellow_limonite_block',  fluid: 'gtceu:iron',            amount: 2304},
    { item: 'gtceu:raw_chalcocite',             fluid: 'embers:molten_copper',  amount: 272},
    { item: 'gtceu:raw_chalcocite_block',       fluid: 'embers:molten_copper',  amount: 2304},
    { item: 'gtceu:raw_pentlandite',            fluid: 'embers:molten_nickel',  amount: 272},
    { item: 'gtceu:raw_pentlandite_block',      fluid: 'embers:molten_nickel',  amount: 2304},
    { item: 'gtceu:raw_malachite',              fluid: 'embers:molten_copper',  amount: 272},
    { item: 'gtceu:raw_malachite_block',        fluid: 'embers:molten_copper',  amount: 2304}
];
//Object List for materials that HAVE bonuses in Geological Separator!
const rawBonusMaterials = [
    { item: 'gtceu:raw_bornite',                        fluid: 'embers:molten_copper',  amount: 272, bonus: 'gtceu:cobalt', Bamount: 48},
    { item: 'gtceu:raw_bornite_block',                  fluid: 'embers:molten_copper',  amount: 2304, bonus: 'gtceu:cobalt', Bamount: 432},
    { item: 'gtceu:raw_chalcopyrite',                   fluid: 'embers:molten_copper',  amount: 272, bonus: 'gtceu:cobalt', Bamount: 32},
    { item: 'gtceu:raw_chalcopyrite_block',             fluid: 'embers:molten_copper',  amount: 2304, bonus: 'gtceu:cobalt', Bamount: 288},
    { item: 'minecraft:raw_copper',                     fluid: 'embers:molten_copper',  amount: 272, bonus: 'embers:molten_gold', Bamount: 48},
    { item: 'minecraft:raw_copper_block',               fluid: 'embers:molten_copper',  amount: 2304, bonus: 'embers:molten_gold', Bamount: 432},
    { item: 'minecraft:raw_gold',                       fluid: 'embers:molten_gold',    amount: 272, bonus: 'embers:molten_copper', Bamount: 48},
    { item: 'minecraft:raw_gold_block',                 fluid: 'embers:molten_gold',    amount: 2304, bonus: 'embers:molten_copper', Bamount: 432},
    { item: 'minecraft:raw_iron',                       fluid: 'gtceu:iron',            amount: 272, bonus: 'embers:molten_nickel', Bamount: 48},
    { item: 'minecraft:raw_iron_block',                 fluid: 'gtceu:iron',            amount: 2304, bonus: 'embers:molten_nickel', Bamount: 432},
    { item: 'gtceu:raw_hematite',                       fluid: 'gtceu:iron',            amount: 272, bonus: 'gtceu:magnesium', Bamount: 16},
    { item: 'gtceu:raw_hematite_block',                 fluid: 'gtceu:iron',            amount: 2304, bonus: 'gtceu:magnesium', Bamount: 144},
    { item: 'gtceu:raw_galena',                         fluid: 'embers:molten_lead',    amount: 272, bonus: 'embers:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_galena_block',                   fluid: 'embers:molten_lead',    amount: 2304, bonus: 'embers:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_lead',                           fluid: 'embers:molten_lead',    amount: 272, bonus: 'embers:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_lead_block',                     fluid: 'embers:molten_lead',    amount: 2304, bonus: 'embers:molten_silver', Bamount: 64},
    { item: 'embers:raw_lead',                          fluid: 'embers:molten_lead',    amount: 272, bonus: 'embers:molten_silver', Bamount: 64},
    { item: 'embers:raw_lead_block',                    fluid: 'embers:molten_lead',    amount: 2304, bonus: 'embers:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_garnierite',                     fluid: 'embers:molten_nickel',  amount: 272, bonus: 'gtceu:iron', Bamount: 32},
    { item: 'gtceu:raw_garnierite_block',               fluid: 'embers:molten_nickel',  amount: 2304, bonus: 'gtceu:iron', Bamount: 288},
    { item: 'gtceu:raw_nickel',                         fluid: 'embers:molten_nickel',  amount: 272, bonus: 'gtceu:iron', Bamount: 48},
    { item: 'gtceu:raw_nickel_block',                   fluid: 'embers:molten_nickel',  amount: 2304, bonus: 'gtceu:iron', Bamount: 432},
    { item: 'iceandfire:raw_silver',                    fluid: 'embers:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 48},
    { item: 'iceandfire:raw_silver_block',              fluid: 'embers:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 432},
    { item: 'gtceu:raw_silver',                         fluid: 'embers:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 64},
    { item: 'gtceu:raw_silver_block',                   fluid: 'embers:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 576},
    { item: 'projectred_exploration:raw_silver',        fluid: 'embers:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 64},
    { item: 'projectred_exploration:raw_silver_block',  fluid: 'embers:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 576},
    { item: 'embers:raw_silver',                        fluid: 'embers:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 64},
    { item: 'embers:raw_silver_block',                  fluid: 'embers:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 576},
    { item: 'gtceu:raw_cassiterite',                    fluid: 'embers:molten_tin',     amount: 272, bonus: 'gtceu:bismuth', Bamount: 32},
    { item: 'gtceu:raw_cassiterite_block',              fluid: 'embers:molten_tin',     amount: 2304, bonus: 'gtceu:bismuth', Bamount: 288},
    { item: 'gtceu:raw_tin',                            fluid: 'embers:molten_tin',     amount: 272, bonus: 'embers:molten_zinc', Bamount: 48},
    { item: 'gtceu:raw_tin_block',                      fluid: 'embers:molten_tin',     amount: 2304, bonus: 'embers:molten_zinc', Bamount: 432},
    { item: 'projectred_exploration:raw_tin',           fluid: 'embers:molten_tin',     amount: 272, bonus: 'embers:molten_zinc', Bamount: 48},
    { item: 'projectred_exploration:raw_tin_block',     fluid: 'embers:molten_tin',     amount: 2304, bonus: 'embers:molten_zinc', Bamount: 432},
    { item: 'create:raw_zinc',                          fluid: 'embers:molten_zinc',    amount: 272, bonus: 'embers:molten_tin', Bamount: 48},
    { item: 'create:raw_zinc_block',                    fluid: 'embers:molten_zinc',    amount: 2304, bonus: 'embers:molten_tin', Bamount: 432},
]

ServerEvents.recipes(
    remove => {
        remove.remove(
            {type: "embers:melting"}
        );
    }
);
        
ServerEvents.recipes(
    event => {

        //Adding custom GT Ores for Melting
        rawMaterials.forEach(material => {
            event.custom(
                {
                    "type": "embers:melting",
                    "input": {
                        "item": material.item
                    },
                    "output": {
                        "amount": material.amount,
                        "fluid": material.fluid
                    }
                }
            );
        });

        //Adding custom GT Ores for Melting
        rawBonusMaterials.forEach(material => {
            event.custom(
                {
                    "type": "embers:melting",
                    "input": {
                        "item": material.item
                    },
                    "bonus": {
                        "amount": material.Bamount,
                        "fluid": material.bonus
                    },
                    "output": {
                        "amount": material.amount,
                        "fluid": material.fluid
                    }
                }
            );
        });
    }
);