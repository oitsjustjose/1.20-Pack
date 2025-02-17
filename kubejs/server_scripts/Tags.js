// priority: 100
const ores = [
  'eidolon:deep_lead_ore',
  'eidolon:deep_silver_ore',
  'eidolon:lead_ore',
  'eidolon:silver_ore',
  'immersiveengineering:deepslate_ore_lead',
  'immersiveengineering:deepslate_ore_silver',
  'immersiveengineering:deepslate_ore_uranium',
  'immersiveengineering:ore_lead',
  'immersiveengineering:ore_silver',
  'immersiveengineering:ore_uranium',
  'mekanism:deepslate_lead_ore',
  'mekanism:lead_ore',
];

ServerEvents.tags('block', event => {
  global.StrippedLumber.logs.forEach(log => event.add('forge:stripped_logs', log));
  global.StrippedLumber.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  ores.forEach(ore => event.removeAllTagsFrom(ore));

  /* Add Mangrove Roots to HT's Treechop to make them more bareable */
  event.add('treechop:choppables', 'minecraft:mangrove_roots');

  /* Fix CFM Pickaxe Minability */
  event.add('minecraft:mineable/pickaxe', ['cfm:post_box']);

  /* Refined Glowstone is primarily useless >_> */
  event.removeAllTagsFrom('mekanism:block_refined_glowstone');

  event.add('minecraft:planks', [
    'aether_redux:blightwillow_planks',
    'aether_redux:cloudcap_planks',
    'aether_redux:crystal_planks',
    'aether_redux:fieldsprout_planks',
    'aether_redux:glacia_planks',
    'aether_redux:springshroom_planks',
    'aether:skyroot_planks',
    'deep_aether:conberry_planks',
    'deep_aether:cruderoot_planks',
    'deep_aether:roseroot_planks',
    'deep_aether:sunroot_planks',
    'deep_aether:yagroot_planks',
  ]);

  event.add('snowrealmagic:containables', [
    'aether:berry_bush_stem',
    'regions_unexplored:alpha_dandelion',
    'regions_unexplored:alpha_rose',
    'regions_unexplored:ashen_grass',
    'regions_unexplored:aster',
    'regions_unexplored:barley',
    'regions_unexplored:black_snowbelle',
    'regions_unexplored:bladed_grass',
    'regions_unexplored:bladed_tall_grass',
    'regions_unexplored:bleeding_heart',
    'regions_unexplored:blue_lupine',
    'regions_unexplored:blue_magnolia_flowers',
    'regions_unexplored:blue_snowbelle',
    'regions_unexplored:brimsprout',
    'regions_unexplored:brown_snowbelle',
    'regions_unexplored:clover',
    'regions_unexplored:cobalt_earlight',
    'regions_unexplored:cobalt_roots',
    'regions_unexplored:cyan_snowbelle',
    'regions_unexplored:daisy',
    'regions_unexplored:day_lily',
    'regions_unexplored:dead_steppe_shrub',
    'regions_unexplored:dorcel',
    'regions_unexplored:elephant_ear',
    'regions_unexplored:enchanted_birch_leaf_pile',
    'regions_unexplored:felicia_daisy',
    'regions_unexplored:fireweed',
    'regions_unexplored:frozen_grass',
    'regions_unexplored:glister_bulb',
    'regions_unexplored:glister_spire',
    'regions_unexplored:glistering_bloom',
    'regions_unexplored:glistering_fern',
    'regions_unexplored:glistering_sprout',
    'regions_unexplored:gray_snowbelle',
    'regions_unexplored:green_snowbelle',
    'regions_unexplored:hibiscus',
    'regions_unexplored:hyacinth_bloom',
    'regions_unexplored:hyacinth_flowers',
    'regions_unexplored:hyacinth_lamp',
    'regions_unexplored:hyssop',
    'regions_unexplored:light_blue_snowbelle',
    'regions_unexplored:light_gray_snowbelle',
    'regions_unexplored:lime_snowbelle',
    'regions_unexplored:magenta_snowbelle',
    'regions_unexplored:mallow',
    'regions_unexplored:maple_leaf_pile',
    'regions_unexplored:meadow_sage',
    'regions_unexplored:medium_grass',
    'regions_unexplored:mycotoxic_daisy',
    'regions_unexplored:mycotoxic_grass',
    'regions_unexplored:orange_coneflower',
    'regions_unexplored:orange_maple_leaf_pile',
    'regions_unexplored:orange_snowbelle',
    'regions_unexplored:pink_lupine',
    'regions_unexplored:pink_magnolia_flowers',
    'regions_unexplored:pink_snowbelle',
    'regions_unexplored:poppy_bush',
    'regions_unexplored:purple_coneflower',
    'regions_unexplored:purple_lupine',
    'regions_unexplored:purple_snowbelle',
    'regions_unexplored:red_lupine',
    'regions_unexplored:red_maple_leaf_pile',
    'regions_unexplored:red_snowbelle',
    'regions_unexplored:salmon_poppy_bush',
    'regions_unexplored:sandy_grass',
    'regions_unexplored:sandy_tall_grass',
    'regions_unexplored:silver_birch_leaf_pile',
    'regions_unexplored:small_desert_shrub',
    'regions_unexplored:steppe_grass',
    'regions_unexplored:steppe_shrub',
    'regions_unexplored:steppe_tall_grass',
    'regions_unexplored:stone_bud',
    'regions_unexplored:tall_cobalt_earlight',
    'regions_unexplored:tall_hyacinth_stock',
    'regions_unexplored:tassel',
    'regions_unexplored:tsubaki',
    'regions_unexplored:waratah',
    'regions_unexplored:white_magnolia_flowers',
    'regions_unexplored:white_snowbelle',
    'regions_unexplored:white_trillium',
    'regions_unexplored:wilting_trillium',
    'regions_unexplored:windswept_grass',
    'regions_unexplored:yellow_lupine',
    'regions_unexplored:yellow_snowbelle',
  ]);

  event.add('vtweaks:blacklisted_harvest_crops', [
    'minecraft:sweet_berry_bush',
    'minecraft:mangrove_propagule',
    'minecraft:bamboo',
    'farmersdelight:tomatoes',
    'ecologics:prickly_pear',
    'regions_unexplored:salmonberry_bush',
    'spawn:potted_sweet_berry_bush',
  ]);

  // Make all blocks un-gravititable -- sending blocks to the sky is entirely unhelpful..
  event.add(
    'aether:gravitite_ability_blacklist',
    Utils.getRegistryIds(new ResourceLocation('minecraft', 'block')).map(x => `${x.getNamespace()}:${x.getPath()}`)
  );
});

ServerEvents.tags('item', event => {
  /* Used to define Handwashing with smaller tag sets to prevent Packet Overflow */
  const colors = () => {
    /**
     * Gets all colors of a given material
     * @param {String} modid
     * @param {String} postfix
     * @param {String} prefix
     * @returns Array<String>
     */
    const allColorsOf = (modid, postfix, prefix) => {
      return global.Colors.all.map(color => `${modid}:${prefix || ''}${prefix ? '_' : ''}${color}${postfix ? '_' : ''}${postfix || ''}`);
    };

    /**
     * Gets all colors, but white, of a given material
     * @param {String} modid
     * @param {String} postfix
     * @param {String} prefix
     * @returns Array<String>
     */
    const allButWhite = (modid, postfix, prefix) => {
      return global.Colors.withoutWhite.map(color => `${modid}:${prefix || ''}${prefix ? '_' : ''}${color}${postfix ? '_' : ''}${postfix || ''}`);
    };

    // Vanilla
    event.add('vtweaks:colored_wool', allButWhite('minecraft', 'wool'));
    event.add('vtweaks:colored_carpet', allButWhite('minecraft', 'carpet'));
    event.add('vtweaks:colored_banner', allButWhite('minecraft', 'banner'));
    event.add('vtweaks:colored_bed', allButWhite('minecraft', 'bed'));

    event.add('vtweaks:colored_stained_glass', allColorsOf('minecraft', 'stained_glass'));
    event.add('vtweaks:colored_stained_glass_panes', allColorsOf('minecraft', 'stained_glass_pane'));
    event.add('vtweaks:colored_candle', allColorsOf('minecraft', 'candle'));

    // AE2
    event.add('vtweaks:colored_covered_cable', allColorsOf('ae2', 'covered_cable'));
    event.add('vtweaks:colored_covered_dense_cable', allColorsOf('ae2', 'covered_dense_cable'));
    event.add('vtweaks:colored_glass_cable', allColorsOf('ae2', 'glass_cable'));
    event.add('vtweaks:colored_smart_cable', allColorsOf('ae2', 'smart_cable'));
    event.add('vtweaks:colored_smart_dense_cable', allColorsOf('ae2', 'smart_dense_cable'));

    // Comforts
    event.add('vtweaks:colored_hammock', allButWhite('comforts', null, 'hammock'));
    event.add('vtweaks:colored_sleeping_bag', allButWhite('comforts', null, 'sleeping_bag'));

    // Connected Glass
    event.add('vtweaks:colored_borderless_glass_pane', allColorsOf('connectedglass', 'pane', 'borderless_glass'));
    event.add('vtweaks:colored_borderless_glass', allColorsOf('connectedglass', null, 'borderless_glass'));
    event.add('vtweaks:colored_clear_glass_pane', allColorsOf('connectedglass', 'pane', 'clear_glass'));
    event.add('vtweaks:colored_clear_glass', allColorsOf('connectedglass', null, 'clear_glass'));
    event.add('vtweaks:colored_scratched_glass_pane', allColorsOf('connectedglass', 'pane', 'scratched_glass'));
    event.add('vtweaks:colored_scratched_glass', allColorsOf('connectedglass', null, 'scratched_glass'));
    event.add('vtweaks:colored_tinted_borderless_glass', allColorsOf('connectedglass', null, 'tinted_borderless_glass'));

    // Farmer's Delight
    event.add('vtweaks:colored_canvas_sign', allColorsOf('farmersdelight', 'canvas_sign'));
    event.add('vtweaks:colored_hanging_canvas_sign', allColorsOf('farmersdelight', 'hanging_canvas_sign'));

    // Handcrafted
    event.add('vtweaks:colored_cushion', allButWhite('handcrafted', 'cushion'));
    event.add('vtweaks:colored_sheet', allButWhite('handcrafted', 'sheet'));

    // IE
    event.add('vtweaks:colored_sheetmetal_colored', allButWhite('immersiveengineering', null, 'sheetmetal_colored'));
    event.add('vtweaks:colored_slab_sheetmetal_colored', allButWhite('immersiveengineering', null, 'slab_sheetmetal_colored'));

    // Quark
    event.add('vtweaks:colored_framed_glass', allColorsOf('quark', 'framed_glass'));
    event.add('vtweaks:colored_framed_glass_pane', allColorsOf('quark', 'framed_glass_pane'));
    event.add('vtweaks:colored_shingles', allColorsOf('quark', 'shingles'));
    event.add('vtweaks:colored_shingle_slabs', allColorsOf('quark', 'shingles_slab'));
    event.add('vtweaks:colored_shingle_stairs', allColorsOf('quark', 'shingles_stairs'));

    // Supplementaries
    event.add('vtweaks:colored_candle_holder', allColorsOf('supplementaries', null, 'candle_holder'));
    event.add('vtweaks:colored_gold_candle_holder', allColorsOf('suppsquared', null, 'gold_candle_holder'));
    event.add('vtweaks:colored_flag', allButWhite('supplementaries', null, 'flag'));
  };

  /* Used to define missing construction blocks that need to be declared before Exclusions */
  const constructionBlocks = () => {
    event.add('minecraft:slabs', [
      'ae2:chiseled_quartz_slab',
      'ae2:cut_quartz_slab',
      'ae2:fluix_slab',
      'ae2:quartz_brick_slab',
      'ae2:quartz_pillar_slab',
      'ae2:quartz_slab',
      'ae2:sky_stone_brick_slab',
      'ae2:sky_stone_slab',
      'ae2:sky_stone_small_brick_slab',
      'ae2:smooth_quartz_slab',
      'ae2:smooth_sky_stone_slab',
      'bloodmagic:dungeon_brick_slab',
      'bloodmagic:dungeon_tile_slab',
      'create:copper_shingle_slab',
      'create:copper_tile_slab',
      'create:exposed_copper_shingle_slab',
      'create:exposed_copper_tile_slab',
      'create:oxidized_copper_shingle_slab',
      'create:oxidized_copper_tile_slab',
      'create:waxed_copper_shingle_slab',
      'create:waxed_copper_tile_slab',
      'create:waxed_exposed_copper_shingle_slab',
      'create:waxed_exposed_copper_tile_slab',
      'create:waxed_oxidized_copper_shingle_slab',
      'create:waxed_oxidized_copper_tile_slab',
      'create:waxed_weathered_copper_shingle_slab',
      'create:waxed_weathered_copper_tile_slab',
      'create:weathered_copper_shingle_slab',
      'create:weathered_copper_tile_slab',
      'embers:archaic_bricks_slab',
      'embers:archaic_large_bricks_slab',
      'embers:archaic_tile_slab',
      'embers:ashen_brick_slab',
      'embers:ashen_stone_slab',
      'embers:ashen_tile_slab',
      'embers:caminite_bricks_slab',
      'embers:caminite_large_bricks_slab',
      'embers:caminite_large_tile_slab',
      'embers:caminite_tiles_slab',
      'embers:metal_platform_slab',
      'embers:sealed_planks_slab',
      'embers:sealed_wood_tile_slab',
    ]);

    event.add('minecraft:stairs', [
      'ae2:chiseled_quartz_stairs',
      'ae2:cut_quartz_stairs',
      'ae2:fluix_stairs',
      'ae2:quartz_brick_stairs',
      'ae2:quartz_pillar_stairs',
      'ae2:quartz_stairs',
      'ae2:sky_stone_brick_stairs',
      'ae2:sky_stone_small_brick_stairs',
      'ae2:sky_stone_stairs',
      'ae2:smooth_quartz_stairs',
      'ae2:smooth_sky_stone_stairs',
      'bloodmagic:dungeon_brick_stairs',
      'bloodmagic:dungeon_polished_stairs',
      'create:copper_shingle_stairs',
      'create:copper_tile_stairs',
      'create:exposed_copper_shingle_stairs',
      'create:exposed_copper_tile_stairs',
      'create:oxidized_copper_shingle_stairs',
      'create:oxidized_copper_tile_stairs',
      'create:waxed_copper_shingle_stairs',
      'create:waxed_copper_tile_stairs',
      'create:waxed_exposed_copper_shingle_stairs',
      'create:waxed_exposed_copper_tile_stairs',
      'create:waxed_oxidized_copper_shingle_stairs',
      'create:waxed_oxidized_copper_tile_stairs',
      'create:waxed_weathered_copper_shingle_stairs',
      'create:waxed_weathered_copper_tile_stairs',
      'create:weathered_copper_shingle_stairs',
      'create:weathered_copper_tile_stairs',
      'embers:archaic_bricks_stairs',
      'embers:archaic_large_bricks_stairs',
      'embers:archaic_tile_stairs',
      'embers:ashen_brick_stairs',
      'embers:ashen_stone_stairs',
      'embers:ashen_tile_stairs',
      'embers:caminite_bricks_stairs',
      'embers:caminite_large_bricks_stairs',
      'embers:caminite_large_tile_stairs',
      'embers:caminite_tiles_stairs',
      'embers:sealed_planks_stairs',
      'embers:sealed_wood_tile_stairs',
      'sophisticatedbackpacks:upgrade_base',
    ]);
  };

  /* Used to define tags that are excluded in ItemGator Gates */
  const exclusions = () => {
    event.add('create:exception', [
      '#minecraft:stairs',
      '#minecraft:slabs',
      '#create:crushed_raw_materials',
      '#create:stone_types/andesite',
      '#create:stone_types/asurine',
      '#create:stone_types/calcite',
      '#create:stone_types/crimsite',
      '#create:stone_types/deepslate',
      '#create:stone_types/diorite',
      '#create:stone_types/dripstone',
      '#create:stone_types/granite',
      '#create:stone_types/limestone',
      '#create:stone_types/ochrum',
      '#create:stone_types/scorchia',
      '#create:stone_types/scoria',
      '#create:stone_types/tuff',
      '#create:stone_types/veridium',
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:nuggets',
      '#forge:raw_materials',
      '#forge:storage_blocks',
      'create_connected:copycat_beam',
      'create_connected:copycat_block',
      'create_connected:copycat_board',
      'create_connected:copycat_box',
      'create_connected:copycat_catwalk',
      'create_connected:copycat_fence_gate',
      'create_connected:copycat_fence',
      'create_connected:copycat_slab',
      'create_connected:copycat_stairs',
      'create_connected:copycat_vertical_step',
      'create_connected:copycat_wall',
      'create:acacia_window_pane',
      'create:acacia_window',
      'create:birch_window_pane',
      'create:birch_window',
      'create:copper_sheet',
      'create:copper_shingles',
      'create:copper_tiles',
      'create:copycat_panel',
      'create:copycat_step',
      'create:crafting_blueprint',
      'create:crimson_window_pane',
      'create:crimson_window',
      'create:crushed_raw_zinc',
      'create:dark_oak_window_pane',
      'create:dark_oak_window',
      'create:deepslate_zinc_ore',
      'create:dough',
      'create:exposed_copper_shingles',
      'create:fluid_tank' /* Unlocked during embers so you have a way to store fluids w/o fluid vessels */,
      'create:framed_glass_door',
      'create:framed_glass_pane',
      'create:framed_glass_trapdoor',
      'create:framed_glass',
      'create:horizontal_framed_glass_pane',
      'create:horizontal_framed_glass',
      'create:iron_sheet',
      'create:jungle_window_pane',
      'create:jungle_window',
      'create:mangrove_window_pane',
      'create:mangrove_window',
      'create:oak_window_pane',
      'create:oak_window',
      'create:ornate_iron_window_pane',
      'create:ornate_iron_window',
      'create:oxidized_copper_shingles',
      'create:oxidized_copper_tiles',
      'create:powered_latch',
      'create:raw_zinc_block',
      'create:raw_zinc',
      'create:spruce_window_pane',
      'create:spruce_window',
      'create:tiled_glass_pane',
      'create:tiled_glass',
      'create:vertical_framed_glass_pane',
      'create:vertical_framed_glass',
      'create:warped_window_pane',
      'create:warped_window',
      'create:waxed_copper_shingles',
      'create:waxed_copper_tiles',
      'create:waxed_exposed_copper_shingles',
      'create:waxed_exposed_copper_tiles',
      'create:waxed_oxidized_copper_shingles',
      'create:waxed_oxidized_copper_tiles',
      'create:waxed_weathered_copper_shingles',
      'create:waxed_weathered_copper_tiles',
      'create:weathered_copper_shingles',
      'create:weathered_copper_tiles',
      'create:wheat_flour',
      'create:zinc_block',
      'create:zinc_ingot',
      'create:zinc_nugget',
      'create:zinc_ore',
    ]);

    event.add('pneumaticcraft:exception', [
      'pneumaticcraft:compressed_iron_block',
      'pneumaticcraft:ingot_iron_compressed',
      'pneumaticcraft:oil_bucket',
    ]);

    event.add('immersiveengineering:exception', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
      'immersiveengineering:bannerpattern_bevels',
      'immersiveengineering:bannerpattern_hammer',
      'immersiveengineering:bannerpattern_ornate',
      'immersiveengineering:bannerpattern_treated_wood',
      'immersiveengineering:bannerpattern_windmill',
      'immersiveengineering:bannerpattern_wolf_l',
      'immersiveengineering:bannerpattern_wolf_r',
      'immersiveengineering:bannerpattern_wolf',
      'immersiveengineering:biodiesel_bucket',
      'immersiveengineering:clinker_brick_quoin',
      'immersiveengineering:clinker_brick_sill',
      'immersiveengineering:clinker_brick',
      'immersiveengineering:coal_coke',
      'immersiveengineering:coke',
      'immersiveengineering:concrete_brick_cracked',
      'immersiveengineering:concrete_brick',
      'immersiveengineering:concrete_chiseled',
      'immersiveengineering:concrete_pillar',
      'immersiveengineering:concrete_quarter',
      'immersiveengineering:concrete_sheet',
      'immersiveengineering:concrete_three_quarter',
      'immersiveengineering:concrete_tile',
      'immersiveengineering:concrete',
      'immersiveengineering:craftingtable',
      'immersiveengineering:crate',
      'immersiveengineering:deepslate_ore_aluminum',
      'immersiveengineering:deepslate_ore_nickel',
      'immersiveengineering:deepslate_ore_nickel',
      'immersiveengineering:dust_aluminum',
      'immersiveengineering:dust_nickel',
      'immersiveengineering:dust_saltpeter',
      'immersiveengineering:ersatz_leather',
      'immersiveengineering:ethanol_bucket',
      'immersiveengineering:hemp_fiber',
      'immersiveengineering:hempcrete_brick_cracked',
      'immersiveengineering:hempcrete_brick',
      'immersiveengineering:hempcrete_chiseled',
      'immersiveengineering:hempcrete_pillar',
      'immersiveengineering:hempcrete',
      'immersiveengineering:ingot_aluminum',
      'immersiveengineering:ingot_nickel',
      'immersiveengineering:nugget_aluminum',
      'immersiveengineering:nugget_nickel',
      'immersiveengineering:ore_aluminum',
      'immersiveengineering:ore_nickel',
      'immersiveengineering:ore_nickel',
      'immersiveengineering:plate_lead',
      'immersiveengineering:plate_silver',
      'immersiveengineering:raw_aluminum',
      'immersiveengineering:raw_block_aluminum',
      'immersiveengineering:raw_block_aluminum',
      'immersiveengineering:raw_block_nickel',
      'immersiveengineering:raw_nickel',
      'immersiveengineering:redstone_acid_bucket',
      'immersiveengineering:seed',
      'immersiveengineering:sheetmetal_aluminum',
      'immersiveengineering:sheetmetal_colored_black',
      'immersiveengineering:sheetmetal_colored_blue',
      'immersiveengineering:sheetmetal_colored_brown',
      'immersiveengineering:sheetmetal_colored_cyan',
      'immersiveengineering:sheetmetal_colored_gray',
      'immersiveengineering:sheetmetal_colored_green',
      'immersiveengineering:sheetmetal_colored_light_blue',
      'immersiveengineering:sheetmetal_colored_light_gray',
      'immersiveengineering:sheetmetal_colored_lime',
      'immersiveengineering:sheetmetal_colored_magenta',
      'immersiveengineering:sheetmetal_colored_orange',
      'immersiveengineering:sheetmetal_colored_pink',
      'immersiveengineering:sheetmetal_colored_purple',
      'immersiveengineering:sheetmetal_colored_red',
      'immersiveengineering:sheetmetal_colored_white',
      'immersiveengineering:sheetmetal_colored_yellow',
      'immersiveengineering:sheetmetal_constantan',
      'immersiveengineering:sheetmetal_copper',
      'immersiveengineering:sheetmetal_electrum',
      'immersiveengineering:sheetmetal_gold',
      'immersiveengineering:sheetmetal_iron',
      'immersiveengineering:sheetmetal_lead',
      'immersiveengineering:sheetmetal_nickel',
      'immersiveengineering:sheetmetal_silver',
      'immersiveengineering:sheetmetal_uranium',
      'immersiveengineering:slab_clinker_brick',
      'immersiveengineering:slab_concrete_brick',
      'immersiveengineering:slab_concrete_tile',
      'immersiveengineering:slab_concrete',
      'immersiveengineering:slab_hempcrete_brick',
      'immersiveengineering:slab_hempcrete',
      'immersiveengineering:slab_sheetmetal_aluminum',
      'immersiveengineering:slab_sheetmetal_colored_black',
      'immersiveengineering:slab_sheetmetal_colored_blue',
      'immersiveengineering:slab_sheetmetal_colored_brown',
      'immersiveengineering:slab_sheetmetal_colored_cyan',
      'immersiveengineering:slab_sheetmetal_colored_gray',
      'immersiveengineering:slab_sheetmetal_colored_green',
      'immersiveengineering:slab_sheetmetal_colored_light_blue',
      'immersiveengineering:slab_sheetmetal_colored_light_gray',
      'immersiveengineering:slab_sheetmetal_colored_lime',
      'immersiveengineering:slab_sheetmetal_colored_magenta',
      'immersiveengineering:slab_sheetmetal_colored_orange',
      'immersiveengineering:slab_sheetmetal_colored_pink',
      'immersiveengineering:slab_sheetmetal_colored_purple',
      'immersiveengineering:slab_sheetmetal_colored_red',
      'immersiveengineering:slab_sheetmetal_colored_white',
      'immersiveengineering:slab_sheetmetal_colored_yellow',
      'immersiveengineering:slab_sheetmetal_constantan',
      'immersiveengineering:slab_sheetmetal_copper',
      'immersiveengineering:slab_sheetmetal_electrum',
      'immersiveengineering:slab_sheetmetal_gold',
      'immersiveengineering:slab_sheetmetal_iron',
      'immersiveengineering:slab_sheetmetal_lead',
      'immersiveengineering:slab_sheetmetal_nickel',
      'immersiveengineering:slab_sheetmetal_silver',
      'immersiveengineering:slab_sheetmetal_uranium',
      'immersiveengineering:slab_storage_aluminum',
      'immersiveengineering:slab_storage_lead',
      'immersiveengineering:slab_storage_nickel',
      'immersiveengineering:slab_storage_silver',
      'immersiveengineering:slab_storage_uranium',
      'immersiveengineering:stairs_clinker_brick',
      'immersiveengineering:stairs_concrete_brick',
      'immersiveengineering:stairs_concrete_tile',
      'immersiveengineering:stairs_concrete',
      'immersiveengineering:stairs_hempcrete_brick',
      'immersiveengineering:stairs_hempcrete',
      'immersiveengineering:stairs_slag_brick',
    ]);

    event.add('mekanism:exception', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
      'mekanism:block_fluorite',
      'mekanism:block_raw_tin',
      'mekanism:block_raw_uranium',
      'mekanism:block_salt',
      'mekanism:block_steel',
      'mekanism:block_tin',
      'mekanism:block_uranium',
      'mekanism:deepslate_fluorite_ore',
      'mekanism:deepslate_tin_ore',
      'mekanism:deepslate_uranium_ore',
      'mekanism:dust_steel',
      'mekanism:fluorite_gem',
      'mekanism:fluorite_ore',
      'mekanism:ingot_steel',
      'mekanism:ingot_tin',
      'mekanism:ingot_uranium',
      'mekanism:nugget_steel',
      'mekanism:nugget_tin',
      'mekanism:nugget_uranium',
      'mekanism:raw_tin',
      'mekanism:raw_uranium',
      'mekanism:salt',
      'mekanism:tin_ore',
      'mekanism:uranium_ore',
    ]);

    event.add('ae2:exception', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
      'ae2:certus_quartz_axe',
      'ae2:certus_quartz_crystal',
      'ae2:certus_quartz_hoe',
      'ae2:certus_quartz_pickaxe',
      'ae2:certus_quartz_shovel',
      'ae2:certus_quartz_sword',
      'ae2:chiseled_quartz_block',
      'ae2:chiseled_quartz_wall',
      'ae2:cut_quartz_block',
      'ae2:cut_quartz_wall',
      'ae2:fluix_axe',
      'ae2:fluix_hoe',
      'ae2:fluix_pickaxe',
      'ae2:fluix_shovel',
      'ae2:fluix_sword',
      'ae2:meteorite_compass',
      'ae2:nether_quartz_axe',
      'ae2:nether_quartz_hoe',
      'ae2:nether_quartz_pickaxe',
      'ae2:nether_quartz_shovel',
      'ae2:nether_quartz_sword',
      'ae2:quartz_block',
      'ae2:quartz_brick_wall',
      'ae2:quartz_bricks',
      'ae2:quartz_glass',
      'ae2:quartz_pillar_wall',
      'ae2:quartz_pillar',
      'ae2:quartz_vibrant_glass',
      'ae2:quartz_wall',
      'ae2:silicon',
      'ae2:sky_stone_block',
      'ae2:sky_stone_brick_wall',
      'ae2:sky_stone_brick',
      'ae2:sky_stone_chest',
      'ae2:sky_stone_small_brick_wall',
      'ae2:sky_stone_small_brick',
      'ae2:sky_stone_wall',
      'ae2:smooth_quartz_block',
      'ae2:smooth_quartz_wall',
      'ae2:smooth_sky_stone_block',
      'ae2:smooth_sky_stone_chest',
      'ae2:smooth_sky_stone_wall',
      'ae2:tiny_tnt',
    ]);
  };

  /* Custom environments for Caged Mobs' mobs */
  const environments = () => {
    event.add('forge:ocean_blocks', [
      'minecraft:brain_coral_block',
      'minecraft:bubble_coral_block',
      'minecraft:dead_brain_coral_block',
      'minecraft:dead_bubble_coral_block',
      'minecraft:dead_fire_coral_block',
      'minecraft:dead_horn_coral_block',
      'minecraft:dead_tube_coral_block',
      'minecraft:fire_coral_block',
      'minecraft:gravel',
      'minecraft:horn_coral_block',
      'minecraft:sand',
      'minecraft:tube_coral_block',
    ]);

    event.add('forge:actual_underground_stones', [
      'create:asurine',
      'create:crimsite',
      'create:limestone',
      'create:scorchia',
      'create:scoria',
      'create:veridium',
      'minecraft:andesite',
      'minecraft:deepslate',
      'minecraft:dripstone_block',
      'minecraft:diorite',
      'minecraft:granite',
      'minecraft:tuff',
      'minecraft:calcite',
      'minecraft:calcite',
      'regions_unexplored:argillite',
      'regions_unexplored:chalk',
      'regions_unexplored:mossy_stone',
    ]);

    event.add('forge:podzol', [
      'regions_unexplored:silt_podzol',
      'minecraft:podzol',
      'regions_unexplored:peat_farmland',
      'regions_unexplored:peat_podzol',
      'regions_unexplored:peat_coarse_dirt',
      'regions_unexplored:peat_dirt',
      'regions_unexplored:peat_grass_block',
    ]);

    event.add('minecraft:mushroom_hyphae', [
      'aether_redux:cloudcap_hyphae',
      'aether_redux:springshroom_hyphae',
      'aether_redux:stripped_cloudcap_hyphae',
      'minecraft:crimson_hyphae',
      'minecraft:stripped_crimson_hyphae',
      'minecraft:stripped_warped_hyphae',
      'minecraft:warped_hyphae',
      'regions_unexplored:blue_bioshroom_hyphae',
      'regions_unexplored:green_bioshroom_hyphae',
      'regions_unexplored:pink_bioshroom_hyphae',
      'regions_unexplored:stripped_blue_bioshroom_hyphae',
      'regions_unexplored:stripped_green_bioshroom_hyphae',
      'regions_unexplored:stripped_pink_bioshroom_hyphae',
      'regions_unexplored:stripped_yellow_bioshroom_hyphae',
      'regions_unexplored:yellow_bioshroom_hyphae',
    ]);
  };

  /* Clean up various food things */
  const foods = () => {
    /* Add quail eggs to the Egg tag */
    event.add('forge:eggs', 'aether_redux:eggs_for_blueberry_pie');
    /* Add Skyroot Milk bucket to the milk tag */
    event.add('forge:milk', 'aether:skyroot_milk_bucket');
    /* Salmonberry compat */
    event.add('forge:berries', 'regions_unexplored:salmonberry');
    event.add('forge:fruits', 'regions_unexplored:salmonberry');
    event.add('forge:fruits/berries', 'regions_unexplored:salmonberry');
    event.add('forge:fruits/salmonberries', 'regions_unexplored:salmonberry');
    event.add('forge:fruits/sweet', 'regions_unexplored:salmonberry');
    event.removeAllTagsFrom('delightful:salmonberries');
  };

  /* Lumber variants and cleanup */
  const lumber = () => {
    global.StrippedLumber.logs.forEach(log => event.add('forge:stripped_logs', log));
    global.StrippedLumber.woods.forEach(wood => event.add('forge:stripped_wood', wood));

    /* Polishing tag */
    event.remove('minecraft:planks', 'eidolon:polished_planks');
    event.add('custom:polishable_planks', ['#minecraft:planks', '#aether:planks_crafting']);

    /* Sawdust Intercompat */
    event.removeAllTagsFrom('immersiveengineering:dust_wood');

    /* Everycomp beams aren't tagged as logs - let's fix that */
    event.add('minecraft:logs', '#decorative_blocks:beams');
    event.add('minecraft:logs_that_burn', '#decorative_blocks:beams_that_burn');
  };

  /* Osmium just isn't in our pack at all and should gets removed here */
  const osmium = () => {
    ['ingots', 'dusts', 'storage_blocks', 'raw_materials', 'ores', 'nuggets'].forEach(type => event.removeAll(`forge:${type}/osmium`));
    ['clumps', 'dirty_dusts', 'crystals', 'shards'].forEach(type => event.removeAll(`mekanism:${type}/osmium`));
    event.removeAll(`forge:storage_blocks/raw_osmium`);
  };

  /* Remove all tags from unused ore variants */
  ores.forEach(ore => event.removeAllTagsFrom(ore));
  /* Add other wrench-adjacent items to the wrench tag */
  event.add('forge:tools/wrench', ['mcwbridges:pliers', 'prettypipes:wrench']);
  /* Deduplicate Ash */
  event.remove('forge:ash', 'embers:ash');
  event.remove('forge:dusts/ash', 'embers:ash');
  /* Rope Intercompat */
  event.remove('forge:rope', 'supplementaries:rope');
  event.remove('supplementaries:ropes', 'supplementaries:rope');
  /* Tallow / Fat Intercompat */
  event.add('forge:tallow', 'delightful:animal_fat');
  /* Plastic Intercompat */
  event.add('pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet');
  /* Chiseled Bookshelf Compat */
  event.add('minecraft:bookshelf_books', ['ae2:guide', 'aether:book_of_lore', 'eidolon:codex', 'rftoolsbase:manual']);
  /* More Obsidian Variants */
  event.add('forge:obsidian', 'minecraft:crying_obsidian');
  event.add('forge:mud', ['regions_unexplored:silt_mud', 'regions_unexplored:peat_mud', 'minecraft:mud']);
  /* Add Silt Bricks to the brick tag */
  event.add('forge:ingots/brick', 'twigs:silt_brick');
  /* Swet Bols */
  event.add('aether:swet_balls', ['aether_redux:golden_swet_ball', 'aether_redux:vanilla_swet_ball', 'deep_aether:golden_swet_ball']);
  /* Saltpeter cleanup */
  event.remove('forge:dusts/saltpeter', 'bloodmagic:saltpeter');
  /* PNC Upgrades should use Upgrade Matrices */
  event.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli');
  /* Add custom Zinc Dust to its corresponding tag */
  event.add('forge:dusts/zinc', 'kubejs:zinc_dust');
  /* Refined Glowstone is primarily useless >_> */
  event.removeAllTagsFrom('mekanism:nugget_refined_glowstone');
  event.removeAllTagsFrom('mekanism:ingot_refined_glowstone');
  event.removeAllTagsFrom('mekanism:block_refined_glowstone');
  /* Farmer's Delight eggs */
  event.removeAllTagsFrom('farmersdelight:fried_egg');
  /* Create dough */
  event.removeAllTagsFrom('create:dough');
  /* IE Circuit Backplanes */
  event.add('immersiveengineering:circuits/pcb', 'pneumaticcraft:unassembled_pcb');
  /* Remove the unused Enchanted Gravitite Block as a proper repair material */
  event.remove('aether:gravitite_repairing', 'aether:enchanted_gravitite');

  /* Clean up Quark's messy tags -_- */
  [
    'quark:acacia_chest',
    'quark:ancient_chest',
    'quark:azalea_chest',
    'quark:bamboo_chest',
    'quark:birch_chest',
    'quark:blossom_chest',
    'quark:cherry_chest',
    'quark:crimson_chest',
    'quark:dark_oak_chest',
    'quark:jungle_chest',
    'quark:mangrove_chest',
    'quark:oak_chest',
    'quark:spruce_chest',
    'quark:warped_chest',
    'quark:acacia_trapped_chest',
    'quark:ancient_trapped_chest',
    'quark:azalea_trapped_chest',
    'quark:bamboo_trapped_chest',
    'quark:birch_trapped_chest',
    'quark:blossom_trapped_chest',
    'quark:cherry_trapped_chest',
    'quark:crimson_trapped_chest',
    'quark:dark_oak_trapped_chest',
    'quark:jungle_trapped_chest',
    'quark:mangrove_trapped_chest',
    'quark:oak_trapped_chest',
    'quark:spruce_trapped_chest',
    'quark:warped_trapped_chest',
  ].forEach(x => event.removeAllTagsFrom(x));

  // Quark Larger Hoe AOE for "good" hoes
  ['aether:gravitite_hoe', 'aether:valkyrie_hoe', 'deep_aether:stratus_hoe', 'embers:dawnstone_hoe', 'immersiveengineering:hoe_steel'].forEach(hoe =>
    event.add('quark:big_harvesting_hoes', hoe)
  );

  [colors, constructionBlocks, environments, exclusions, foods, lumber, osmium].forEach(module => module());
});

ServerEvents.tags('entity_type', event => {
  // Creepers are easy enough thanks to the existing tag
  event.add('forge:creepers', '#creeperoverhaul:creepers');

  // Endermen don't have a similar tag though :D
  event.add('forge:endermen', [
    'minecraft:enderman',
    'endermanoverhaul:badlands_enderman',
    'endermanoverhaul:cave_enderman',
    'endermanoverhaul:crimson_forest_enderman',
    'endermanoverhaul:dark_oak_enderman',
    'endermanoverhaul:desert_enderman',
    'endermanoverhaul:end_enderman',
    'endermanoverhaul:end_islands_enderman',
    'endermanoverhaul:flower_fields_enderman',
    'endermanoverhaul:ice_spikes_enderman',
    'endermanoverhaul:mushroom_fields_enderman',
    'endermanoverhaul:nether_wastes_enderman',
    'endermanoverhaul:ocean_enderman',
    'endermanoverhaul:savanna_enderman',
    'endermanoverhaul:snowy_enderman',
    'endermanoverhaul:soulsand_valley_enderman',
    'endermanoverhaul:swamp_enderman',
    'endermanoverhaul:warped_forest_enderman',
    'endermanoverhaul:windswept_hills_enderman',
  ]);

  event.add('minecraft:zombies', ['minecraft:drowned', 'minecraft:husk', 'minecraft:zombie', 'minecraft:zombie_villager']);

  // Make all entities unlaunchable -- this is a workaround because the ability to yeet mobs in the air is more annoying than helpful...
  event.add(
    'aether:unlaunchable',
    Utils.getRegistryIds(new ResourceLocation('minecraft', 'entity_type')).map(x => `${x.getNamespace()}:${x.getPath()}`)
  );
});

ServerEvents.tags('fluid', event => {
  event.removeAll('minecraft:water');
  event.add('minecraft:water', 'minecraft:water');
  event.add('minecraft:water', 'minecraft:flowing_water');

  event.remove('forge:honey', 'productivebees:honey');

  event.remove('forge:biodiesel', 'pneumaticcraft:biodiesel');
  event.remove('forge:biodiesel', 'pneumaticcraft:biodiesel_flowing');

  event.remove('forge:ethanol', 'pneumaticcraft:ethanol');
  event.remove('forge:ethanol', 'pneumaticcraft:ethanol_flowing');
});

ServerEvents.tags('dimension_type', event => {
  event.add('vtweaks:peaceful_surface_blacklist_dims', 'bloodmagic:dungeon');
});
