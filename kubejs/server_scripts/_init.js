//priority: 10000

//variables

    //OreGen variables
    const stone = 'stone';
    const deepslate = 'deepslate';
    const netherrack = 'netherrack';
    const endstone = 'endstone';

    //Making constants
    const AllStone =    Ingredient.of('#forge:stone');
    const Stone =       Ingredient.of('minecraft:stone');
    const Cobblestone=  Ingredient.of('#forge:cobblestone');
    const StoneSlabs = [
        'minecraft:stone_slab', 
        'minecraft:smooth_stone_slab', 
        'minecraft:cobblestone_slab', 
        'minecraft:granite_slab', 
        'minecraft:andesite_slab', 
        'minecraft:diorite_slab', 
        'minecraft:cobbled_deepslate_slab', 
        'minecraft:blackstone_slab', 
        'blue_skies:turquoise_stone_slab', 
        'blue_skies:turquoise_cobblestone_slab', 
        'botania:livingrock_slab'
    ];
    const SuperGlue = Ingredient.of('create:super_glue');

    const hammer =              Ingredient.of('#forge:tools/hammers');
    const wrench =              Ingredient.of('#forge:tools/wrenches');
    const hammerSoft =          Ingredient.of('#forge:tools/mallets');
    const LivingRock =          Ingredient.of('botania:livingrock');
    const Caminite =            Ingredient.of('embers:caminite_blend');
    const ArcaneCrys =          Ingredient.of('forbidden_arcanus:arcane_crystal');
    const ArcanumDust =         Ingredient.of('wizards_reborn:arcanum_dust');
    const Petals =              Ingredient.of('#botania:petals');
    const ManasteelFrame =      Ingredient.of('gtceu:manasteel_frame');
    const PlatesManaSteel=      Ingredient.of('#forge:plates/manasteel');

    //Ingots
    const IngotManasteel    = Ingredient.of('#forge:ingots/manasteel');
    const IngotTerrasteel   = Ingredient.of('#forge:ingots/terrasteel');
    const IngotSteel        = Ingredient.of('#forge:ingots/steel');
    const IngotAlfsteel     = Ingredient.of('#forge:ingots/alfsteel');
    const IngotAlu          = Ingredient.of('gtceu:aluminium_ingot');
    const IngotElementium   = Ingredient.of('#forge:ingots/elementium');
    const IngotTitan        = Ingredient.of('gtceu:titanium_ingot');
    const IngotStainless    = Ingredient.of('gtceu:stainless_steel_ingot');
    const IngotArcGold      = Ingredient.of('#forge:ingots/arcane_gold');
    const IngotTungSteel    = Ingredient.of('gtceu:tungsten_steel_ingot');
    const IngotRhoPlatPal   = Ingredient.of('gtceu:rhodium_plated_palladium_ingot');
    const IngotDarmstadt    = Ingredient.of('gtceu:darmstadtium_ingot');
    const IngotNeutron      = Ingredient.of('gtceu:neutronium_ingot');
    const IngotNaquAlloy    = Ingredient.of('gtceu:naquadah_alloy_ingot');
    const IngotAdam         = Ingredient.of('gtceu:adamantium_ingot');
    const IngotProm         = Ingredient.of('gtceu:prometheum_ingot');
    const IngotOrich        = Ingredient.of('gtceu:orichalcum_ingot');
    const IngotVulca        = Ingredient.of('gtceu:vulcanite_ingot');
    const IngotCeleBron     = Ingredient.of('gtceu:celestialbronze_ingot');
    const IngotCeleGold     = Ingredient.of('gtceu:celestialgold_ingot');
    const GemEmber          = Ingredient.of('gtceu:ember_gem');
    const GemMana           = Ingredient.of('gtceu:mana_gem');
    const GemWissne         = Ingredient.of('gtceu:wissen_gem');
    const IngotGaia         = Ingredient.of('botania:gaia_ingot');


    //Blocks

    //Plates
    const PlateAlu =            Ingredient.of('#forge:plates/aluminium');
    const PlateCopp =           Ingredient.of('#forge:plates/copper');
    const PlateDarmstadt =      Ingredient.of('#forge:plates/darmstadtium');
    const PlateGold =           Ingredient.of('#forge:plates/gold');
    const PlateIron =           Ingredient.of('#forge:plates/iron');
    const PlatePlatinum =       Ingredient.of('#forge:plates/platinum');
    const PlateSilv =           Ingredient.of('#forge:plates/silver');
    const PlateTitan =          Ingredient.of('#forge:plates/titanium');
    const PlateNeutr =          Ingredient.of('#forge:plates/neutronium');
    const PlateElect =          Ingredient.of('#forge:plates/electrum');
    const PlateStainless =      Ingredient.of('#forge:plates/stainless_steel');
    const PlateSteel =          Ingredient.of('#forge:plates/steel');
    const PlateTungSteel =      Ingredient.of('#forge:plates/tungsten_steel');
    const PlateNaquAlloy =      Ingredient.of('#forge:plates/naquadah_alloy');
    const PlateRhoPlatPalla =   Ingredient.of('#forge:plates/rhodium_plated_palladium');
    const PlateArcGold =        Ingredient.of('#forge:plates/arcanegold');
    const PlateAdam =           Ingredient.of('#forge:plates/adamantium');
    const PlateMithril =        Ingredient.of('#forge:plates/mithril');
    const PlateOrich =          Ingredient.of('#forge:plates/orichalcum');
    const PlateVulc =           Ingredient.of('#forge:plates/vulcanite');
    const PlateManasteel =      Ingredient.of('#forge:plates/manasteel');
    const PlateEleme =          Ingredient.of('#forge:plates/elementium');
    const PlateTerrasteel =     Ingredient.of('#forge:plates/terrasteel');
    const PlateAlfsteel =       Ingredient.of('#forge:plates/alfsteel');
    const PlateCeleBron =       Ingredient.of('#forge:plates/celestialbronze');
    const PlateCeleGold =       Ingredient.of('#forge:plates/celestialgold');

    //Double Plates

    const DoublePlateSteel = Ingredient.of('gtceu:double_steel_plate');
    const DoublePlateStainless = Ingredient.of('gtceu:double_stainless_steel_plate');
    const DoublePlateAlu = Ingredient.of('gtceu:double_aluminium_plate');
    const DoublePlateTitan = Ingredient.of('gtceu:double_titanium_plate');
    const DoublePlateTungSteel = Ingredient.of('gtceu:double_tungsten_steel_plate');
    const DoublePlateNaquAlloy = Ingredient.of('gtceu:double_naquadah_alloy_plate');
    const DoublePlateRhoPlatPalla = Ingredient.of('gtceu:double_rhodium_plated_palladium_plate');
    const DoublePlateDarmstadt = Ingredient.of('gtceu:double_darmstadtium_plate');
    const DoublePlateNeutron = Ingredient.of('gtceu:double_neutronium_plate');

//Functions I use elsewhere
