


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:luv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateRhoPlatPalla,
                I: 'gtceu:arcanegold_frame', 
                P: PlateAlfsteel,
                F: 'gtceu:terrasteel_frame',
                W: wrench
            }
        )
    }
)