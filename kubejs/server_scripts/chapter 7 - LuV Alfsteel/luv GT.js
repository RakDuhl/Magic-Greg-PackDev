


ServerEvents.recipes(
    event => {

        event.custom(
            {
                'type': 'wizards_reborn:arcane_workbench',
                'pattern': [
                    'DID',
                    'PFP',
                    'DWD',
                    '    '
                ], 
                'key': {
                    'D': DoublePlateRhoPlatPalla,
                    'I': {'item': 'gtceu:arcanegold_frame'}, 
                    'P': PlateAlfsteel,
                    'F': {'item': 'gtceu:terrasteel_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:luv_machine_casing', 'count': 2},
                'wissen': 5500
            }
        );
    }
)