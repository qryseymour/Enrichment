// priority: 50

ItemEvents.rightClicked('mutantmonsters:endersoul_hand', e => {
    if (e.player.inWater) {
        e.cancel();
    }
    else if (e.player.isShiftKeyDown()) {
        e.server.scheduleInTicks(1, (callback) => {
            e.player.addItemCooldown('mutantmonsters:endersoul_hand', 300)
        })
    }
})