WorldgenEvents.add(event => {
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:red_aboveground_lake"
        lake.fluid = 'coloredwatermod:red_water' // Block ID (Use [] syntax for properties)
        lake.chance = 4 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:redwoods",
            "regions_unexplored:spare_redwoods",
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:red_underground_lake"
        lake.fluid = 'coloredwatermod:red_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:redstone_caves",
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:black_underground_lake"
        lake.fluid = 'coloredwatermod:black_water' // Block ID (Use [] syntax for properties)
        lake.chance = 4 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:blackwood_forest"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:green_underground_lake"
        lake.fluid = 'coloredwatermod:green_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:orange_underground_lake"
        lake.fluid = 'coloredwatermod:orange_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:purple_underground_lake"
        lake.fluid = 'coloredwatermod:purple_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:pink_underground_lake"
        lake.fluid = 'coloredwatermod:pink_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:yellow_underground_lake"
        lake.fluid = 'coloredwatermod:yellow_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:cyan_underground_lake"
        lake.fluid = 'coloredwatermod:cyan_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:brown_underground_lake"
        lake.fluid = 'coloredwatermod:brown_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:blue_underground_lake"
        lake.fluid = 'coloredwatermod:blue_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:lime_underground_lake"
        lake.fluid = 'coloredwatermod:lime_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:lightblue_underground_lake"
        lake.fluid = 'coloredwatermod:lightblue_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
    event.addLake(lake => { // Create new lake feature
        lake.id = "kubejs:magenta_underground_lake"
        lake.fluid = 'coloredwatermod:magenta_water' // Block ID (Use [] syntax for properties)
        lake.chance = 3 // Spawns every ~3 chunks
        lake.biomes = [
            "regions_unexplored:prismachasm"
        ]
    })
})