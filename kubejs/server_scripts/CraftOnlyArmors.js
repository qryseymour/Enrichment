//priority: 7

let idRemovals = [
    "armoroftheages:anubis_armor_head",
    "armoroftheages:anubis_armor_chest",
    "armoroftheages:anubis_armor_legs",
    "armoroftheages:anubis_armor_feet",
    "armoroftheages:centurion_armor_head",
    "armoroftheages:centurion_armor_chest",
    "armoroftheages:centurion_armor_legs",
    "armoroftheages:centurion_armor_feet",
    "betterend:elytra_armored",
    "botania:terrasteel_helmet",
    "botania:terrasteel_chestplate",
    "botania:terrasteel_leggings",
    "botania:terrasteel_boots",
    "bygonenether:gilded_netherite_helmet",
    "bygonenether:gilded_netherite_chestplate",
    "bygonenether:gilded_netherite_leggings",
    "bygonenether:gilded_netherite_boots",
    "immersive_armors:heavy_helmet",
    "immersive_armors:heavy_chestplate",
    "immersive_armors:heavy_leggings",
    "immersive_armors:heavy_boots",
    "mcda:full_metal_armor_helmet",
    "mcda:full_metal_armor_chestplate",
    "mcda:full_metal_armor_leggings",
    "mcda:full_metal_armor_boots",
    "mcda:sturdy_shulker_armor_helmet",
    "mcda:sturdy_shulker_armor_chestplate",
    "mcda:sturdy_shulker_armor_leggings",
    "mcda:sturdy_shulker_armor_boots",
    "mcsa:adamantium_impervium_helmet",
    "mcsa:adamantium_impervium_chestplate",
    "mcsa:adamantium_impervium_leggings",
    "mcsa:adamantium_impervium_boots",
    "mcsa:redstone_riot_helmet",
    "mcsa:redstone_riot_chestplate",
    "mcsa:redstone_riot_leggings",
    "mcsa:redstone_riot_boots",
    "mcsa:star_shield_helmet",
    "mcsa:star_shield_chestplate",
    "mcsa:star_shield_leggings",
    "mcsa:star_shield_boots",
    "plentyofarmors:ender_netherite_helmet",
    "plentyofarmors:ender_netherite_chestplate",
    "plentyofarmors:ender_netherite_leggings",
    "plentyofarmors:ender_netherite_boots",
    "plentyofarmors:marine_diamond_helmet",
    "plentyofarmors:marine_diamond_chestplate",
    "plentyofarmors:marine_diamond_leggings",
    "plentyofarmors:marine_diamond_boots"
]

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('armoroftheages:anubis_armor_head', 1),
        [
            'CDC',
            'BAB',
            'CEC'
        ],
        {
            A: 'minecraft:diamond_helmet',
            B: 'minecraft:lapis_block',
            C: 'minecraft:gold_block',
            D: 'minecraft:coal_block',
            E: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:anubis_armor_head")

    event.shaped(
        Item.of('armoroftheages:anubis_armor_chest', 1),
        [
            'BDB',
            'CAC',
            'CCC'
        ],
        {
            A: 'minecraft:diamond_chestplate',
            B: 'minecraft:lapis_block',
            C: 'minecraft:gold_block',
            D: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:anubis_armor_chest")

    event.shaped(
        Item.of('armoroftheages:anubis_armor_legs', 1),
        [
            'BAB',
            'CDC',
            'C C'
        ],
        {
            A: 'minecraft:diamond_leggings',
            B: 'minecraft:lapis_block',
            C: 'minecraft:gold_block',
            D: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:anubis_armor_legs")

    event.shaped(
        Item.of('armoroftheages:anubis_armor_feet', 1),
        [
            'CAC',
            'BDB',
            '   '
        ],
        {
            A: 'minecraft:diamond_boots',
            B: 'minecraft:lapis_block',
            C: 'minecraft:gold_block',
            D: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:anubis_armor_feet")

    event.shaped(
        Item.of('armoroftheages:centurion_armor_head', 1),
        [
            'BDB',
            'CAC',
            'CEC'
        ],
        {
            A: 'minecraft:leather_helmet',
            B: 'minecraft:feather',
            C: 'minecraft:gold_ingot',
            D: 'minecraft:red_dye',
            E: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:centurion_armor_head")

    event.shaped(
        Item.of('armoroftheages:centurion_armor_chest', 1),
        [
            'BDB',
            'CAC',
            'BBB'
        ],
        {
            A: 'minecraft:leather_chestplate',
            B: 'minecraft:gold_ingot',
            C: 'minecraft:red_dye',
            D: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:centurion_armor_chest")

    event.shaped(
        Item.of('armoroftheages:centurion_armor_legs', 1),
        [
            'BAB',
            'BDB',
            'C C'
        ],
        {
            A: 'minecraft:leather_leggings',
            B: 'minecraft:gold_ingot',
            C: 'minecraft:red_dye',
            D: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:centurion_armor_legs")

    event.shaped(
        Item.of('armoroftheages:centurion_armor_feet', 1),
        [
            'BAB',
            'CDC',
            '   '
        ],
        {
            A: 'minecraft:leather_boots',
            B: 'minecraft:gold_ingot',
            C: 'minecraft:leather',
            D: 'minecraft:netherite_ingot',
        }
    ).id("armoroftheages:centurion_armor_feet")

    event.smithing(
        'betterend:elytra_armored',    
        'betterend:elytra_crystalite',                          
        'betterend:aeternium_ingot'                            
      ).id("betterend:armored_elytra")

    event.shaped(
        Item.of('botania:terrasteel_helmet', 1),
        [
            'FCG',
            'BAB',
            'DBE'
        ],
        {
            A: 'botania:elementium_helmet',
            B: 'botania:terrasteel_ingot',
            C: 'botania:goddess_charm',
            D: 'plentyofarmors:stardusite_ingot',
            E: 'majruszsdifficulty:enderium_ingot',
            F: 'majruszsdifficulty:evoker_fang_scroll',
            G: 'majruszsdifficulty:sonic_boom_scroll',
        }
    ).id("botania:terrasteel_helmet")

    event.shaped(
        Item.of('botania:terrasteel_chestplate', 1),
        [
            'FCG',
            'BAB',
            'DBE'
        ],
        {
            A: 'botania:elementium_chestplate',
            B: 'botania:terrasteel_ingot',
            C: 'botania:lava_pendant',
            D: 'plentyofarmors:stardusite_ingot',
            E: 'majruszsdifficulty:enderium_ingot',
            F: 'majruszsdifficulty:soul_jar',
            G: 'majruszsdifficulty:enderium_shard_locator',
        }
    ).id("botania:terrasteel_chestplate")

    event.shaped(
        Item.of('botania:terrasteel_leggings', 1),
        [
            'FCG',
            'BAB',
            'DBE'
        ],
        {
            A: 'botania:elementium_leggings',
            B: 'botania:terrasteel_ingot',
            C: 'botania:cloud_pendant',
            D: 'plentyofarmors:stardusite_ingot',
            E: 'majruszsdifficulty:enderium_ingot',
            F: 'majruszsdifficulty:wither_sword',
            G: 'bosses_of_mass_destruction:crystal_fruit',
        }
    ).id("botania:terrasteel_leggings")

    event.shaped(
        Item.of('botania:terrasteel_boots', 1),
        [
            'FCG',
            'BAB',
            'DBE'
        ],
        {
            A: 'botania:elementium_boots',
            B: 'botania:terrasteel_ingot',
            C: 'botania:ice_pendant',
            D: 'plentyofarmors:stardusite_ingot',
            E: 'majruszsdifficulty:enderium_ingot',
            F: 'bosses_of_mass_destruction:monolith_block',
            G: 'bosses_of_mass_destruction:charged_ender_pearl',
        }
    ).id("botania:terrasteel_boots")

    event.shaped(
        Item.of('immersive_armors:heavy_helmet', 1),
        [
            'AAA',
            'BCB',
            '   '
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:netherite_ingot'
        }
    ).id("immersive_armors:heavy_helmet")

    event.shaped(
        Item.of('immersive_armors:heavy_chestplate', 1),
        [
            'ACA',
            'BAB',
            'BAB'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:netherite_ingot'
        }
    ).id("immersive_armors:heavy_chestplate")

    event.shaped(
        Item.of('immersive_armors:heavy_leggings', 1),
        [
            'BAB',
            'ACA',
            'B B'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:netherite_ingot'
        }
    ).id("immersive_armors:heavy_leggings")

    event.shaped(
        Item.of('immersive_armors:heavy_boots', 1),
        [
            'BCB',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:netherite_ingot'
        }
    ).id("immersive_armors:heavy_boots")

    event.shaped(
        Item.of('plentyofarmors:marine_diamond_helmet', 1),
        [
            'AAA',
            'ABA',
            '   '
        ],
        {
            A: 'plentyofarmors:marine_diamond',
            B: 'minecraft:netherite_ingot'
        }
    ).id("plentyofarmors:marine_diamond_helmet")

    event.shaped(
        Item.of('plentyofarmors:marine_diamond_chestplate', 1),
        [
            'ABA',
            'AAA',
            'AAA'
        ],
        {
            A: 'plentyofarmors:marine_diamond',
            B: 'minecraft:netherite_ingot'
        }
    ).id("plentyofarmors:marine_diamond_chestplate")

    event.shaped(
        Item.of('plentyofarmors:marine_diamond_leggings', 1),
        [
            'AAA',
            'ABA',
            'A A'
        ],
        {
            A: 'plentyofarmors:marine_diamond',
            B: 'minecraft:netherite_ingot'
        }
    ).id("plentyofarmors:marine_diamond_leggings")

    event.shaped(
        Item.of('plentyofarmors:marine_diamond_boots', 1),
        [
            'ABA',
            'A A',
            '   '
        ],
        {
            A: 'plentyofarmors:marine_diamond',
            B: 'minecraft:netherite_ingot'
        }
    ).id("plentyofarmors:marine_diamond_boots")
})  

LootJS.modifiers(e => {
    idRemovals.forEach(removal => {
        e.addBlockLootModifier(removal)
        .removeLoot(Ingredient.all)
        e.addEntityLootModifier(removal)
        .removeLoot(Ingredient.all)
        e.addLootTableModifier(removal)
        .removeLoot(Ingredient.all)
    })
})