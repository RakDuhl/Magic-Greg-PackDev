


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
                    'D': DoublePlateNaquAlloy,
                    'I': {'item': 'gtceu:naquadah_alloy_frame'}, 
                    'P': PlateAlfsteel,
                    'F': {'item': 'gtceu:celestialgold_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:zpm_machine_casing', 'count': 2},
                'wissen': 6900
            }
        );
    }
)