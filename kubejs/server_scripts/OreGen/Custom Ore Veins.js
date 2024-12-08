//priority: 

GTCEuServerEvents.oreVeins(
    event => {
        /**
         * .layeredVeinGenerator generates a huge blob that has horizontally layers of different ores
         * 
         * .layer is as it sounds, it makes a horizontal layer and spreads it out in the vein vertically,
         * the more layers you declare, the more different layers there will be
         */
        event.add(
            'kubejs:prometheum_vein',
            vein => {
                vein.layer(stone)
                vein.weight(60)
                vein.clusterSize(30)
                vein.density(0.6)
                vein.discardChanceOnAirExposure(0)
                //.heightRangeUniform(from Blockheight, to Blockheight)
                //goes from - to +
                vein.heightRangeUniform(60, 200)
                vein.layeredVeinGenerator(
                    generator => generator
                    .buildLayerPattern(
                        pattern => pattern
                        /**
                         * the .weight() determins how often it generates in the vein
                         * the .size() can have multiple numbers (1, 2, 3, ...) and determins the thickness of the layer
                         * the .mat() just determins what generates
                         */
                        .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1,2))
                        .layer(l => l.weight(2).mat(GTMaterials.get('prometheum')).size(2, 3))
                        .layer(l => l.weight(3).mat(GTMaterials.BasalticMineralSand).size(1, 4))
                    )
                )
                //This just makes surface rock to spawn for the vein
                vein.surfaceIndicatorGenerator(
                    indicator => indicator
                    .surfaceRock(GTMaterials.get('prometheum'))
                    .density(0.6)
                    .radius(4)
                )
            }
        );
        
        /**
         * .dikeVeinGenerator generates a vertical collum
         */
        
        event.add(
            'kubejs:adamantium_vein',
            vein => {
                vein.layer(deepslate)
                vein.weight(10)
                vein.clusterSize(10)
                vein.density(0.3)
                vein.heightRangeUniform(-120, -62)
                //dikeVeinGenerator generates a vertical collum from the heightRange
                //The .withBlock attribute determins which blocks or materials it generates with
                vein.dikeVeinGenerator(
                    generator => generator
                    //.withBlock(GTMaterials or Block.getBlock(), weight, fromHeight, toHeight)
                    .withBlock(GTMaterials.get('adamantium'), 2, -120, -95)
                    .withBlock(GTMaterials.Tungstate, 2, -120, -81)
                    .withBlock(GTMaterials.Ruby, 3, -93, -62)
                    .withBlock(GTMaterials.GarnetRed, 4, -101, -62)
                    .withBlock(GTMaterials.Diamond, 1, -74, -62)
                    //.withBlock(Block.getBlock('minecraft:diamond_ore'), 1, -74, -62)
                );
                vein.surfaceIndicatorGenerator(
                    indicator => indicator
                    .surfaceRock(GTMaterials.get('adamantium'))
                    .density(0.2)
                    .radius(6)
                );
            }
        );
        
        //Beispiel für das "screenshots/mithril vein.png"
        /**
         * .classicVeinGenerator is basically a two layer sandwich
         * it generates as a horizontal line and can be three layers if .between is used
         * 
         * .primary is the top layer, spawns above center of the vein
         * .secondary is the bottom layer, spawns below center of vein
         * .between is used for literally between the two
         * .sporadic generates ores throughout the whole vein
         */
        event.add(
            'kubejs:mithril_vein',
            vein => {
                vein.layer(stone)
                vein.weight(4)
                vein.clusterSize(88)
                vein.density(0.2)
                vein.heightRangeTriangle(0, 260)
                vein.classicVeinGenerator(
                    generator => generator
                    //primary declares which ore spawns above
                    .primary(b => b.mat(GTMaterials.get('mithril')).size(4))
                    //secondary declares which ore spawns below
                    .secondary(b => b.mat(GTMaterials.Ilmenite).size(2))
                    //between is to be taken literally
                    .between(b => b.mat(GTMaterials.Silver).size(3))
                    .sporadic(b => b.mat(GTMaterials.Cobaltite).size(1))
                    .sporadic(b => b.mat(GTMaterials.Platinum).size(1))
                    .sporadic(b => b.mat(GTMaterials.Palladium).size(1))
                );
                vein.surfaceIndicatorGenerator(
                    indicator => indicator
                    .surfaceRock(GTMaterials.get("mithril"))
                    .placement('surface')
                    .density(0.3)
                    .radius(8)
                )
            }
        );

        event.add(
            'kubejs:vulcanite_vein',
            vein => {
                vein.layer(deepslate)
                vein.weight(1)
                vein.clusterSize(56)
                vein.density(1)
                vein.heightRangeTriangle(-126, 85)
                vein.veinedVeinGenerator(
                    generator => generator
                    .oreBlock(GTMaterials.get('vulcanite'), 2)
                    .oreBlock(GTMaterials.Pyrite, 5)
//                    .oreBlock(Block.getBlock('xycraft_world:xychorium_ore_deepslate_red'), 3)
//                    .oreBlock(Block.getBlock('minecraft:magma_block'), 7)
                    .oreBlock(GTMaterials.Cinnabar, 1)
                    .veininessThreshold(0.1)
                    .maxRichnessThreshold(0.175)
                    .minRichness(0.3)
                    .maxRichness(0.8)
                    .edgeRoundoffBegin(2)
                    .maxEdgeRoundoff(0.1)
                );
                vein.surfaceIndicatorGenerator(
                    indicator => indicator
                    .surfaceRock(GTMaterials.get('vulcanite'))
                    .placement('below')
                    .density(1.0)
                    .radius(20)
                );
            }
        );

        event.add(
            'kubejs:deep_orichalcum_vein',
            vein => {
                vein.layer(deepslate)
                vein.weight(1)
                vein.clusterSize(26)
                vein.density(0.186)
                vein.heightRangeUniform(-120, -62)
                //dikeVeinGenerator generates a vertical collum from the heightRange
                //The .withBlock attribute determins which blocks or materials it generates with
                vein.dikeVeinGenerator(
                    generator => generator
                    //.withBlock(GTMaterials or Block.getBlock(), weight, fromHeight, toHeight)
                    .withBlock(GTMaterials.get('orichalcum'), 2, -120, -95)
                    .withBlock(GTMaterials.get('rosequartz'), 2, -120, -81)
                    .withBlock(GTMaterials.Ruby, 3, -93, -62)
                    .withBlock(GTMaterials.GarnetRed, 4, -101, -62)
                    .withBlock(GTMaterials.Diamond, 1, -74, -62)
                    //.withBlock(Block.getBlock('minecraft:diamond_ore'), 1, -74, -62)
                );
            }
        )

    }
)
/*
GTCEuServerEvents.bedrockOreVeins(
    event => {
        event.add(
            'kubejs:bedrock_orichalcum',
            vein => {
                vein.weight(100)
                    .size(3)
                    .yield(2,20)
                    .material(GTMaterials.get('orichalcum'), 10)
                    .dimensions('twilightforest:twilight_forest_type')
            }
        );
    }
)
*/