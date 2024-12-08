


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
                    'D': DoublePlateStainless,
                    'I': {'item': 'gtceu:stainless_steel_frame'}, 
                    'P': PlateMithril,
                    'F': {'item': 'gtceu:mithril_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:hv_machine_casing', 'count': 2},
                'wissen': 1500
            }
        );
    }
)
