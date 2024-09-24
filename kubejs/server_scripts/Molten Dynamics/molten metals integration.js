// priority:
const MoltenToIngot = [
    { fluid: 'molten_metals:molten_copper', mold: 'molten_metals:molten_copper_ingot_mold', item: 'minecraft:copper_ingot'},
    { fluid: 'molten_metals:molten_gold',   mold: 'molten_metals:molten_gold_ingot_mold', item: 'minecraft:gold_ingot'},
    { fluid: 'molten_metals:molten_iron',   mold: 'molten_metals:molten_iron_ingot_mold', item: 'minecraft:iron_ingot'},
    { fluid: 'embers:molten_lead',          mold: 'molten_metals:molten_lead_ingot_mold', item: 'embers:lead_ingot'},
    { fluid: 'embers:molten_nickel',        mold: 'magicgreg:molten_nickel_ingot_mold', item: 'gtceu:nickel_ingot'},
    { fluid: 'molten_metals:molten_silver', mold: 'molten_metals:molten_silver_ingot_mold', item: 'embers:silver_ingot'},
    { fluid: 'molten_metals:molten_tin',    mold: 'molten_metals:molten_tin_ingot_mold', item: 'gtceu:tin_ingot'},
    { fluid: 'molten_metals:molten_zinc',   mold: 'molten_metals:molten_zinc_ingot_mold', item: 'create:zinc_ingot'},
    { fluid: 'gtceu:beryllium',             mold: 'magicgreg:molten_beryllium_ingot_mold', item: 'gtceu:beryllium_ingot'},
    { fluid: 'gtceu:cobalt',                mold: 'magicgreg:molten_cobalt_ingot_mold', item: 'gtceu:cobalt_ingot'},
    { fluid: 'gtceu:molybdenum',            mold: 'magicgreg:molten_molybdenum_ingot_mold', item: 'gtceu:molybdenum_ingot'},
    { fluid: 'gtceu:neodymium',             mold: 'magicgreg:molten_neodymium_ingot_mold', item: 'gtceu:neodymium_ingot'},
    { fluid: 'gtceu:thorium',               mold: 'magicgreg:molten_thorium_ingot_mold', item: 'gtceu:thorium_ingot'},
    { fluid: 'gtceu:manganese',             mold: 'magicgreg:molten_manganese_ingot_mold', item: 'gtceu:manganese_ingot'},
    { fluid: 'gtceu:antimony',              mold: 'magicgreg:molten_antimony_ingot_mold', item: 'gtceu:antimony_ingot'},
    { fluid: 'gtceu:magnesium',             mold: 'magicgreg:molten_magnesiu_ingot_mold', item: 'gtceu:magnesium_dust'},
    { fluid: 'gtceu:bismuth',               mold: 'molten_metals:molten_bismuth_ingot_mold', item: 'gtceu:bismuth_ingot'}
];

//filling molds
ServerEvents.recipes(
    event => {
        MoltenToIngot.forEach(material => {
            event.custom(
                {
                    'type': 'create:filling',
                    'ingredients': [
                        {
                            'item': 'molten_metals:ingot_mold' //UND 'molten_metals:ceramic_ingot_mold'
                        },
                        {
                            'fluid': material.fluid,
                            'amount': 144
                        }
                    ],
                    'results': [
                        {
                            'item': material.mold //das METAL sollte dann immer mit dem was LIQUID ist stimmen
                        }
                    ]
                }
            );
        });
    }
);

//Emptying the molds
ServerEvents.recipes(
    event => {
        MoltenToIngot.forEach(material => {
            event.custom(
                {
                    "type": "create:splashing",
                    "ingredients": [
                        {
                            "item": material.mold
                        }
                    ],
                    "results": [
                        {
                            "item": material.item
                        },
                        {
                            "item": "molten_metals:ingot_mold"
                        }
                    ]
                }
            );
        });
    }
);
