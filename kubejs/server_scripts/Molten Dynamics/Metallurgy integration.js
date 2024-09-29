// priority:
const MoltenToIngot = [
    { fluid: 'embers:molten_copper',        mold: 'magicgreg:molten_copper_mold', item: 'minecraft:copper_ingot'},
    { fluid: 'embers:molten_gold',          mold: 'magicgreg:molten_gold_mold', item: 'minecraft:gold_ingot'},
    { fluid: 'gtceu:iron',                  mold: 'magicgreg:molten_iron_mold', item: 'minecraft:iron_ingot'},
    { fluid: 'embers:molten_lead',          mold: 'magicgreg:molten_lead_mold', item: 'embers:lead_ingot'},
    { fluid: 'embers:molten_nickel',        mold: 'magicgreg:molten_nickel_mold', item: 'gtceu:nickel_ingot'},
    { fluid: 'embers:molten_silver',        mold: 'magicgreg:molten_silver_mold', item: 'embers:silver_ingot'},
    { fluid: 'embers:molten_tin',           mold: 'magicgreg:molten_tin_mold', item: 'gtceu:tin_ingot'},
    { fluid: 'embers:molten_zinc',          mold: 'magicgreg:molten_zinc_mold', item: 'create:zinc_ingot'},
    { fluid: 'gtceu:beryllium',             mold: 'magicgreg:molten_beryllium_mold', item: 'gtceu:beryllium_ingot'},
    { fluid: 'gtceu:cobalt',                mold: 'magicgreg:molten_cobalt_mold', item: 'gtceu:cobalt_ingot'},
    { fluid: 'gtceu:molybdenum',            mold: 'magicgreg:molten_molybdenum_mold', item: 'gtceu:molybdenum_ingot'},
    { fluid: 'gtceu:manganese',             mold: 'magicgreg:molten_manganese_mold', item: 'gtceu:manganese_ingot'},
    { fluid: 'gtceu:antimony',              mold: 'magicgreg:molten_antimony_mold', item: 'gtceu:antimony_ingot'},
    { fluid: 'gtceu:magnesium',             mold: 'magicgreg:molten_magnesium_mold', item: 'gtceu:magnesium_dust'},
    { fluid: 'gtceu:bismuth',               mold: 'magicgreg:molten_bismuth_mold', item: 'gtceu:bismuth_ingot'}
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
                            'item': 'magicgreg:empty_ingot_mold' //UND 'molten_metals:ceramic_ingot_mold'
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
                            "item": "magicgreg:empty_ingot_mold"
                        }
                    ]
                }
            );
        });
    }
);
