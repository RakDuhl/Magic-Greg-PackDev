ServerEvents.recipes(
    event => {
        event.remove({output: 'wizards_reborn:arcane_wood_branch'})

        event.shaped(
            '4x wizards_reborn:arcane_wood_branch', [
                ' L',
                'L '
            ], {
                L: 'wizards_reborn:arcane_wood_log'
            }
        )
    }
)