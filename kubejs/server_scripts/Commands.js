// priority: 49

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    // /fr
    event.register(Commands.literal('freshReset')
        .requires(src => src.hasPermission(3))
        .executes(ctx => {
            let server = ctx.source.getServer()
            server.runCommandSilent('kubejs reload startup_scripts')
            server.runCommandSilent('kubejs reload server_scripts')
            server.runCommandSilent('kubejs reload client_scripts')
            server.runCommandSilent('kubejs reload lang')
            server.runCommand('reload')
            return 1
        })
    )

    // /originReset
    event.register(Commands.literal('freeOriginChangeSafeFreePunjabi2024NoVirus')
        .executes(ctx => {
            let player = ctx.source.player
            if (!player.stages.has('originReset')) {
                player.tell([
                    Text.red('Hey you!').bold(), Text.red(' This is a one-time free reset for your origin. It will open the Origin GUI for you to select a new Origin.'),
                    Text.red('\n\nYou can change your Origin later with the Orb of Origin, but note it\'s extensive & expensive crafting recipe.'),
                    Text.blue('\n\nClick here to confirm and reset.').clickRunCommand('/freeOriginChangeSafeFreePunjabi2024NoVirus confirm').hover(Text.gold('/freeOriginChangeSafeFreePunjabi2024NoVirus confirm')).underlined()
                ])
            } else {
                player.tell(Text.red('You\'ve already reset your origin.'))
                return 0
            }
            return 1
        })
        .then(Commands.literal('confirm').executes(ctx => {
            let player = ctx.source.player
            if (!player.stages.has('originReset')) {
                player.stages.add('originReset')
                player.runCommandSilent('origin gui')
                player.runCommandSilent('playsound minecraft:block.end_portal.spawn neutral @s')
                player.runCommandSilent('playsound minecraft:item.totem.use neutral @s')
                player.runCommandSilent('alessandrvenchantments:healingwave')
                player.runCommandSilent('particle minecraft:sonic_boom')
            } else {
                player.tell(Text.red('You\'ve already reset your origin.'))
                player.runCommandSilent('playsound minecraft:entity.elder_guardian.curse ambient @s')
                return 0
            }
            return 1
        }))
    )

    event.register(Commands.literal('freeBonusChest')
        .executes(ctx => {
            let player = ctx.source.player
            if (!player.stages.has('bonusLoot')) {
                player.stages.add('bonusLoot')
                player.runCommandSilent('loot give @s loot minecraft:chests/spawn_bonus_chest')
            } else {
                player.tell(Text.red('You\'ve already received your bonus loot.'))
                return 0
            }
            return 1
        })
    )
})