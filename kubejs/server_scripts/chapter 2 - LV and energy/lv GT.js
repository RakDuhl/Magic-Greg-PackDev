 //priority:

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
                    'D': DoublePlateSteel,
                    'I': {'item': 'gtceu:steel_frame'}, 
                    'P': PlateManasteel,
                    'F': {'item': 'gtceu:manasteel_frame'},
                    'W': wrench
                },
                'output': {'item': 'gtceu:lv_machine_casing', 'count': 2},
                'wissen': 500
            }
        );
        
        event.shaped(
            '4x gtceu:ulv_voltage_coil',
            [
                'wS ',
                'WRW',
                ' Sw'
            ], {
                S: 'gtceu:rubber_plate',
                W: 'gtceu:fine_manasteel_wire',
                w: 'gtceu:fine_copper_wire',
                R: 'gtceu:iron_rod'
            }
        );
    }
)


