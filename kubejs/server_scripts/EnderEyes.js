ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:ender_eye', 8),
        [
            'BBB',
            'BAC',
            'CCC'
        ],
        {
            A: 'enchant_the_rainbow:nether_star_fragment',
            B: 'minecraft:ender_pearl',
            C: 'minecraft:blaze_powder'
        }
    ).id("minecraft:ender_eye")

    event.shaped(
        Item.of('plentyofarmors:stardusite_ingot', 2),
        [
            'C C',
            ' A ',
            'B B'
        ],
        {
            A: 'enchant_the_rainbow:nether_star_fragment',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:netherite_ingot'
        }
    ).id("plentyofarmors:stardusite_ingot")

    event.shaped(
        Item.of('minecraft:beacon', 1),
        [
            'BBB',
            'BAB',
            'CCC'
        ],
        {
            A: 'enchant_the_rainbow:nether_star_fragment',
            B: 'minecraft:glass',
            C: 'minecraft:obsidian'
        }
    ).id("minecraft:beacon")
})