


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
                    'D': DoublePlateAlu,
                    'I': {'item': 'gtceu:aluminium_frame'}, 
                    'P': PlateManasteel,
                    'F': {'item': 'gtceu:manasteel_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:mv_machine_casing', 'count': 2},
                'wissen': 900
            }
        );
    }
)

