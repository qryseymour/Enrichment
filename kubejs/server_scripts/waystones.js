// priority: 0

ServerEvents.recipes(event => {
    
  event.remove({ id: "waystones:waystone" })
    
  event.remove({ id: "waystones:mossy_waystone" })
    
  event.shaped(
    Item.of('waystones:sandy_waystone', 1),
    [
      ' A ',
      'ABA',
      '   '
    ],
    {
      A: 'minecraft:chiseled_sandstone',
      B: 'waystones:waystone'
    }
  ).id("waystones:sandy_waystone")
  
  event.shaped(
    Item.of('waystones:sharestone', 1),
    [
      'AAA',
      ' B ',
      ' C '
    ],
    {
      A: 'minecraft:stone_bricks',
      B: 'waystones:waystone', 
      C: 'minecraft:obsidian'
    }
  ).id("waystones:sharestone")
  
  event.shaped(
    Item.of('waystones:portstone', 1),
    [
      ' D ',
      'ABA',
      'CCC'
    ],
    {
      A: 'minecraft:stone_bricks',
      B: 'waystones:waystone', 
      C: 'minecraft:polished_andesite',
      D: 'waystones:warp_stone'
    }
  ).id("waystones:portstone")
  
  event.shaped(
    Item.of('waystones:warp_plate', 1),
    [
      'BDB',
      'EAE',
      'BCB'
    ],
    {
      A: 'minecraft:flint',
      B: 'waystones:warp_dust', 
      C: 'minecraft:diamond_block',
      D: 'nyfsbp:gem_banner_pattern',
      E: 'minecraft:netherrack'
    }
  ).id("waystones:warp_plate")
})

MoreJSEvents.villagerTrades((event) => {
  let villagers = [
    "minecraft:armorer",
    "minecraft:butcher",
    "minecraft:cartographer",
    "minecraft:cleric",
    "minecraft:farmer",
    "minecraft:fisherman",
    "minecraft:fletcher",
    "minecraft:leatherworker",
    "minecraft:librarian",
    "minecraft:mason",
    "minecraft:shepherd",
    "minecraft:toolsmith",
    "minecraft:weaponsmith",
    "morevillagers:oceanographer",
    "morevillagers:woodworker",
    "morevillagers:enderian",
    "morevillagers:engineer",
    "morevillagers:hunter",
    "morevillagers:miner",
    "morevillagers:florist"
  ]
  
  villagers.forEach(villager => {
    event.addTrade(villager, 5, [Item.of("minecraft:emerald", 6), "waystones:warp_stone"], "waystones:waystone").maxUses(1).priceMultiplier(10).villagerExperience(30)
  })
});