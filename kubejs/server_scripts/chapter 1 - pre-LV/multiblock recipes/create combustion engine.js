/*
function createCombustionEngineRecipes(event) {
    for (const [itemId, burnTime] of Object.entries(global.burnableItems)) {
        // Exponential scaling for stress output
        let stress = Math.max(16, Math.min(16777216, Math.pow(2, Math.log2(burnTime) / 2 + 4)));
      
    // For extreme burn times, use the full stress range
    const maxStress = 16777216;
    const extremeBurnTime = Math.pow(2, 31);
    if (burnTime >= extremeBurnTime) {
        stress = maxStress;
    }
  
    // Logarithmic scaling for duration, capped at 24 hours (1728000 ticks)
    const duration = Math.min(1728000, Math.max(100, Math.floor(Math.log2(burnTime) * 100)));
      
    event.recipes.gtceu.create_combustion_engine(itemId)
        .itemInputs(itemId)
        .duration(duration)
        .outputStress(stress)
        .rpm(64);
    }
}
  
// Register the recipes
ServerEvents.recipes(
    event => {
        createCombustionEngineRecipes(event);
    }
);
*/