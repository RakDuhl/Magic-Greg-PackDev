GTCEuServerEvents.oreVeins(
    event => {

        //Rarity constants
        let verycommon  = 31
        let common      = 27
        let uncommon    = 23
        let rare        = 17
        let veryRare    = 13
        let epic        = 11
        let exotic      = 7
        let legendary   = 5
        let mythical    = 3
        let divine      = 1


          //////////////////////
         // ***** Stone *****//
        //////////////////////
        event.modify(
            "gtceu:mineral_sand_vein",
            vein => {
                vein.weight(common)
                
            }
        )
        event.modify(
            "gtceu:apatite_vein",
            vein => {
                vein.weight(rare)
                vein.heightRangeUniform(32, 130)
                
            }
        )
        event.modify(
            "gtceu:cassiterite_vein",
            vein => {
                vein.weight(common)
                vein.heightRangeUniform(24, 190)
                
            }
        )
        event.modify(
            "gtceu:coal_vein",
            vein => {
                vein.weight(verycommon)
                vein.heightRangeUniform(16, 280)
                
            }
        )
        event.modify(
            "gtceu:copper_tin_vein",
            vein => {
                vein.weight(uncommon)
                vein.heightRangeUniform(-10, 200)
                
            }
        )
        event.modify(
            "gtceu:galena_vein",
            vein => {
                vein.weight(rare)
                vein.heightRangeUniform(-35, 165)
                
            }
        )
        event.modify(
            "gtceu:garnet_tin_vein",
            vein => {
                vein.weight(common)
                vein.heightRangeUniform(20,90)
                
            }
        )
        event.modify(
            "gtceu:garnet_vein",
            vein => {
                vein.weight(veryRare)
                vein.heightRangeUniform(-20, 100)
                vein.dikeVeinGenerator(generator => generator
                    .withBlock(GTMaterials.GarnetRed, 3, -20, 100)
                    .withBlock(GTMaterials.GarnetYellow, 2, -20, 100)
                    .withBlock(GTMaterials.Amethyst, 2, -20, 42)
                    .withBlock(GTMaterials.Opal, 1, 18, 64)
                )
            }
        )

        event.modify(
            "gtceu:iron_vein",
            vein => {
                vein.weight(verycommon)
                vein.heightRangeUniform(-10, 180)
                
            }
        )
        event.modify(
            "gtceu:lubricant_vein",
            vein => {
                vein.weight(rare)
                
            }
        )
        event.modify(
            "gtceu:magnetite_vein_ow",
            vein => {
                vein.weight(common)
                vein.heightRangeUniform(10, 130)
                
            }
        )
        event.modify(
            "gtceu:nickel_vein",
            vein => {
                vein.weight(rare)
                vein.heightRangeUniform(-10, 200)
                
            }
        )
        event.modify(
            "gtceu:salts_vein",
            vein => {
                vein.weight(uncommon)
                vein.heightRangeUniform(32, 280)
                
            }
        )
        event.modify(
            "gtceu:oilsands_vein",
            vein => {
                vein.weight(rare)
                vein.heightRangeUniform(30, 350)
                
            }
        )

          //////////////////////////
         // ***** Deepslate *****//
        //////////////////////////
        event.modify(
            "gtceu:diamond_vein",
            vein => {
                vein.weight(epic)
                vein.heightRangeUniform(-105, -30)
                
            }
        )
        event.modify(
            "gtceu:mica_vein",
            vein => {
                vein.weight(exotic)
                vein.heightRangeUniform(-64, -10)
                
            }
        )
        event.modify(
            "gtceu:redstone_vein_ow",
            vein => {
                vein.weight(uncommon)
                vein.heightRangeUniform(-85, -10)
                
            }
        )
        event.modify(
            "gtceu:sapphire_vein",
            vein => {
                vein.weight(rare)
                vein.heightRangeUniform(-90, -25)
                
            }
        )
        event.modify(
            "gtceu:lapis_vein",
            vein => {
                vein.weight(rare)
                
            }
        )
        event.modify(
            "gtceu:copper_vein",
            vein => {
                vein.weight(common)
                
            }
        )
        event.modify(
            "gtceu:manganese_vein_ow",
            vein => {
                vein.weight(epic)
                
            }
        )
        event.modify(
            "gtceu:olivine_vein",
            vein => {
                vein.weight(epic)
                
            }
        )

          ////////////////////////////
         // ***** Nether Ores *****//
        ////////////////////////////
        event.modify(
            "gtceu:banded_iron_vein",
            vein => {
                vein.weight(rare)
                
            }
        )
        event.modify(
            "gtceu:beryllium_vein",
            vein => {
                vein.weight(veryRare)
                
            }
        )
        event.modify(
            "gtceu:certus_quartz",
            vein => {
                vein.weight(rare)
                
            }
        )
        event.modify(
            "gtceu:manganese_vein",
            vein => {
                vein.weight(epic)
                
            }
        )
        event.modify(
            "gtceu:molybdenum_vein",
            vein => {
                vein.weight(exotic)
                
            }
        )
        event.modify(
            "gtceu:monazite_vein",
            vein => {
                vein.weight(rare)
                
            }
        )
        event.modify(
            "gtceu:nether_quartz_vein",
            vein => {
                vein.weight(verycommon)
                
            }
        )
        event.modify(
            "gtceu:redstone_vein",
            vein => {
                vein.weight(common)
                
            }
        )
        event.modify(
            "gtceu:saltpeter_vein",
            vein => {
                vein.weight(uncommon)
                
            }
        )
        event.modify(
            "gtceu:sulfur_vein",
            vein => {
                vein.weight(verycommon)
                
            }
        )
        event.modify(
            "gtceu:tetrahedrite_vein",
            vein => {
                vein.weight(common)
                
            }
        )
        event.modify(
            "gtceu:topaz_vein",
            vein => {
                vein.weight(common)
                
            }
        )
        
          /////////////////////////
         // ***** End Ores *****//
        /////////////////////////
        event.modify(
            "gtceu:bauxite_vein_end",
            vein => {
                vein.weight(uncommon)
                
            }
        )
        event.modify(
            "gtceu:magnetite_vein_end",
            vein => {
                vein.weight(uncommon)
                
            }
        )
        event.modify(
            "gtceu:naquadah_vein",
            vein => {
                vein.weight(exotic)
                
            }
        )
        event.modify(
            "gtceu:pitchblende_vein_end",
            vein => {
                vein.weight(veryRare)
                
            }
        )
        event.modify(
            "gtceu:scheelite_vein",
            vein => {
                vein.weight(epic)
                
            }
        )
        event.modify(
            "gtceu:sheldonite_vein",
            vein => {
                vein.weight(exotic)
                
            }
        )
    }
)