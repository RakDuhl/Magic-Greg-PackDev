


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
    }
)