// priority: 9900

//event.create(Element Name (string), Protons Int, Neutrons Int, Half Life Seconds Int, Decay To, Atomic Symbol (string), Is Isotope boolean)
//If Half-Life is set to -1, set Decay To as null and Is Isotope to false
//The higher the Atomic Numbers, the longer autoGen recipes from GT will be
//Superscript   ¹²³⁴⁵⁶⁷⁸⁹⁰⁺⁻⁼⁽⁾
//Subscript     ₁₂₃₄₅₆₇₈₉₀₊₋₌₍₎
//Special characters ✬

elementRegistry(
    event => {
        //Arcane Components
        event.create('Mana',            1, 1, -1, null, '✬', false)
        event.create('Creativity',      -1, -1, -1, null, 'Create', false)
//        event.create('Mana Steel',      27, 33, -1, null, 'Fe₃✬₃', false) //Most stable Fe isotope used, 56Fe, 26 Protons, 32 Neutrons
//        event.create('Terra Steel',     42, 51, -1, null, 'Fe₃✬₆V⁽³⁾₃', false)
//        event.create('Mana Pearl',      -1, -1, -1, null, '✬₆BeK₄N₅', false)
//        event.create('Arcane Gold',     79, 118, -1, null, 'Au₃✬₃', false) //naturally occuring Gold isotope used, ¹⁹⁷Au
//        event.create('Alfsteel',        58, 72, -1, null, 'Fe₃✬₆V⁽³⁾₃', false)

        //Custom Elements
        event.create('Adamantium',      58, 82, -1, null, 'Ad', false)
        event.create('Vulcanite', 1, 1, -1, null, 'Vc', false)
        event.create('Hihiirokane',     29, 34, -1, null, 'Hk', false)
        event.create('Prometheum', 1, 1, -1, null, 'Ph', false)
        event.create('Orichalcum', 1, 1, -1, null, 'Oc', false)
//        event.create('Mithril',         18, 22, -1, null, 'Ag✬', false)
//        event.create('Dawnstone', 1, 1, -1, null, 'Dw', false)
//        event.create('Duskstone', 1, 1, -1, null, 'Dk', false)
//        event.create('Astral Silver', 1, 1, -1, null, '', false)
//        event.create('', 1, 1, -1, null, '', false)
//        event.create('', 1, 1, -1, null, '', false)
    }
)
