GTCEuServerEvents.oreVeins(
    event => {

        //////////////////////
        // ***** Stone *****//
        //////////////////////
        event.modify(
            "gtceu:apatite_vein",
            vein => {
                vein.heightRangeUniform(32, 130)
                
            }
        )
        event.modify(
            "gtceu:cassiterite_vein",
            vein => {
                vein.heightRangeUniform(24, 190)
                
            }
        )
        event.modify(
            "gtceu:coal_vein",
            vein => {
                vein.heightRangeUniform(16, 280)
                
            }
        )
        event.modify(
            "gtceu:copper_tin_vein",
            vein => {
                vein.heightRangeUniform(-10, 200)
                
            }
        )
        event.modify(
            "gtceu:garnet_tin_vein",
            vein => {
                vein.heightRangeUniform(-15, 85)
                
            }
        )
        event.modify(
            "gtceu:galena_vein",
            vein => {
                vein.heightRangeUniform(-35, 165)
                
            }
        )
        event.modify(
            "gtceu:garnet_tin_vein",
            vein => {
                vein.heightRangeUniform(30,90)
                
            }
        )
        event.modify(
            "gtceu:garnet_vein",
            vein => {
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
                vein.heightRangeUniform(-10, 180)
                
            }
        )
        event.modify(
            "gtceu:lubricant_vein",
            vein => {
                
            }
        )
        event.modify(
            "gtceu:magnetite_vein_ow",
            vein => {
                vein.heightRangeUniform(10, 130)
                
            }
        )
        event.modify(
            "gtceu:nickel_vein",
            vein => {
                vein.heightRangeUniform(-10, 200)
                
            }
        )
        event.modify(
            "gtceu:salts_vein",
            vein => {
                vein.heightRangeUniform(32, 280)
                
            }
        )
        event.modify(
            "gtceu:oilsands_vein",
            vein => {
                vein.heightRangeUniform(30, 350)
                
            }
        )

        //////////////////////////
        // ***** Deepslate *****//
        //////////////////////////
        event.modify(
            "gtceu:diamond_vein",
            vein => {
                vein.heightRangeUniform(-105, -30)
                
            }
        )
        event.modify(
            "gtceu:mica_vein",
            vein => {
                vein.heightRangeUniform(-64, -10)
                
            }
        )
        event.modify(
            "gtceu:redstone_vein_ow",
            vein => {
                vein.heightRangeUniform(-85, -10)
                
            }
        )
        event.modify(
            "gtceu:sapphire_vein",
            vein => {
                vein.heightRangeUniform(-90, -25)
                
            }
        )
    }
)