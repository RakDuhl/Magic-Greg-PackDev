Ponder.tags(
    (event) => {
        /**
         * 'kubejs:getting_started' -> the tag name
         * 'minecraft:paper'        -> the icon
         * 'Getting Started'        -> the title
         * 'This is a description'  -> the description
         * [...items]               -> default items
         */
        event.createTag('magicgreg:unknown_magic', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:fa_arcane_crystal"}'), 'Discovering the unknown.', 'Lets begin the journey', [
                // some default items
                'forbidden_arcanus:hephaestus_forge',
                'forbidden_arcanus:darkstone_pedestal',
                'forbidden_arcanus:arcane_crystal_obelisk'
            ]
        );
    }
);