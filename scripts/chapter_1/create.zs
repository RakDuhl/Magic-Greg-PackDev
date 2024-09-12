#priority 90


#Crafting Table
craftingTable.addShaped("ec_crafting_table", <item:extendedcrafting:basic_table>, [
    [<tag:items:minecraft:wooden_pressure_plates>],
    [<tag:items:minecraft:logs>]
]);

//Create
    //small Water Wheel
    craftingTable.addShaped("create_water_wheel", <item:create:water_wheel>, [
        [<item:minecraft:air> , <tag:items:forge:plates/treated_wood>, <item:minecraft:air>],
        [<tag:items:forge:plates/treated_wood>, <item:create:andesite_casing>, <tag:items:forge:plates/treated_wood>],
        [<item:minecraft:air> , <tag:items:forge:plates/treated_wood>, <item:minecraft:air>]
    ]);
    //Large water wheel
    craftingTable.addShaped("create_large_water_wheel", <item:create:large_water_wheel>, [
        [<tag:items:forge:plates/treated_wood>, <tag:items:forge:frames/treated_wood>, <tag:items:forge:plates/treated_wood>],
        [<tag:items:forge:frames/treated_wood>, <item:create:water_wheel>, <tag:items:forge:frames/treated_wood>],
        [<tag:items:forge:plates/treated_wood>, <tag:items:forge:frames/treated_wood>, <tag:items:forge:plates/treated_wood>]
    ]);

    //Millstone
    craftingTable.addShaped("create_millstone", <item:create:millstone>, [
    	[tools.Hammer, <item:create:cogwheel>, <item:minecraft:air>], 
    	[<item:minecraft:stone>, <item:minecraft:smooth_stone_slab>, <item:minecraft:stone>], 
    	[<item:minecraft:stone>, <item:minecraft:stone>, <item:minecraft:stone>]
    ]);

    //Mechanical Pump
    craftingTable.addShaped("520ac2ee-49af-4a20-9dca-ec64dac7132d", <item:create:mechanical_pump>, [
    	[plates.Fe, <item:create:cogwheel>, plates.Fe], 
    	[<item:gtceu:copper_normal_fluid_pipe>, <item:gtceu:iron_rotor>, <item:gtceu:copper_normal_fluid_pipe>], 
    	[tools.Hammer, plates.Fe, tools.Wrench]
    ]);

    //Mechanical Fan
    craftingTable.addShaped("4c92a555-d0ff-4a5e-83ca-c1c9cc600ca3", <item:create:encased_fan>, [
    	[<item:minecraft:air>, <item:railways:smokestack_diesel>, <item:minecraft:air>], 
    	[tools.Mallet, <item:create:andesite_casing>, tools.Wrench], 
    	[<item:minecraft:air>, <item:create:shaft>, <item:minecraft:air>]
    ]);

    //weighted ejector
    craftingTable.addShaped("1147ff61-e229-4eb4-aefd-e9216c4483e8", <item:create:weighted_ejector>, [
    	[plates.Fe, plates.Fe, plates.Fe], 
    	[tools.Hammer, <item:gtceu:iron_spring>, tools.Wrench], 
    	[<item:minecraft:air>, <item:create:andesite_casing>, <item:create:shaft>]
    ]);

    //wooden Bracket
    craftingTable.addShaped("148854a4-e1b0-439e-b46b-3a8304fa5945", <item:create:wooden_bracket>, [
    	[tools.Mallet, <tag:items:minecraft:wooden_slabs>, tools.Wrench], 
    	[<item:gtceu:iron_rod>, <item:gtceu:iron_ring>, <item:gtceu:iron_rod>], 
    	[<tag:items:minecraft:wooden_slabs>, <tag:items:minecraft:planks>, <tag:items:minecraft:wooden_slabs>]
    ]);

    //Mechanical Drill
    craftingTable.addShaped("517f63a5-d75b-45a1-9bd2-6a78e6fb8c76", <item:create:mechanical_drill>, [
    	[<item:minecraft:air>, <item:thermal:drill_head>, <item:minecraft:air>], 
    	[tools.Hammer, <item:create:andesite_casing>, tools.Wrench], 
    	[<item:minecraft:air>, <item:create:shaft>, <item:minecraft:air>]
    ]);

    //Blaze Cage
    craftingTable.addShaped("78fe7338-547c-4413-afca-9b120a0414c5", <item:create:empty_blaze_burner>, [
    	[<item:minecraft:iron_bars>, <item:minecraft:air>, <item:minecraft:iron_bars>], 
    	[<item:minecraft:iron_bars>, tools.Hammer, <item:minecraft:iron_bars>], 
    	[<item:minecraft:iron_ingot>, <item:minecraft:netherrack>, <item:minecraft:iron_ingot>]
    ]);

    //Create Pipe
    craftingTable.addShapeless("023c6f03-0aab-4a70-84da-8b8b1564979c", <item:create:fluid_pipe>, 
    	[<item:gtceu:copper_normal_fluid_pipe>]
    );

    //Fluid Filter
    craftingTable.addShaped("062baf17-886b-4823-97ea-4451162465d0", <item:create:smart_fluid_pipe>, [
    	[tools.Hammer, <item:create:filter>, tools.Wrench], 
    	[<item:gtceu:copper_normal_fluid_pipe>, <item:create:fluid_valve>, <item:gtceu:copper_normal_fluid_pipe>], 
    	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
    ]);

    //Cart Assembler
    craftingTable.addShaped("b9bce4b8-4b5c-4c65-82b5-76c4a75c3fc6", <item:create:cart_assembler>, [
    	[<item:minecraft:iron_ingot>, <item:create:gantry_carriage>, <item:minecraft:iron_ingot>], 
    	[<item:create:andesite_alloy>, <tag:items:gtceu:circuits/ulv>, <item:create:andesite_alloy>], 
    	[<item:create:andesite_alloy>, tools.Wrench, <item:create:andesite_alloy>]
    ]);

    //Press
    craftingTable.addShaped("fd454e0c-75e6-4df4-abe4-f38ec36dd6eb", <item:create:mechanical_press>, [
    	[<item:minecraft:air>, <item:create:shaft>, <item:minecraft:air>], 
    	[tools.Mallet, <item:create:andesite_casing>, tools.Wrench], 
    	[<item:create:andesite_alloy>, <item:botania:manasteel_block>, <item:create:andesite_alloy>]
    ]);

    //Mixer
    craftingTable.addShaped("3ea01d8b-130a-4d9f-9122-eef3eb07ba40", <item:create:mechanical_mixer>, [
    	[<item:minecraft:air>, <item:create:cogwheel>, <item:minecraft:air>], 
    	[tools.Mallet, <item:create:andesite_casing>, tools.Wrench], 
    	[<item:minecraft:air>, <item:create:whisk>, <item:minecraft:air>]
    ]);

    //Create Cauldron
    craftingTable.addShaped("0008730b-6c61-42fc-8e41-f50d83c38b20", <item:create:basin>, [
    	[<item:create:andesite_alloy>, <item:minecraft:cauldron>, <item:create:andesite_alloy>], 
    	[<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>]
    ]);

    //Smart Chute
    craftingTable.addShaped("9c4ac0be-9cbd-4e9e-acf2-45613273a289", <item:create:smart_chute>, [
    	[<item:create:brass_sheet>, <item:create:electron_tube>, <item:create:brass_sheet>], 
    	[<item:create:brass_sheet>, <item:create:chute>, <item:create:brass_sheet>], 
    	[<item:minecraft:air>, tools.Wrench, <item:minecraft:air>]
    ]);

    //Tank
    craftingTable.addShaped("8e262972-c7b4-4602-bc0e-ae1a52e396de", <item:create:fluid_tank>, [
    	[<item:create:copper_sheet>, <item:minecraft:glass_pane>, <item:create:copper_sheet>], 
    	[<item:minecraft:glass_pane>, tools.Hammer, <item:minecraft:glass_pane>], 
    	[<item:create:copper_sheet>, <item:minecraft:glass_pane>, <item:create:copper_sheet>]
    ]);

    //Metal Bracket
    craftingTable.addShaped("584535b5-52c1-47a1-95a6-ea337d819e92", <item:create:metal_bracket>, [
    	[tools.Hammer, <item:thermal:iron_plate>, tools.Wrench], 
    	[<item:gtceu:iron_rod>, <item:gtceu:iron_ring>, <item:gtceu:iron_rod>], 
    	[<item:thermal:iron_plate>, <item:minecraft:iron_ingot>, <item:thermal:iron_plate>]
    ]);

    //Girder
    craftingTable.addShaped("62312082-f7f1-40c2-aa0f-f7309d180e99", <item:create:metal_girder>, [
    	[<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>], 
    	[<item:gtceu:iron_plate>, <item:gtceu:iron_plate>, <item:gtceu:iron_plate>], 
    	[tools.Hammer, <item:create:andesite_alloy>, tools.Wrench]
    ]);

    //Electron Tube
    craftingTable.addShaped("59c5d09e-eccc-45fb-85a1-e737843de709", <item:create:metal_girder>, [
    	[tools.Mallet, <item:create:polished_rose_quartz>, tools.Wrench], 
    	[plates.Fe, <item:gtceu:resin_printed_circuit_board>, plates.Fe], 
    	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
    ]);

    //Steam Engine
    craftingTable.addShaped("d4f301ca-764d-4c8e-864e-4b740015ee15", <item:create:steam_engine>, [
    	[<item:minecraft:air>, <item:create:hand_crank>, <item:minecraft:air>], 
    	[tools.Hammer, <item:minecraft:piston>, tools.Wrench], 
    	[<item:minecraft:air>, <item:create:fluid_tank>, <item:minecraft:air>]
    ]);

    //Mechanical Saw
    craftingTable.addShaped("de8947e0-c91a-479d-970d-ac8ee0c1fda4", <item:create:mechanical_saw>, [
    	[tools.Hammer, <item:gtceu:iron_buzz_saw_blade>, tools.Wrench], 
    	[<item:create:shaft>, <item:create:andesite_casing>, <item:create:shaft>], 
    	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
    ]);

    //Sequenced Gearshift
    craftingTable.addShaped("75f0e977-243b-4471-9119-921e289abd7d", <item:create:sequenced_gearshift>, [
    	[tools.Hammer, <item:gtceu:basic_electronic_circuit>, tools.Wrench], 
    	[<item:create:shaft>, <item:create:brass_casing>, <item:create:shaft>], 
    	[<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>]
    ]);

    //Rot Speed Controller
    craftingTable.addShaped("59334160-46da-45bb-9cd9-eb9dba81fafd", <item:create:rotation_speed_controller>, [
    	[<item:gtceu:small_iron_gear>, <item:create:precision_mechanism>, <item:create:large_cogwheel>], 
    	[tools.Hammer, <item:create:brass_casing>, tools.Wrench], 
    	[<item:create:cogwheel>, <item:create:shaft>, <item:gtceu:iron_gear>]
    ]);

    //mechanical arm
    craftingTable.addShaped("5ce3f07e-b04e-4cf3-93e0-26fe0ce48ca8", <item:create:mechanical_arm>, [
    	[<item:minecraft:air>, <item:gtceu:lv_robot_arm>, <item:minecraft:air>], 
    	[tools.Hammer, <item:create:large_cogwheel>, tools.Wrench], 
    	[<item:minecraft:air>, <item:create:brass_casing>, <item:minecraft:air>]
    ]);