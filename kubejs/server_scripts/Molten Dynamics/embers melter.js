
//Creating easily exandable Object List for Embers Melter, those dont have any Bonuses
const rawMaterials = [
    { item: 'gtceu:raw_beryllium',              fluid: 'gtceu:beryllium',       amount: 272},
    { item: 'gtceu:raw_beryllium_block',        fluid: 'gtceu:beryllium',       amount: 2304},
    { item: 'gtceu:raw_cobalt',                 fluid: 'gtceu:cobalt',          amount: 272},
    { item: 'gtceu:raw_cobalt_block',           fluid: 'gtceu:cobalt',          amount: 2304},
    { item: 'gtceu:raw_molybdenum',             fluid: 'gtceu:molybdenum',      amount: 272},
    { item: 'gtceu:raw_molybdenum_block',       fluid: 'gtceu:molybdenum',      amount: 2304},
    { item: 'gtceu:raw_neodymium',              fluid: 'gtceu:neodymium',       amount: 272},
    { item: 'gtceu:raw_neodymium_block',        fluid: 'gtceu:neodymium',       amount: 2304},
    { item: 'gtceu:raw_thorium',                fluid: 'gtceu:thorium',         amount: 272},
    { item: 'gtceu:raw_thorium_block',          fluid: 'gtceu:thorium',         amount: 2304},
    { item: 'gtceu:raw_goethite',               fluid: 'molten_metals:molten_iron',    amount: 272},
    { item: 'gtceu:raw_goethite_block',         fluid: 'molten_metals:molten_iron',    amount: 2304},
    { item: 'gtceu:raw_cobaltite',              fluid: 'gtceu:cobalt',          amount: 272},
    { item: 'gtceu:raw_cobaltite_block',        fluid: 'gtceu:cobalt',          amount: 2304},
    { item: 'gtceu:raw_magnetite',              fluid: 'molten_metals:molten_iron',    amount: 272},
    { item: 'gtceu:raw_magnetite_block',        fluid: 'molten_metals:molten_iron',    amount: 2304},
    { item: 'gtceu:raw_molybdenite',            fluid: 'gtceu:molybdenum',      amount: 272},
    { item: 'gtceu:raw_molybdenite_block',      fluid: 'gtceu:molybdenum',      amount: 2304},
    { item: 'gtceu:raw_pyrite',                 fluid: 'molten_metals:molten_iron',    amount: 272},
    { item: 'gtceu:raw_pyrite_block',           fluid: 'molten_metals:molten_iron',    amount: 2304},
    { item: 'gtceu:raw_pyrolusite',             fluid: 'gtceu:manganese',       amount: 272},
    { item: 'gtceu:raw_pyrolusite_block',       fluid: 'gtceu:manganese',       amount: 2304},
    { item: 'gtceu:raw_sphalerite',             fluid: 'molten_metals:molten_zinc',    amount: 272},
    { item: 'gtceu:raw_sphalerite_block',       fluid: 'molten_metals:molten_zinc',    amount: 2304},
    { item: 'gtceu:raw_stibnite',               fluid: 'gtceu:antimony',        amount: 272},
    { item: 'gtceu:raw_stibnite_block',         fluid: 'gtceu:antimony',        amount: 2304},
    { item: 'gtceu:raw_tetrahedrite',           fluid: 'molten_metals:molten_copper',  amount: 272},
    { item: 'gtceu:raw_tetrahedrite_block',     fluid: 'molten_metals:molten_copper',  amount: 2304},
    { item: 'gtceu:raw_yellow_limonite',        fluid: 'molten_metals:molten_iron',    amount: 272},
    { item: 'gtceu:raw_yellow_limonite_block',  fluid: 'molten_metals:molten_iron',    amount: 2304},
    { item: 'gtceu:raw_chalcocite',             fluid: 'molten_metals:molten_copper',  amount: 272},
    { item: 'gtceu:raw_chalcocite_block',       fluid: 'molten_metals:molten_copper',  amount: 2304},
    { item: 'gtceu:raw_pentlandite',            fluid: 'embers:molten_nickel',  amount: 272},
    { item: 'gtceu:raw_pentlandite_block',      fluid: 'embers:molten_nickel',  amount: 2304},
    { item: 'gtceu:raw_malachite',              fluid: 'molten_metals:molten_copper',  amount: 272},
    { item: 'gtceu:raw_malachite_block',        fluid: 'molten_metals:molten_copper',  amount: 2304}
];
//Object List for materials that HAVE bonuses in Geological Separator!
const rawBonusMaterials = [
    { item: 'gtceu:raw_bornite',                        fluid: 'molten_metals:molten_copper',  amount: 272, bonus: 'gtceu:cobalt', Bamount: 48},
    { item: 'gtceu:raw_bornite_block',                  fluid: 'molten_metals:molten_copper',  amount: 2304, bonus: 'gtceu:cobalt', Bamount: 432},
    { item: 'gtceu:raw_chalcopyrite',                   fluid: 'molten_metals:molten_copper',  amount: 272, bonus: 'gtceu:cobalt', Bamount: 32},
    { item: 'gtceu:raw_chalcopyrite_block',             fluid: 'molten_metals:molten_copper',  amount: 2304, bonus: 'gtceu:cobalt', Bamount: 288},
    { item: 'minecraft:raw_copper',                     fluid: 'molten_metals:molten_copper',  amount: 272, bonus: 'molten_metals:molten_gold', Bamount: 48},
    { item: 'minecraft:raw_copper_block',               fluid: 'molten_metals:molten_copper',  amount: 2304, bonus: 'molten_metals:molten_gold', Bamount: 432},
    { item: 'minecraft:raw_gold',                       fluid: 'molten_metals:molten_gold',    amount: 272, bonus: 'molten_metals:molten_copper', Bamount: 48},
    { item: 'minecraft:raw_gold_block',                 fluid: 'molten_metals:molten_gold',    amount: 2304, bonus: 'molten_metals:molten_copper', Bamount: 432},
    { item: 'minecraft:raw_iron',                       fluid: 'molten_metals:molten_iron',    amount: 272, bonus: 'embers:molten_nickel', Bamount: 48},
    { item: 'minecraft:raw_iron_block',                 fluid: 'molten_metals:molten_iron',    amount: 2304, bonus: 'embers:molten_nickel', Bamount: 432},
    { item: 'gtceu:raw_hematite',                       fluid: 'molten_metals:molten_iron',    amount: 272, bonus: 'gtceu:magnesium', Bamount: 16},
    { item: 'gtceu:raw_hematite_block',                 fluid: 'molten_metals:molten_iron',    amount: 2304, bonus: 'gtceu:magnesium', Bamount: 144},
    { item: 'gtceu:raw_galena',                         fluid: 'embers:molten_lead',    amount: 272, bonus: 'molten_metals:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_galena_block',                   fluid: 'embers:molten_lead',    amount: 2304, bonus: 'molten_metals:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_lead',                           fluid: 'embers:molten_lead',    amount: 272, bonus: 'molten_metals:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_lead_block',                     fluid: 'embers:molten_lead',    amount: 2304, bonus: 'molten_metals:molten_silver', Bamount: 64},
    { item: 'embers:raw_lead',                          fluid: 'embers:molten_lead',    amount: 272, bonus: 'molten_metals:molten_silver', Bamount: 64},
    { item: 'embers:raw_lead_block',                    fluid: 'embers:molten_lead',    amount: 2304, bonus: 'molten_metals:molten_silver', Bamount: 64},
    { item: 'gtceu:raw_garnierite',                     fluid: 'embers:molten_nickel',  amount: 272, bonus: 'molten_metals:molten_iron', Bamount: 32},
    { item: 'gtceu:raw_garnierite_block',               fluid: 'embers:molten_nickel',  amount: 2304, bonus: 'molten_metals:molten_iron', Bamount: 288},
    { item: 'gtceu:raw_nickel',                         fluid: 'embers:molten_nickel',  amount: 272, bonus: 'molten_metals:molten_iron', Bamount: 48},
    { item: 'gtceu:raw_nickel_block',                   fluid: 'embers:molten_nickel',  amount: 2304, bonus: 'molten_metals:molten_iron', Bamount: 432},
    { item: 'iceandfire:raw_silver',                    fluid: 'molten_metals:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 48},
    { item: 'iceandfire:raw_silver_block',              fluid: 'molten_metals:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 432},
    { item: 'gtceu:raw_silver',                         fluid: 'molten_metals:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 64},
    { item: 'gtceu:raw_silver_block',                   fluid: 'molten_metals:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 576},
    { item: 'projectred_exploration:raw_silver',        fluid: 'molten_metals:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 64},
    { item: 'projectred_exploration:raw_silver_block',  fluid: 'molten_metals:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 576},
    { item: 'embers:raw_silver',                        fluid: 'molten_metals:molten_silver',  amount: 272, bonus: 'embers:molten_lead', Bamount: 64},
    { item: 'embers:raw_silver_block',                  fluid: 'molten_metals:molten_silver',  amount: 2304, bonus: 'embers:molten_lead', Bamount: 576},
    { item: 'gtceu:raw_cassiterite',                    fluid: 'molten_metals:molten_tin',     amount: 272, bonus: 'gtceu:bismuth', Bamount: 32},
    { item: 'gtceu:raw_cassiterite_block',              fluid: 'molten_metals:molten_tin',     amount: 2304, bonus: 'gtceu:bismuth', Bamount: 288},
    { item: 'gtceu:raw_tin',                            fluid: 'molten_metals:molten_tin',     amount: 272, bonus: 'molten_metals:molten_zinc', Bamount: 48},
    { item: 'gtceu:raw_tin_block',                      fluid: 'molten_metals:molten_tin',     amount: 2304, bonus: 'molten_metals:molten_zinc', Bamount: 432},
    { item: 'projectred_exploration:raw_tin',           fluid: 'molten_metals:molten_tin',     amount: 272, bonus: 'molten_metals:molten_zinc', Bamount: 48},
    { item: 'projectred_exploration:raw_tin_block',     fluid: 'molten_metals:molten_tin',     amount: 2304, bonus: 'molten_metals:molten_zinc', Bamount: 432},
    { item: 'create:raw_zinc',                          fluid: 'molten_metals:molten_zinc',    amount: 272, bonus: 'molten_metals:molten_tin', Bamount: 48},
    { item: 'create:raw_zinc_block',                    fluid: 'molten_metals:molten_zinc',    amount: 2304, bonus: 'molten_metals:molten_tin', Bamount: 432},
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