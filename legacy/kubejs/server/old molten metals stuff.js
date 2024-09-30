
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
