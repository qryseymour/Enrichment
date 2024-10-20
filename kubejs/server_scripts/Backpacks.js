ServerEvents.recipes(event => {
    event.shaped(
        Item.of('travelersbackpack:standard', 1),
        [
          'CBC',
          'CAC',
          'CBC'
        ],
        {
          A: 'travelersbackpack:villager',
          B: '#c:iron_ingots',
          C: '#c:glass_blocks'
        }
      ).id("travelersbackpack:standard")
    event.remove({ id: "travelersbackpack:iron_tier_upgrade" })
    event.remove({ id: "travelersbackpack:gold_tier_upgrade" })
    event.remove({ id: "travelersbackpack:diamond_tier_upgrade" })
    event.remove({ id: "travelersbackpack:netherite_tier_upgrade" })
    event.recipes.botania.runic_altar("travelersbackpack:netherite_tier_upgrade", ["eldritch_mobs:soothing_lantern", "minecraft:netherite_ingot", "minecraft:echo_shard", "minecraft:echo_shard", "minecraft:echo_shard", "minecraft:echo_shard"], 13333)
    event.replaceInput(
        { input: 'travelersbackpack:standard' }, // Arg 1: the filter
        'travelersbackpack:standard',            // Arg 2: the item to replace
        '#trinkets:chest/back'         // Arg 3: the item to replace it with
      )
    event.shaped(
        Item.of('travelersbackpack:crafting_upgrade', 1),
        [
          'BBB',
          'ACA',
          'BBB'
        ],
        {
          A: 'minecraft:crafting_table',
          B: 'minecraft:leather',
          C: 'minecraft:chest'
        }
      ).id("travelersbackpack:crafting_upgrade")
})

MoreJSEvents.villagerTrades((event) => {
    event.addTrade("minecraft:librarian", 5, Item.of("minecraft:diamond_block", 10), "travelersbackpack:iron_tier_upgrade")
  });

LootJS.modifiers(event => {
    event.addEntityLootModifier("minecraft:ravager")
         .randomChance(0.33)
    .addLoot("travelersbackpack:gold_tier_upgrade");
  
    event.addEntityLootModifier("majruszsdifficulty:tank")
         .randomChance(0.33)
    .addLoot("travelersbackpack:gold_tier_upgrade");
  
    event.addEntityLootModifier("mutantmonsters:mutant_snow_golem")
         .randomChance(0.33)
    .addLoot("travelersbackpack:diamond_tier_upgrade");
  
})