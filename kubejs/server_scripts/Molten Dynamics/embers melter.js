//priority: 8501
//If anything new appears, just add the new ore here AND in "Metallurgy integration.js"!
//Keep in mind, I want to encourage the use of Embers! as it gives more and has special bonuses.
//Creating easily exandable Object List for Embers Melter, those dont have any Bonuses
const rawMaterials = [
    { item: 'gtceu:raw_beryllium',              fluid: 'gtceu:beryllium',   amount: 170},
    { item: 'gtceu:raw_beryllium_block',        fluid: 'gtceu:beryllium',   amount: 1440},
    { item: 'gtceu:raw_cobalt',                 fluid: 'gtceu:cobalt',      amount: 170},
    { item: 'gtceu:raw_cobalt_block',           fluid: 'gtceu:cobalt',      amount: 1440},
    { item: 'gtceu:raw_molybdenum',             fluid: 'gtceu:molybdenum',  amount: 170},
    { item: 'gtceu:raw_molybdenum_block',       fluid: 'gtceu:molybdenum',  amount: 1440},
    { item: 'gtceu:raw_goethite',               fluid: 'gtceu:iron',        amount: 170},
    { item: 'gtceu:raw_goethite_block',         fluid: 'gtceu:iron',        amount: 1440},
    { item: 'gtceu:raw_cobaltite',              fluid: 'gtceu:cobalt',      amount: 170},
    { item: 'gtceu:raw_cobaltite_block',        fluid: 'gtceu:cobalt',      amount: 1440},
    { item: 'gtceu:raw_magnetite',              fluid: 'gtceu:iron',        amount: 170},
    { item: 'gtceu:raw_magnetite_block',        fluid: 'gtceu:iron',        amount: 1440},
    { item: 'gtceu:raw_molybdenite',            fluid: 'gtceu:molybdenum',  amount: 170},
    { item: 'gtceu:raw_molybdenite_block',      fluid: 'gtceu:molybdenum',  amount: 1440},
    { item: 'gtceu:raw_pyrite',                 fluid: 'gtceu:iron',        amount: 170},
    { item: 'gtceu:raw_pyrite_block',           fluid: 'gtceu:iron',        amount: 1440},
    { item: 'gtceu:raw_pyrolusite',             fluid: 'gtceu:manganese',   amount: 170},
    { item: 'gtceu:raw_pyrolusite_block',       fluid: 'gtceu:manganese',   amount: 1440},
    { item: 'gtceu:raw_sphalerite',             fluid: 'gtceu:zinc',        amount: 170},
    { item: 'gtceu:raw_sphalerite_block',       fluid: 'gtceu:zinc',        amount: 1440},
    { item: 'gtceu:raw_stibnite',               fluid: 'gtceu:antimony',    amount: 170},
    { item: 'gtceu:raw_stibnite_block',         fluid: 'gtceu:antimony',    amount: 1440},
    { item: 'gtceu:raw_tetrahedrite',           fluid: 'gtceu:copper',      amount: 170},
    { item: 'gtceu:raw_tetrahedrite_block',     fluid: 'gtceu:copper',      amount: 1440},
    { item: 'gtceu:raw_yellow_limonite',        fluid: 'gtceu:iron',        amount: 170},
    { item: 'gtceu:raw_yellow_limonite_block',  fluid: 'gtceu:iron',        amount: 1440},
    { item: 'gtceu:raw_chalcocite',             fluid: 'gtceu:copper',      amount: 170},
    { item: 'gtceu:raw_chalcocite_block',       fluid: 'gtceu:copper',      amount: 1440},
    { item: 'gtceu:raw_pentlandite',            fluid: 'gtceu:nickel',      amount: 170},
    { item: 'gtceu:raw_pentlandite_block',      fluid: 'gtceu:nickel',      amount: 1440},
    { item: 'gtceu:raw_malachite',              fluid: 'gtceu:copper',      amount: 170},
    { item: 'gtceu:raw_malachite_block',        fluid: 'gtceu:copper',      amount: 1440}
];
//Object List for materials that HAVE bonuses in Geological Separator!
const rawBonusMaterials = [
    { item: 'gtceu:raw_bornite',                        fluid: 'gtceu:copper',  amount: 170, bonus: 'gtceu:cobalt', Bamount: 30},
    { item: 'gtceu:raw_bornite_block',                  fluid: 'gtceu:copper',  amount: 1440, bonus: 'gtceu:cobalt', Bamount: 270},
    { item: 'gtceu:raw_chalcopyrite',                   fluid: 'gtceu:copper',  amount: 170, bonus: 'gtceu:cobalt', Bamount: 20},
    { item: 'gtceu:raw_chalcopyrite_block',             fluid: 'gtceu:copper',  amount: 1440, bonus: 'gtceu:cobalt', Bamount: 180},
    { item: 'minecraft:raw_copper',                     fluid: 'gtceu:copper',  amount: 170, bonus: 'gtceu:gold', Bamount: 30},
    { item: 'minecraft:raw_copper_block',               fluid: 'gtceu:copper',  amount: 1440, bonus: 'gtceu:gold', Bamount: 270},
    { item: 'minecraft:raw_gold',                       fluid: 'gtceu:gold',    amount: 170, bonus: 'gtceu:copper', Bamount: 30},
    { item: 'minecraft:raw_gold_block',                 fluid: 'gtceu:gold',    amount: 1440, bonus: 'gtceu:copper', Bamount: 270},
    { item: 'minecraft:raw_iron',                       fluid: 'gtceu:iron',    amount: 170, bonus: 'gtceu:nickel', Bamount: 30},
    { item: 'minecraft:raw_iron_block',                 fluid: 'gtceu:iron',    amount: 1440, bonus: 'gtceu:nickel', Bamount: 270},
    { item: 'gtceu:raw_hematite',                       fluid: 'gtceu:iron',    amount: 170, bonus: 'gtceu:magnesium', Bamount: 10},
    { item: 'gtceu:raw_hematite_block',                 fluid: 'gtceu:iron',    amount: 1440, bonus: 'gtceu:magnesium', Bamount: 90},
    { item: 'gtceu:raw_galena',                         fluid: 'gtceu:lead',    amount: 170, bonus: 'gtceu:silver', Bamount: 30},
    { item: 'gtceu:raw_galena_block',                   fluid: 'gtceu:lead',    amount: 1440, bonus: 'gtceu:silver', Bamount: 30},
    { item: 'gtceu:raw_lead',                           fluid: 'gtceu:lead',    amount: 170, bonus: 'gtceu:silver', Bamount: 30},
    { item: 'gtceu:raw_lead_block',                     fluid: 'gtceu:lead',    amount: 1440, bonus: 'gtceu:silver', Bamount: 30},
    { item: 'embers:raw_lead',                          fluid: 'gtceu:lead',    amount: 170, bonus: 'gtceu:silver', Bamount: 30},
    { item: 'embers:raw_lead_block',                    fluid: 'gtceu:lead',    amount: 1440, bonus: 'gtceu:silver', Bamount: 30},
    { item: 'gtceu:raw_garnierite',                     fluid: 'gtceu:nickel',  amount: 170, bonus: 'gtceu:iron', Bamount: 20},
    { item: 'gtceu:raw_garnierite_block',               fluid: 'gtceu:nickel',  amount: 1440, bonus: 'gtceu:iron', Bamount: 180},
    { item: 'gtceu:raw_nickel',                         fluid: 'gtceu:nickel',  amount: 170, bonus: 'gtceu:iron', Bamount: 30},
    { item: 'gtceu:raw_nickel_block',                   fluid: 'gtceu:nickel',  amount: 1440, bonus: 'gtceu:iron', Bamount: 270},
    { item: 'iceandfire:raw_silver',                    fluid: 'gtceu:silver',  amount: 170, bonus: 'gtceu:lead', Bamount: 30},
    { item: 'iceandfire:raw_silver_block',              fluid: 'gtceu:silver',  amount: 1440, bonus: 'gtceu:lead', Bamount: 270},
    { item: 'gtceu:raw_silver',                         fluid: 'gtceu:silver',  amount: 170, bonus: 'gtceu:lead', Bamount: 30},
    { item: 'gtceu:raw_silver_block',                   fluid: 'gtceu:silver',  amount: 1440, bonus: 'gtceu:lead', Bamount: 360},
    { item: 'projectred_exploration:raw_silver',        fluid: 'gtceu:silver',  amount: 170, bonus: 'gtceu:lead', Bamount: 30},
    { item: 'projectred_exploration:raw_silver_block',  fluid: 'gtceu:silver',  amount: 1440, bonus: 'gtceu:lead', Bamount: 360},
    { item: 'embers:raw_silver',                        fluid: 'gtceu:silver',  amount: 170, bonus: 'gtceu:lead', Bamount: 30},
    { item: 'embers:raw_silver_block',                  fluid: 'gtceu:silver',  amount: 1440, bonus: 'gtceu:lead', Bamount: 360},
    { item: 'gtceu:raw_cassiterite',                    fluid: 'gtceu:tin',     amount: 170, bonus: 'gtceu:bismuth', Bamount: 32},
    { item: 'gtceu:raw_cassiterite_block',              fluid: 'gtceu:tin',     amount: 1440, bonus: 'gtceu:bismuth', Bamount: 180},
    { item: 'gtceu:raw_tin',                            fluid: 'gtceu:tin',     amount: 170, bonus: 'gtceu:zinc', Bamount: 30},
    { item: 'gtceu:raw_tin_block',                      fluid: 'gtceu:tin',     amount: 1440, bonus: 'gtceu:zinc', Bamount: 270},
    { item: 'projectred_exploration:raw_tin',           fluid: 'gtceu:tin',     amount: 170, bonus: 'gtceu:zinc', Bamount: 30},
    { item: 'projectred_exploration:raw_tin_block',     fluid: 'gtceu:tin',     amount: 1440, bonus: 'gtceu:zinc', Bamount: 270},
    { item: 'create:raw_zinc',                          fluid: 'gtceu:zinc',    amount: 170, bonus: 'gtceu:tin', Bamount: 30},
    { item: 'create:raw_zinc_block',                    fluid: 'gtceu:zinc',    amount: 1440, bonus: 'gtceu:tin', Bamount: 270},
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