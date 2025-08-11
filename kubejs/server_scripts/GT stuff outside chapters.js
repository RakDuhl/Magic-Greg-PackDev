ServerEvents.recipes(
    event => {
        function kinetic_generator(inputStress, inputRPM, optionalLube) {
            const stressMultipliers = {
                128: 4,
                256: 6,
                512: 8,
                1024: 10,
                2048: 12,
                4096: 14,
                8192: 16,
                16384: 18,
                32768: 20,
                65536: 22
            };

            const validRPMs = [8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

            if (!(inputStress in stressMultipliers)) {
                console.error(`Invalid inputStress value: ${inputStress}`);
                return;
            }

            if (!validRPMs.includes(inputRPM)) {
                console.error(`Invalid inputRPM value: ${inputRPM}`);
                return;
            }

            let multiplier = stressMultipliers[inputStress];
            let outputEU = multiplier * inputRPM;

            if (optionalLube) {
                switch (optionalLube.toLowerCase()) {
                    case 'water':
                        outputEU *= 1.25;
                        break;
                    case 'distilled water':
                        outputEU *= 1.60;
                        break;
                    case 'lubricant':
                        outputEU *= 2.00;
                        break;
                    default:
                        console.warn(`Invalid optionalLube value: ${optionalLube}`);
                }
            }

            outputEU = Math.ceil(outputEU);

            let recipeName = huge_kinetic_alternator_stress${inputStress}_rpm${inputRPM};
            if (optionalLube) {
                recipeName += _lube_${optionalLube.replace(" ", "_")};
            }

            let recipe = event.recipes.gtceu.huge_kinetic_alternator(recipeName)
                .inputStress(inputStress)
                .rpm(inputRPM)
                .EUt(outputEU);

            if (optionalLube) {
                recipe.inputFluids(optionalLube);
            }

            console.log(`Generated recipe: name=${recipeName}, inputStress=${inputStress}, inputRPM=${inputRPM}, outputEU=${outputEU}, optionalLube=${optionalLube || 'none'}`);
        }

        const stressMultipliers = {
            128:4,
            256:6,
            512:8,
            1024:10,
            2048:12,
            4096:14,
            8192:16,
            16384:18,
            32768:20,
            65536:22
        };

        const validRPMs = [8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
        const lubes = [null, 'water', 'distilled water', 'lubricant'];

        for (const [stressValue, mult] of Object.entries(stressMultipliers)) {
            const stress = Number(stressValue);
            for (const rpm of validRPMs) {
                for (const lube of lubes) {
                    kinetic_generator(stress, rpm, lube);
                }
            }
        }

        event.recipes.gtceu.huge_kinetic_alternator('slowspeed')
            .inputStress(128)
            .rpm(64)
            .EUt(-256);

        event.recipes.gtceu.huge_kinetic_alternator('medspeed')
            .inputStress(512)
            .rpm(512)
            .EUt(-4096);

        event.recipes.gtceu.huge_kinetic_alternator('highspeed')
            .inputStress(4096)
            .rpm(2048)
            .EUt(-28672);
    }
)