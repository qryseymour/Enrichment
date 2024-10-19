// priority: 0

ServerEvents.recipes(event => {
  event.shaped(
      Item.of('origins:orb_of_origin', 1),
      [
        'ABC',
        'DEF',
        'GHI'
      ],
      {
        A: 'minecraft:nether_star',
        B: 'bosses_of_mass_destruction:charged_ender_pearl', 
        C: 'bosses_of_mass_destruction:monolith_block',
        D: 'minecraft:heart_of_the_sea',
        E: 'bygonenether:warped_ender_pearl',
        F: 'plentyofarmors:heart_of_the_end',
        G: 'minecraft:wet_sponge',
        H: 'minecraft:totem_of_undying',
        I: 'bosses_of_mass_destruction:crystal_fruit'
      }
    )
})
