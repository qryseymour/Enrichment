EntityEvents.spawned(e => {
    const entity = e.entity
    if (entity.headArmorItem == 'majruszdifficulty:tattered_helmet') {
        entity.headArmorItem = 'minecraft:air'
    }
    if (entity.chestArmorItem == 'majruszdifficulty:tattered_chestplate') {
        entity.chestArmorItem = 'minecraft:air'
    }
    if (entity.legsArmorItem == 'majruszdifficulty:tattered_leggings') {
        entity.legsArmorItem = 'minecraft:air'
    }
    if (entity.feetArmorItem == 'majruszdifficulty:tattered_boots') {
        entity.feetArmorItem = 'minecraft:air'
    }
})