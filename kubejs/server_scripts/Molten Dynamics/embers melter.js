//priority: 8501
//If anything new appears, just add the new ore here AND in "Metallurgy integration.js"!
//Keep in mind, I want to encourage the use of Embers! as it gives more and has special bonuses.
//Creating easily exandable Object List for Embers Melter, those dont have any Bonuses
const rawMaterials = [
    { item: 'gtceu:raw_beryllium',              fluid: 'gtceu:beryllium',       amount: 170},
    { item: 'gtceu:raw_beryllium_block',        fluid: 'gtceu:beryllium',       amount: 1440},
    { item: 'gtceu:raw_cobalt',                 fluid: 'gtceu:cobalt',          amount: 170},
    { item: 'gtceu:raw_cobalt_block',           fluid: 'gtceu:cobalt',          amount: 1440},
    { item: 'gtceu:raw_molybdenum',             fluid: 'gtceu:molybdenum',      amount: 170},
    { item: 'gtceu:raw_molybdenum_block',       fluid: 'gtceu:molybdenum',      amount: 1440},
    { item: 'gtceu:raw_goethite',               fluid: 'gtceu:iron',            amount: 170},
    { item: 'gtceu:raw_goethite_block',         fluid: 'gtceu:iron',            amount: 1440},
    { item: 'gtceu:raw_cobaltite',              fluid: 'gtceu:cobalt',          amount: 170},
    { item: 'gtceu:raw_cobaltite_block',        fluid: 'gtceu:cobalt',          amount: 1440},
    { item: 'gtceu:raw_magnetite',              fluid: 'gtceu:iron',            amount: 170},
    { item: 'gtceu:raw_magnetite_block',        fluid: 'gtceu:iron',            amount: 1440},
    { item: 'gtceu:raw_molybdenite',            fluid: 'gtceu:molybdenum',      amount: 170},
    { item: 'gtceu:raw_molybdenite_block',      fluid: 'gtceu:molybdenum',      amount: 1440},
    { item: 'gtceu:raw_pyrite',                 fluid: 'gtceu:iron',            amount: 170},
    { item: 'gtceu:raw_pyrite_block',           fluid: 'gtceu:iron',            amount: 1440},
    { item: 'gtceu:raw_pyrolusite',             fluid: 'gtceu:manganese',       amount: 170},
    { item: 'gtceu:raw_pyrolusite_block',       fluid: 'gtceu:manganese',       amount: 1440},
    { item: 'gtceu:raw_sphalerite',             fluid: 'embers:molten_zinc',    amount: 170},
    { item: 'gtceu:raw_sphalerite_block',       fluid: 'embers:molten_zinc',    amount: 1440},
    { item: 'gtceu:raw_stibnite',               fluid: 'gtceu:antimony',        amount: 170},
    { item: 'gtceu:raw_stibnite_block',         fluid: 'gtceu:antimony',        amount: 1440},
    { item: 'gtceu:raw_tetrahedrite',           fluid: 'embers:molten_copper',  amount: 170},
    { item: 'gtceu:raw_tetrahedrite_block',     fluid: 'embers:molten_copper',  amount: 1440},
    { item: 'gtceu:raw_yellow_limonite',        fluid: 'gtceu:iron',            amount: 170},
    { item: 'gtceu:raw_yellow_limonite_block',  fluid: 'gtceu:iron',            amount: 1440},
    { item: 'gtceu:raw_chalcocite',             fluid: 'embers:molten_copper',  amount: 170},
    { item: 'gtceu:raw_chalcocite_block',       fluid: 'embers:molten_copper',  amount: 1440},
    { item: 'gtceu:raw_pentlandite',            fluid: 'embers:molten_nickel',  amount: 170},
    { item: 'gtceu:raw_pentlandite_block',      fluid: 'embers:molten_nickel',  amount: 1440},
    { item: 'gtceu:raw_malachite',              fluid: 'embers:molten_copper',  amount: 170},
    { item: 'gtceu:raw_malachite_block',        fluid: 'embers:molten_copper',  amount: 1440}
];
//Object List for materials that HAVE bonuses in Geological Separator!
const rawBonusMaterials = [
    { item: 'gtceu:raw_bornite',                        fluid: 'embers:molten_copper',  amount: 170, bonus: 'gtceu:cobalt', Bamount: 30},
    { item: 'gtceu:raw_bornite_block',                  fluid: 'embers:molten_copper',  amount: 1440, bonus: 'gtceu:cobalt', Bamount: 270},
    { item: 'gtceu:raw_chalcopyrite',                   fluid: 'embers:molten_copper',  amount: 170, bonus: 'gtceu:cobalt', Bamount: 20},
    { item: 'gtceu:raw_chalcopyrite_block',             fluid: 'embers:molten_copper',  amount: 1440, bonus: 'gtceu:cobalt', Bamount: 180},
    { item: 'minecraft:raw_copper',                     fluid: 'embers:molten_copper',  amount: 170, bonus: 'embers:molten_gold', Bamount: 30},
    { item: 'minecraft:raw_copper_block',               fluid: 'embers:molten_copper',  amount: 1440, bonus: 'embers:molten_gold', Bamount: 270},
    { item: 'minecraft:raw_gold',                       fluid: 'embers:molten_gold',    amount: 170, bonus: 'embers:molten_copper', Bamount: 30},
    { item: 'minecraft:raw_gold_block',                 fluid: 'embers:molten_gold',    amount: 1440, bonus: 'embers:molten_copper', Bamount: 270},
    { item: 'minecraft:raw_iron',                       fluid: 'gtceu:iron',            amount: 170, bonus: 'embers:molten_nickel', Bamount: 30},
    { item: 'minecraft:raw_iron_block',                 fluid: 'gtceu:iron',            amount: 1440, bonus: 'embers:molten_nickel', Bamount: 270},
    { item: 'gtceu:raw_hematite',                       fluid: 'gtceu:iron',            amount: 170, bonus: 'gtceu:magnesium', Bamount: 10},
    { item: 'gtceu:raw_hematite_block',                 fluid: 'gtceu:iron',            amount: 1440, bonus: 'gtceu:magnesium', Bamount: 90},
    { item: 'gtceu:raw_galena',                         fluid: 'embers:molten_lead',    amount: 170, bonus: 'embers:molten_silver', Bamount: 30},
    { item: 'gtceu:raw_galena_block',                   fluid: 'embers:molten_lead',    amount: 1440, bonus: 'embers:molten_silver', Bamount: 30},
    { item: 'gtceu:raw_lead',                           fluid: 'embers:molten_lead',    amount: 170, bonus: 'embers:molten_silver', Bamount: 30},
    { item: 'gtceu:raw_lead_block',                     fluid: 'embers:molten_lead',    amount: 1440, bonus: 'embers:molten_silver', Bamount: 30},
    { item: 'embers:raw_lead',                          fluid: 'embers:molten_lead',    amount: 170, bonus: 'embers:molten_silver', Bamount: 30},
    { item: 'embers:raw_lead_block',                    fluid: 'embers:molten_lead',    amount: 1440, bonus: 'embers:molten_silver', Bamount: 30},
    { item: 'gtceu:raw_garnierite',                     fluid: 'embers:molten_nickel',  amount: 170, bonus: 'gtceu:iron', Bamount: 20},
    { item: 'gtceu:raw_garnierite_block',               fluid: 'embers:molten_nickel',  amount: 1440, bonus: 'gtceu:iron', Bamount: 180},
    { item: 'gtceu:raw_nickel',                         fluid: 'embers:molten_nickel',  amount: 170, bonus: 'gtceu:iron', Bamount: 30},
    { item: 'gtceu:raw_nickel_block',                   fluid: 'embers:molten_nickel',  amount: 1440, bonus: 'gtceu:iron', Bamount: 270},
    { item: 'iceandfire:raw_silver',                    fluid: 'embers:molten_silver',  amount: 170, bonus: 'embers:molten_lead', Bamount: 30},
    { item: 'iceandfire:raw_silver_block',              fluid: 'embers:molten_silver',  amount: 1440, bonus: 'embers:molten_lead', Bamount: 270},
    { item: 'gtceu:raw_silver',                         fluid: 'embers:molten_silver',  amount: 170, bonus: 'embers:molten_lead', Bamount: 30},
    { item: 'gtceu:raw_silver_block',                   fluid: 'embers:molten_silver',  amount: 1440, bonus: 'embers:molten_lead', Bamount: 360},
    { item: 'projectred_exploration:raw_silver',        fluid: 'embers:molten_silver',  amount: 170, bonus: 'embers:molten_lead', Bamount: 30},
    { item: 'projectred_exploration:raw_silver_block',  fluid: 'embers:molten_silver',  amount: 1440, bonus: 'embers:molten_lead', Bamount: 360},
    { item: 'embers:raw_silver',                        fluid: 'embers:molten_silver',  amount: 170, bonus: 'embers:molten_lead', Bamount: 30},
    { item: 'embers:raw_silver_block',                  fluid: 'embers:molten_silver',  amount: 1440, bonus: 'embers:molten_lead', Bamount: 360},
    { item: 'gtceu:raw_cassiterite',                    fluid: 'embers:molten_tin',     amount: 170, bonus: 'gtceu:bismuth', Bamount: 32},
    { item: 'gtceu:raw_cassiterite_block',              fluid: 'embers:molten_tin',     amount: 1440, bonus: 'gtceu:bismuth', Bamount: 180},
    { item: 'gtceu:raw_tin',                            fluid: 'embers:molten_tin',     amount: 170, bonus: 'embers:molten_zinc', Bamount: 30},
    { item: 'gtceu:raw_tin_block',                      fluid: 'embers:molten_tin',     amount: 1440, bonus: 'embers:molten_zinc', Bamount: 270},
    { item: 'projectred_exploration:raw_tin',           fluid: 'embers:molten_tin',     amount: 170, bonus: 'embers:molten_zinc', Bamount: 30},
    { item: 'projectred_exploration:raw_tin_block',     fluid: 'embers:molten_tin',     amount: 1440, bonus: 'embers:molten_zinc', Bamount: 270},
    { item: 'create:raw_zinc',                          fluid: 'embers:molten_zinc',    amount: 170, bonus: 'embers:molten_tin', Bamount: 30},
    { item: 'create:raw_zinc_block',                    fluid: 'embers:molten_zinc',    amount: 1440, bonus: 'embers:molten_tin', Bamount: 270},
]
/*
const elementsToBeMelted = [
    iron,
    copper,
    gold,
    zinc,
    silver,
    tin,
    lead,
    aluminium,
    antimony,
    beryllium,
    bismuth,
    chromium,
    cobalt,
    gallium,
    indium,
    iridium,
    lead,
    manganese,
    molybdenum,
    neodymium,
    nickel,
    niobium,
    osmium,
    palladium,
    platinum,
    rhodium,
    ruthenium,
    samarium,
    tantalum,
    tin,
    titanium,
    tungsten,
    vanadium,
    yttrium,
    zinc
]
    */

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