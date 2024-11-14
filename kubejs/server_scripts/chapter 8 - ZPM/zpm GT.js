


ServerEvents.recipes(
    event => {
        event.shaped(
            '2x gtceu:zpm_machine_casing',
            [
                'DID',
                'PFP',
                'DWD'
            ], {
                D: DoublePlateNaquAlloy,
                I: 'gtceu:naquadah_alloy_frame', 
                P: PlateAlfsteel,
                F: 'gtceu:celestialgold_frame',
                W: wrench
            }
        )
    }
)