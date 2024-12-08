


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
                    'D': DoublePlateDarmstadt,
                    'I': {'item': 'gtceu:celestialgold_frame'}, 
                    'P': IngotGaia,
                    'F': {'item': 'gtceu:adamantium_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:uv_machine_casing', 'count': 2},
                'wissen': 8500
            }
        );
    }
)