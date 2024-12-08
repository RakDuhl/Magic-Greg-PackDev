


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
                    'D': DoublePlateTitan,
                    'I': {'item': 'gtceu:titanium_frame'}, 
                    'P': PlateMithril,
                    'F': {'item': 'gtceu:mithril_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:ev_machine_casing', 'count': 2},
                'wissen': 2300
            }
        );
    }
)