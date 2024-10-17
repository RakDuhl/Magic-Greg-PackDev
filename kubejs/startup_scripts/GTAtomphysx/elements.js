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
        event.create('mana',            1, 1, -1, null, '✬', false) 
        event.create('mana_steel',      27, 33, -1, null, 'Fe₃✬₃', false) //Most stable Fe isotope used, 56Fe, 26 Protons, 32 Neutrons
        event.create('terra_steel',     42, 51, -1, null, 'Fe₃✬₆V⁽³⁾₃', false)
        event.create('mana_pearl',      -1, -1, -1, null, '✬₆BeK₄N₅', false)
        event.create('arcane_gold',     79, 118, -1, null, 'Au₃✬₃', false) //naturally occuring Gold isotope used, ¹⁹⁷Au
        event.create('alfsteel',        58, 72, -1, null, 'Fe₃✬₆V⁽³⁾₃', false)

        //Custom Elements
        event.create('adamantium',      58, 82, -1, null, 'Ad', false)
        event.create('mithril',         18, 22, -1, null, 'My', false)
        event.create('hihiirokane',     29, 34, -1, null, 'Hk', false)
    }
)
