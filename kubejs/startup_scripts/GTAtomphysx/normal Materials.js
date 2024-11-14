//priority: 9310


GTCEuStartupEvents.registry(
    'gtceu:material',
    material => {
        material.create('dilithiumalumite')
        .components('2x lithium', 'aluminium')
        .dust()
        .color(0x70A593).iconSet(FINE)
        .flags(centrifuge);

        material.create('borate3')
        .components('3x boron', '9x oxygen')
        .dust()
        .color(0x6EA34B).iconSet(FINE)
        .flags(electrolyze);

        material.create('hypersilicate')
        .components('6x silicon', '18x oxygen')
        .dust()
        .color(0x4F935F).iconSet(FINE)
        .flags(electrolyze);

        material.create('hydroxyl')
        .components('3x oxygen', '3x hydrogen')
        .liquid()
        .color(0x471E22)
        .flags(electrolyze);

        material.create('distrontiumruthenate')
        .components('2x strontium', '1x ruthenium', '4x oxygen')
        .color(0x9ECAD5).secondaryColor(0x240A11).iconSet(METALLIC)
        .dust()
        .flags(centrifuge);

        material.create('titaniumdioxide')
        .components('1x titanium', '2x oxygen')
        .color(0xed8eea).secondaryColor(0x4CC3FF).iconSet(FINE)
        .dust()
        .flags(electrolyze);
        
    }
)

GTCEuStartupEvents.materialModification(
    event => {
        GTMaterials.get('borate3').setFormula('(BO3)3')
        GTMaterials.get('hydroxyl').setFormula('(OH)3')
    }
)