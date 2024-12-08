


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
                    'D': DoublePlateTungSteel,
                    'I': {'item': 'gtceu:tungsten_steel_frame'}, 
                    'P': PlateTerrasteel,
                    'F': {'item': 'gtceu:terrasteel_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:iv_machine_casing', 'count': 2},
                'wissen': 3300
            }
        );
    }
)