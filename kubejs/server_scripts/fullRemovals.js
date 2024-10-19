//priority: 7

let idRemovals = [
    "botania:laputa_shard",
    "botania:ender_hand",
    "travelersbackpack:iron_golem",
    "travelersbackpack:dragon",
    "travelersbackpack:sponge",
    "travelersbackpack:cactus",
    "travelersbackpack:bat",
    "travelersbackpack:backpack_tank",
    "travelersbackpack:hose_nozzle",
    "travelersbackpack:hose",
    "travelersbackpack:blank_upgrade",
    "travelersbackpack:backpack_tank",
    "endgoblintraders:durability_void_totem",
    "betternether:pig_statue_respawner",
    "betterend:respawn_obelisk",
    "mcsa:shield_of_infinity_helmet",
    "mcsa:shield_of_infinity_chestplate",
    "mcsa:shield_of_infinity_leggings",
    "mcsa:shield_of_infinity_boots",
    "botania:incense_stick",
    "botania:blood_pendant",
    "botania:aura_ring",
    "botania:aura_ring_greater"
    //,/betterend:*_head/,
    ///betterend:*_hammer/
]

ServerEvents.recipes(e => {
    idRemovals.forEach(removal => {
        e.remove({ id: removal })
        e.remove({ input: removal })
        e.remove({ output: removal })
    })
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