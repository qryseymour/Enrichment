ServerEvents.recipes(event => {

    event.recipes.botania.petal_apothecary("botania:white_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:white_dye"])

    event.recipes.botania.petal_apothecary("botania:orange_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:orange_dye"])

    event.recipes.botania.petal_apothecary("botania:magenta_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:magenta_dye"])

    event.recipes.botania.petal_apothecary("botania:light_blue_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:light_blue_dye"])

    event.recipes.botania.petal_apothecary("botania:yellow_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:yellow_dye"])

    event.recipes.botania.petal_apothecary("botania:lime_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:lime_dye"])

    event.recipes.botania.petal_apothecary("botania:pink_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:pink_dye"])

    event.recipes.botania.petal_apothecary("botania:gray_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:gray_dye"])

    event.recipes.botania.petal_apothecary("botania:light_gray_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:light_gray_dye"])

    event.recipes.botania.petal_apothecary("botania:cyan_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:cyan_dye"])

    event.recipes.botania.petal_apothecary("botania:purple_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:purple_dye"])

    event.recipes.botania.petal_apothecary("botania:blue_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:blue_dye"])

    event.recipes.botania.petal_apothecary("botania:brown_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:brown_dye"])

    event.recipes.botania.petal_apothecary("botania:green_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:green_dye"])

    event.recipes.botania.petal_apothecary("botania:red_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:red_dye"])

    event.recipes.botania.petal_apothecary("botania:black_petal", ["minecraft:gold_ingot", "minecraft:emerald", "minecraft:black_dye"])

    event.shaped(
        Item.of('botania:enchanted_soil', 1),
        [
          'BBB',
          'BAB',
          'BBB'
        ],
        {
          A: 'minecraft:grass_block',
          B: 'minecraft:diamond'
        }
  ).id("enrichment:enchanted_soil")
  
    event.shaped(
        Item.of('botania:rainbow_rod', 1),
        [
          ' CB',
          'DAC',
          'AE '
        ],
        {
          A: 'botania:elementium_ingot',
          B: 'botania:dragonstone',
          C: 'botania:pixie_dust',
          D: 'xtraarrows:diamond_freezing_arrow',
          E: 'minecraft:globe_banner_pattern'
        }
    ).id("botania:rainbow_rod")
    
    event.shaped(
        Item.of('botania:gravity_rod', 1),
        [
          ' AB',
          'CAA',
          'A  '
        ],
        {
          A: 'botania:livingwood_twig',
          B: 'botania:dragonstone',
          C: 'majruszsdifficulty:enderium_shard_locator'
        }
    ).id("botania:gravity_rod")
    
    event.shaped(
        Item.of('botania:terra_pick', 1),
        [
          'CBD',
          'EIF',
          'GAH'
        ],
        {
          A: 'botania:mana_mirror',
          B: 'botania:mana_ring_greater',
          C: 'majruszsdifficulty:enderium_ingot',
          D: 'betterend:thallasium_ingot',
          E: 'botania:gaia_ingot',
          F: 'mythicmobs:bronze_ingot',
          G: 'botania:elementium_ingot',
          H: 'plentyofarmors:stardusite_ingot',
          I: 'botania:elementium_pickaxe'
        }
    ).id("botania:terra_pick")
    
    event.shaped(
        Item.of('botania:terra_axe', 1),
        [
          'CDB',
          'EIF',
          'GAH'
        ],
        {
          A: 'botania:mana_mirror',
          B: 'betternether:cincinnasite_lantern_small',
          C: 'majruszsdifficulty:enderium_ingot',
          D: 'betterend:thallasium_ingot',
          E: 'botania:gaia_ingot',
          F: 'mythicmobs:bronze_ingot',
          G: 'botania:elementium_ingot',
          H: 'plentyofarmors:stardusite_ingot',
          I: 'botania:elementium_axe'
        }
    ).id("botania:terra_axe")
    
    event.shaped(
        Item.of('botania:terra_sword', 1),
        [
          'CBD',
          'EBF',
          'GAH'
        ],
        {
          A: 'botania:livingwood_twig',
          B: 'botania:terrasteel_ingot',
          C: 'botania:elementium_sword',
          D: 'betternether:nether_ruby_sword',
          E: 'minecraft:netherite_sword',
          F: 'majruszsdifficulty:wither_sword',
          G: 'majruszsdifficulty:evoker_fang_scroll',
          H: 'majruszsdifficulty:soul_jar'
        }
    ).id("botania:terra_sword")
    
    event.shaped(
        Item.of('botania:star_sword', 1),
        [
          '  D',
          'BC ',
          'AB '
        ],
        {
          A: 'minecraft:elytra',
          B: 'botania:ender_air_bottle',
          C: 'botania:dragonstone',
          D: 'botania:elementium_ingot'
        }
    ).id("botania:star_sword")
    
    event.shaped(
        Item.of('botania:thunder_sword', 1),
        [
          '  D',
          'BC ',
          'AB '
        ],
        {
          A: 'minecraft:wither_skeleton_skull',
          B: 'botania:ender_air_bottle',
          C: 'botania:mana_diamond',
          D: 'botania:elementium_ingot'
        }
    ).id("botania:thunder_sword")
    
    event.shaped(
        Item.of('botania:water_ring', 1),
        [
          'BAD',
          'ACA',
          'EAF'
        ],
        {
          A: 'botania:manasteel_ingot',
          B: 'botania:rune_water',
          C: 'minecraft:heart_of_the_sea',
          D: 'minecraft:pufferfish',
          E: 'minecraft:cod',
          F: 'minecraft:trident'
        }
    ).id("botania:water_ring")
    
    event.shaped(
        Item.of('botania:dodge_ring', 1),
        [
          'CA ',
          'ADA',
          ' AB'
        ],
        {
          A: 'botania:manasteel_ingot',
          B: 'botania:rune_air',
          C: 'minecraft:emerald',
          D: 'minecraft:wither_skeleton_skull'
        }
    ).id("botania:dodge_ring")
    
    event.shaped(
        Item.of('botania:mining_ring', 1),
        [
          'BAC',
          'ADA',
          ' A '
        ],
        {
          A: 'botania:manasteel_ingot',
          B: 'botania:rune_earth',
          C: 'minecraft:golden_pickaxe',
          D: 'beachparty:rubber_ring_axolotl'
        }
    ).id("botania:mining_ring")
    
    event.shaped(
        Item.of('botania:holy_cloak', 1),
        [
          'DBD',
          'CDC',
          'CAC'
        ],
        {
          A: 'botania:life_essence',
          B: 'mimic:mimic_key',
          C: 'minecraft:glowstone_dust',
          D: 'minecraft:white_wool'
        }
    ).id("botania:holy_cloak")
    
    event.shaped(
        Item.of('botania:balance_cloak', 1),
        [
          'DBD',
          'CDC',
          'CAC'
        ],
        {
          A: 'botania:life_essence',
          B: 'majruszsdifficulty:sonic_boom_scroll',
          C: 'minecraft:emerald',
          D: 'minecraft:light_gray_wool'
        }
    ).id("botania:balance_cloak")
    
    event.shaped(
        Item.of('botania:unholy_cloak', 1),
        [
          'DBD',
          'CDC',
          'CAC'
        ],
        {
          A: 'botania:life_essence',
          B: 'mimic:mimic_key',
          C: 'minecraft:redstone',
          D: 'minecraft:black_wool'
        }
    ).id("botania:unholy_cloak")
    
    event.shaped(
        Item.of('botania:invisibility_cloak', 1),
        [
          'CDC',
          'BEB',
          'BAB'
        ],
        {
          A: 'botania:mana_pearl',
          B: 'botania:mana_glass',
          C: 'minecraft:prismarine_crystals',
          D: 'minecraft:white_wool',
          E: 'mutantmonsters:mutant_skeleton_rib_cage'
        }
    ).id("botania:invisibility_cloak")
    
    event.shaped(
        Item.of('botania:super_lava_pendant', 1),
        [
          'BEB',
          'BCB',
          'DAD'
        ],
        {
          A: 'botania:life_essence',
          B: 'minecraft:blaze_rod',
          C: 'botania:lava_pendant',
          D: 'minecraft:nether_brick',
          E: 'minecraft:wither_skeleton_skull'
        }
    ).id("botania:super_lava_pendant")
    
    event.shaped(
        Item.of('botania:super_cloud_pendant', 1),
        [
          'BEB',
          'BCB',
          'DAD'
        ],
        {
          A: 'botania:life_essence',
          B: 'minecraft:ghast_tear',
          C: 'botania:cloud_pendant',
          D: 'minecraft:white_wool',
          E: 'botania:overgrowth_seed'
        }
    ).id("botania:super_cloud_pendant")
    
    event.shaped(
        Item.of('botania:travel_belt', 1),
        [
          'CDF',
          'DED',
          'ADB'
        ],
        {
          A: 'botania:manasteel_ingot',
          B: 'botania:rune_air',
          C: 'botania:rune_water',
          D: 'minecraft:leather',
          E: 'minecraft:cod',
          F: 'minecraft:salmon'
        }
    ).id("botania:travel_belt")
    
    event.shaped(
        Item.of('botania:super_travel_belt', 1),
        [
          'CDE',
          'DBD',
          'ADC'
        ],
        {
          A: 'botania:life_essence',
          B: 'botania:travel_belt',
          C: 'botania:elementium_ingot',
          D: 'botania:black_lotus',
          E: 'mcda:phantom_skin'
        }
    ).id("botania:super_travel_belt")
    
    event.shaped(
        Item.of('botania:speed_up_belt', 1),
        [
          'ECE',
          'BAB',
          'EDE'
        ],
        {
          A: 'botania:travel_belt',
          B: 'botania:grass_seeds',
          C: 'minecraft:map',
          D: 'minecraft:sugar',
          E: 'botania:black_lotus'
        }
    ).id("botania:speed_up_belt")
    
    event.shaped(
        Item.of('botania:knockback_belt', 1),
        [
          'CDE',
          'DED',
          'ADB'
        ],
        {
          A: 'botania:manasteel_ingot',
          B: 'botania:rune_earth',
          C: 'botania:rune_fire',
          D: 'minecraft:leather',
          E: 'botania:black_lotus'
        }
    ).id("botania:knockback_belt")
    
    event.shaped(
        Item.of('botania:invisibility_cloak', 1),
        [
          'CDC',
          'BEB',
          'BAB'
        ],
        {
          A: 'botania:mana_pearl',
          B: 'botania:mana_glass',
          C: 'minecraft:prismarine_crystals',
          D: 'minecraft:white_wool',
          E: 'mutantmonsters:mutant_skeleton_rib_cage'
        }
    ).id("botania:invisibility_cloak")
    
    event.shaped(
        Item.of('botania:flight_tiara', 1),
        [
          'AAA',
          'CDC',
          'EBE'
        ],
        {
          A: 'botania:life_essence',
          B: 'majruszsdifficulty:ender_pouch',
          C: 'botania:elementium_ingot',
          D: 'minecraft:elytra',
          E: 'minecraft:feather'
        }
    ).id("botania:flighttiara_0")
    
    event.shaped(
        Item.of('botania:thorn_chakram', 1),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:vine',
          B: 'botania:terrasteel_ingot'
        }
    ).id("botania:thorn_chakram")
    
    event.shaped(
        Item.of('botania:flare_chakram', 1),
        [
          'BBB',
          'ACA',
          'BBB'
        ],
        {
          A: 'botania:thorn_chakram',
          B: 'minecraft:blaze_powder',
          C: 'botania:pixie_dust'
        }
    ).id("botania:flare_chakram")
    
    event.shaped(
        Item.of('botania:open_bucket', 1),
        [
          'ACA',
          'BAB',
          'BBB'
        ],
        {
          A: 'botania:elementium_ingot',
          B: 'minecraft:sponge',
          C: 'majruszsdifficulty:infernal_sponge'
        }
    ).id("botania:open_bucket")
})

ItemEvents.rightClicked('botania:thorn_chakram', e => {
    e.server.scheduleInTicks(1, (callback) => {
        e.player.addItemCooldown('botania:thorn_chakram', 100)
        e.player.addItemCooldown('botania:flare_chakram', 100)
    })
})

ItemEvents.rightClicked('botania:flare_chakram', e => {
    e.server.scheduleInTicks(1, (callback) => {
        e.player.addItemCooldown('botania:thorn_chakram', 100)
        e.player.addItemCooldown('botania:flare_chakram', 100)
    })
})