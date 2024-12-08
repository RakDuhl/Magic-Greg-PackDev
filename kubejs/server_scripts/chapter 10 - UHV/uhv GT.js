


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:uhv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateNeutron,
                I: 'gtceu:celestialgold_frame', 
                P: IngotGaia,
                F: 'gtceu:adamantium_frame',
                W: wrench
            }
        )
        
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
                    'D': DoublePlateNeutron,
                    'I': {'item': 'gtceu:celestialgold_frame'}, 
                    'P': IngotGaia,
                    'F': {'item': 'gtceu:adamantium_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:uhv_machine_casing', 'count': 2},
                'wissen': 10000
            }
        );
    }
)