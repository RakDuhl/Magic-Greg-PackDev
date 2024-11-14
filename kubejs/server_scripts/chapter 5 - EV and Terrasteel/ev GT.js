


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:ev_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateTitan,
                I: 'gtceu:titanium_frame', 
                P: PlateMithril,
                F: 'gtceu:mithril_frame',
                W: wrench
            }
        )
    }
)