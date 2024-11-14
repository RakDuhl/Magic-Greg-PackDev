


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:mv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateAlu,
                I: 'gtceu:aluminium_frame', 
                P: PlateManasteel,
                F: 'gtceu:manasteel_frame',
                W: wrench
            }
        )
    }
)

