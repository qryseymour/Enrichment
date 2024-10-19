

ItemEvents.modification(event => {
    event.modify('botania:terra_sword', item => {
        let damageAttribute = item.getAttributes("generic.attack_damage").get(0)
        item.removeAttribute("generic.attack_damage", damageAttribute.id)
        item.addAttribute("generic.attack_damage", damageAttribute.id, damageAttribute.name, damageAttribute.amount * 3, damageAttribute.operation)
        let speedAttribute = item.getAttributes("generic.attack_speed").get(0)
        item.removeAttribute("generic.attack_speed", speedAttribute.id)
        item.addAttribute("generic.attack_speed", speedAttribute.id, speedAttribute.name, -3.7, speedAttribute.operation)
    })
    event.modify('botania:thorn_chakram', item => {
        item.maxStackSize = 1;
    })
    event.modify('botania:flare_chakram', item => {
        item.maxStackSize = 1;
    })
})