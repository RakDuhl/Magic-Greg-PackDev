


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:uv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateDarmstadt,
                I: 'gtceu:celestialgold_frame', 
                P: IngotGaia,
                F: 'gtceu:adamantium_frame',
                W: wrench
            }
        )
    }
)