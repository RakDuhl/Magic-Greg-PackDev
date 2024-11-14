 //priority:

ServerEvents.recipes(
    event => {

        event.shaped(
            '2x gtceu:lv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateSteel,
                I: 'design_decor:industrial_plating_block', 
                P: PlateManasteel,
                F: 'gtceu:manasteel_frame',
                W: wrench
            }
        )
    }
)


