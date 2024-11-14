


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:iv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateTungSteel,
                I: 'gtceu:tungsten_steel_frame', 
                P: PlateTerrasteel,
                F: 'gtceu:terrasteel_frame',
                W: wrench
            }
        )
    }
)