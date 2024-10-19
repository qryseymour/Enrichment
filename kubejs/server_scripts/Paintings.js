ServerEvents.recipes(event => {
    
    event.shaped(
        Item.of('immersive_paintings:painting', 1),
        [
            'BBB',
            'BAB',
            'BCB'
        ],
        {
            A: '#c:dyes',
            B: 'minecraft:paper',
            C: 'minecraft:painting'
        }
    ).id("immersive_paintings:painting")
})