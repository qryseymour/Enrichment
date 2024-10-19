ServerEvents.recipes(event => {
    event.shaped(
        Item.of('potionvapes:vape', 1),
        [
            ' AD',
            'AFE',
            'ACB'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'betternether:smoker',
            C: 'minecraft:wither_rose',
            D: 'botania:dark_quartz',
            E: 'minecraft:tripwire_hook',
            F: 'minecraft:redstone'
        }
    ).id("potionvapes:vape")

    event.smithing(
        'potionvapes:reinforced_vape',  // arg 1: output
        'potionvapes:vape',       // arg 2: the item to be upgraded
        'mcda:upgrade_core_wither'         // arg 3: the upgrade item
      ).id("potionvapes:reinforced_vape_smithing")
})