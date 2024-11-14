


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:hv_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateStainless,
                I: 'gtceu:stainless_steel_frame', 
                P: PlateMithril,
                F: 'gtceu:mithril_frame',
                W: wrench
            }
        )
    }
)
