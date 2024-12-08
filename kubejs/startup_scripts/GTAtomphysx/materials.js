//priority: 9308

console.log('Registering custom artificial materials!')

//Superscript   ¹²³⁴⁵⁶⁷⁸⁹⁰⁺⁻⁼⁽⁾
//Subscript     ₁₂₃₄₅₆₇₈₉₀₊₋₌₍₎
//Special characters ★ 🔥 ⚙
//Ag₄★₆

GTCEuStartupEvents.registry(
    'gtceu:material_icon_set',
    icon => {
        icon.create('manasteel').parent(SHINY)
        icon.create('elementium').parent(BRIGHT)
        icon.create('terrasteel').parent(SHINY)
        icon.create('alfsteel').parent(DULL)
        icon.create('dawnstone').parent(BRIGHT)
//        material.create().parent()
//        material.create().parent()
    }
)

GTCEuStartupEvents.registry(
    'gtceu:material',
    material => {
        /**
         * Now Listen, this is a note to myself
         * it took you fucking 4 DAYS to figure out what was going on with this whole issue.
         * The solution to all that agony was really an _, this script, idk what part, does not like the use of snake_case 'names',
         * so it all needs to be written in either camelCase or lowercase. The same applies to the TagPrefix.() below.
         * If you register any component, material or element, they ALL need to be written in camelCase or lowercase.
         */
        
        //Hihiirokane
        //Ir₃Th★
        //Classical Fusion product, radioactive
        material.create('hihiirokane')
//        .element(GTElements.get("hihiirokan"))
        .components('3x iridium', '1x thorium', '1x mana')
        .color(0xF24F7D).secondaryColor(0xF24F00).iconSet(RADIOACTIVE)
        .ingot()
        .fluid()
//        .cableProperties(V('uv'), 3, 0, true)
        .blastTemp(3972, 'high', 58470, 8510)
        .flags(
            plates,
            dense_plate,
            long_rod,
            block,
            foil,
            fine_wire,
            no_abs_recipe,
            no_decomp,
            no_hand_craft,
            no_smelt,
            no_block_craft,
        );

        material.create('manasteel')
        //Fe₃★₃
        .components('3x iron', '3x mana')
        .color(0xFFFFFF).iconSet('manasteel')
        .ingot()
        .fluid()
        .cableProperties(V('mv'), 2, 0, false)
        .flags(
            frame,
            foil,
            fine_wire,
            plates,
            dense_plate,
            rod,
            long_rod,
            gear,
            small_gear
        );
        
        material.create('elementium')
        //(Fe₃★₃)₂(SiO₂)₄Fe
        .components('2x manasteel', '3x amethyst', '2x silver', '2x mana')
        .color(0xFFFFFF).iconSet('elementium')
        .fluid()
        .ingot()
        .cableProperties(V('ev'), 4, 0, false)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear
        );
        
        material.create('terrasteel')
        //(Fe₃★₃)₂★₆V₃CrPh₂
        .components('2x manasteel', '6x mana', '3x vanadium', '1x chromium', '2x prometheum')
        .color(0xFFFFFF).iconSet('terrasteel')
        .fluid()
        .ingot()
        .cableProperties(V('iv'), 4, 0, true)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear
        );
        
        material.create('alfsteel')
        //W₃★₇((Fe₃★₃)₂(SiO₂)₄Fe)Ir
        .components('3x tungsten', '7x mana', '1x elementium', '1x iridium')
        .color(0xFFFFFF).iconSet('alfsteel')
        .fluid()
        .ingot()
        .cableProperties(V('luv'), 6, 0, true)
        .blastTemp(2759, 'mid', 5800, 4890)
        .flags(
            plates,
            rod,
            gear,
            no_abs_recipe
        );

        material.create('celestialbronze')
        //Cu₄Sn(Au★)Ag
        .components('4x copper', '1x tin', '1x arcanegold', '1x silver')
        .color(0xC88F4A).secondaryColor(0xF2D3A2).iconSet(BRIGHT)
        .fluid()
        .ingot()
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod,
            no_abs_recipe
        );

        material.create('celestial_gold')
        //(Au★)₃Pt
        .components('3x arcanegold', '12x gold', '1x platinum', '2x silver', '24x mana')
        .color(0xFFD700).secondaryColor(0xFFF5E1).iconSet(SHINY)
        .fluid()
        .ingot()
        .blastTemp(2453, 'high', 12450, 2160)
        .flags(
            foil,
            fine_wire,
            plates,
            rod,
            frame,
            gear,
            long_rod,
            no_abs_recipe,
            no_decomp,
            no_smelt
        );

        material.create('spectrium')
        //ThU₂Ra⚙
        .components('1x thorium', '2x uranium', '1x radium', '1x wissen')
        .color(0x36C74A).secondaryColor(0xA13CF8).iconSet(RADIOACTIVE)
        .fluid()
        .ingot()
        .blastTemp(3815, 'high', 38400, 4200)
        .flags(
            plates,
            rod,
            long_rod,
            no_abs_recipe,
            no_smelt,
            no_hand_craft,
            no_decomp
        );

        material.create('starminite')
        //TiSd
        .components('1x titanium', '1x stardust')
        .color(0x3F63BF).secondaryColor(0xB5DADD).iconSet(SHINY)
        .ingot()
        .fluid()
        .blastTemp(1950, 'high', 685, 4830)
        .flags(
            plates,
            dense_plate,
            rod,
            long_rod,
            no_abs_recipe,
            no_smelt
        );

        material.create('astralite')
        //Co₃NiW(TiAc)
        .components('3x cobalt', '1x nickel', '1x tungsten', '1x starminite')
        .color(0x3A9DF9).secondaryColor(0xD1E3FF).iconSet(BRIGHT)
        .fluid()
        .ingot()
        .blastTemp(3590, 'mid', 7940, 5100)
        .flags(
            foil,
            plates,
            rod,
            long_rod,
            no_abs_recipe,
        )
        //Creating a new tool, figuring out all the fields because documentation doesnt
        //ToolProperty(Miningspeed?, drawspeed?, Durability, Mininglevel, [????])
        .toolStats(new ToolProperty(20.0, 1.0, 6840, 5, []));

        material.create('dawnstone')
        //(Cu₄Sn(Au★)Ag)🔥2
        .components('celestialbronze', '2x ember')
        .color(0xFFFFFF).iconSet('dawnstone')
        .ingot()
        .fluid()
        .blastTemp(2431, null, 1480, 2840)
        .flags(
            plates,
            rod,
            no_abs_recipe,
            no_decomp,
            no_hand_craft,
            no_smelt
        );

        material.create('seprom')
        .components('celestial_gold', 'distrontiumruthenate')
        .ore(2, 1, true)
        .ingot()
        .blastTemp(1530, 'mid', 340, 6840)
        .cableProperties(V('luv'), 4, 0, true)
        .flags(
            no_decomp,
            no_hand_craft,
            no_smelt
        );
        
        material.create('polyether_ether_ketone')
        .components('19x carbon', '12x hydrogen', '3x oxygen')
        .color(0xD2C1AD)
        .polymer()
        .flags(
            no_decomp,
            no_hand_craft,
            no_smelt,
            not_alloy,
            plates,
            foil,
            ring,
            dense_plate
        );

        material.create('atlarus')
        .components('1x adamantium', '1x vulcanite')
        .color(0xFF6A21).secondaryColor(0xEF0500).iconSet(DULL)
        .ingot()
        .fluid()
        .blastTemp(8760, 'highest', 3680, 36000)
        .cableProperties(V('zpm'), 2, 1, false)
        .flags(
            no_abs_recipe,
            no_block_craft,
            no_decomp,
            no_hand_craft,
            no_smashing,
            no_smelt,
            plates,
            dense_plate
        );

        material.create('emberscorch')
        .components('4x nickel', '1x chromium', '3x ember')
        .color(0xFF7E7C).iconSet(SHINY)
        .ingot()
        .blastTemp(3550, 'mid', 1250, 6600)
        .flags(
            no_decomp,
            no_hand_craft,
            no_smelt,
            foil,
            plates,
        );
        
    }
)