LootJS.modifiers(e => {

    // From Mo's Mods 2 (https://github.com/mosharky/Mos-Mods-2/blob/main/kubejs/server_scripts/loot_tables.js)
    // silk-touchable budding amethyst
    e.addBlockLootModifier('minecraft:budding_amethyst')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
            p.addLoot('minecraft:budding_amethyst')
        })
        .pool(p => {
            p.not(not => { not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')) })
            p.addLoot('minecraft:amethyst_block')
        })

    // better end loot
    e.addLootTableModifier('minecraft:chests/end_city_treasure').addLoot('betterend:ender_dust').randomChance(0.5).addAlternativesLoot('botania:mana_pearl').randomChance(0.5)
    e.addLootTableModifier('betterend:chests/end_village_bonus_loot').addLoot('betterend:ender_dust').randomChance(0.5).addAlternativesLoot('botania:mana_pearl').randomChance(0.5)
    e.addLootTableModifier('betterend:chests/end_village_loot').addLoot('betterend:ender_dust').randomChance(0.5).addAlternativesLoot('botania:mana_pearl').randomChance(0.5)
    e.addLootTableModifier('betterend:chests/end_village_template_loot').addLoot('betterend:ender_dust').randomChance(0.5).addAlternativesLoot('botania:mana_pearl').randomChance(0.5)
    e.addLootTableModifier('minecraft:chests/end_city_treasure').randomChance(0.077).addLoot("betterend:amber_gem");
})