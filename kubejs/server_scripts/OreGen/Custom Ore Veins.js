//priority: 

GTCEuServerEvents.oreVeins(
    event => {
        event.add(
            'kubejs:prometheum_vein',
            vein => {
                vein.layer('stone')
                vein.weight(20)
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
        
        event.add(
            'kubejs:adamantium_vein',
            vein => {
                vein.layer('deepslate')
                vein.weight(1)
                vein.clusterSize(10)
                vein.density(0.1)
                vein.heightRangeUniform(-120, -62)
                //dikeVeinGenerator generates a vertical collum from the heightRange
                //The .withBlock attribute determins which blocks or materials it generates with
                vein.dikeVeinGenerator(
                    generator => generator
                    //.withBlock(GTMaterials or Block.getBlock(), weight, fromHeight, toHeight)
                    .withBlock(GTMaterials.get('adamantium'), 1, -120, -95)
                    .withBlock(GTMaterials.Tungstate, 2, -120, -81)
                    .withBlock(GTMaterials.Ruby, 2, -93, -62)
                    .withBlock(GTMaterials.GarnetRed, 1, -101, -62)
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

        event.add(
            'kubejs:mithril_vein',
            vein => {
                vein.layer('stone')
                vein.weight(3)
                vein.clusterSize(52)
                vein.density(0.3)
                vein.heightRangeTriangle(0, 260)
                vein.classicVeinGenerator(
                    generator => generator
                    .primary(b => b.mat(GTMaterials.get('mithril')).size(6))
                    .secondary(b => b.mat(GTMaterials.Ilmenite).size(2))
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
                vein.layer('deepslate')
                vein.weight(1)
                vein.clusterSize(10)
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
                )
            }
        );
    }
)

GTCEuServerEvents.bedrockOreVeins(
    event => {
        event.add(
            'kubejs:orichalcum',
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