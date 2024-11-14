ServerEvents.recipes(
    event => {
        event.remove({output: 'wizards_reborn:arcane_wood_branch'})

        event.shaped(
            '4x wizards_reborn:arcane_wood_branch', [
                ' L',
                'L '
            ], {
                L: 'wizards_reborn:arcane_wood_planks'
            }
        )


        //Custom Wissen Altar Inputs
        let WissenInput = [
            {item: 'gtceu:wissen_gem', amount: 1400},
            {item: 'gtceu:wissen_dust', amount: 200},
            {item: 'gtceu:wissen_plate', amount: 1000},
            {item: 'gtceu:exquisite_wissen_gem', amount: 3400},
            {item: 'gtceu:tiny_wissen_dust', amount: 20},
            {item: 'gtceu:flawless_wissen_gem', amount: 2100},
            {item: 'gtceu:small_wissen_dust', amount: 100},
            {item: 'gtceu:wissen_block', amount: 10000},
            {item: 'wizards_reborn:arcanum_block', amount: 10000},
            {item: 'irons_spellbooks:arcane_essence', amount: 1100},
            {item: 'irons_spellbooks:arcane_salvage', amount: 12800},
            {item: 'irons_spellbooks:arcane_ingot', amount: 5500},
            {item: 'forbidden_arcanus:arcane_crystal', amount: 1600},
            {item: 'forbidden_arcanus:arcane_crystal_dust', amount: 600},
        ];
        
        WissenInput.forEach(
            input => {
                event.custom(
                    {
                        "type": "wizards_reborn:wissen_altar",
                        "ingredient": {
                          "item": input.item
                        },
                        "wissen": input.amount
                    }
                );
            }
        );
    }
)