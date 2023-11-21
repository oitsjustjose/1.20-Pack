const __DebugFind = event => {
  const ItemOrNull = resloc => {
    const ret = Item.of(resloc);
    return ret.isEmpty() ? null : ret;
  };

  [
    // PUT NEW SLABS HERE!
  ].forEach(slab => {
    const Base = slab.replace('_slab', '').replace('slab_', '');
    const Tries = [
      `${Base}_planks`, // i.e. {oak}_planks
      `${Base}_block`, // i.e. {quartz}_block
      `${Base}s`, // i.e. {stone_brick}s
      Base, // i.e. {stone}
    ];

    let Choices = Tries.map(ItemOrNull).filter(x => !!x);

    if (Choices.length === 0) {
      console.error(`Failed to find the fullblock for ${slab}, tried ${Tries.join(', ')}`);
      return;
    }

    if (Choices.length > 1) {
      // in the case of ["walnut_planks", "walnut"] we don't want to pick the base if other options are available..
      Choices = Choices.filter(x => x !== Base);
    }

    if (Choices.length == 1) {
      console.log(`{slab:'${slab}',full:'${Choices[0]}'}`);
    } else {
      console.error(`{slab:'${slab}',full:[${Choices.map(x => `'${x}'`).join(', ')}]}`);
    }
  });
};

ServerEvents.recipes(event => {
  const Chunkloaders = () => {
    event.remove({output: 'chunkloaders:basic_chunk_loader'});
    event.shaped('chunkloaders:basic_chunk_loader', ['ABA', 'BCB', 'ABA'], {
      A: ['#forge:ingots/steel', '#forge:ingots/dark_steel'],
      B: '#forge:obsidian',
      C: '#forge:ender_pearls',
    });
  };

  const Entangled = () => {
    event.remove({output: 'entangled:block'});
    event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
      A: 'endermanoverhaul:soul_pearl',
      B: '#forge:obsidian',
      C: 'dimstorage:dimensional_chest',
    });
  };

  const Powah = () => {
    event.custom({
      type: 'powah:energizing',
      ingredients: [{item: 'mekanism:raw_uranium'}],
      energy: 500,
      result: {
        item: 'powah:uraninite',
        count: 3,
      },
    });
  };

  const Slabs = () => {
    [
      {slab: 'ae2:chiseled_quartz_slab', full: 'ae2:chiseled_quartz_block'},
      {slab: 'ae2:cut_quartz_slab', full: 'ae2:cut_quartz_block'},
      {slab: 'ae2:fluix_slab', full: 'ae2:fluix_block'},
      {slab: 'ae2:quartz_brick_slab', full: 'ae2:quartz_bricks'},
      {slab: 'ae2:quartz_pillar_slab', full: 'ae2:quartz_pillar'},
      {slab: 'ae2:quartz_slab', full: 'ae2:quartz_block'},
      {slab: 'ae2:sky_stone_brick_slab', full: 'ae2:sky_stone_brick'},
      {slab: 'ae2:sky_stone_slab', full: 'ae2:sky_stone_block'},
      {slab: 'ae2:sky_stone_small_brick_slab', full: 'ae2:sky_stone_small_brick'},
      {slab: 'ae2:smooth_quartz_slab', full: 'ae2:smooth_quartz_block'},
      {slab: 'ae2:smooth_sky_stone_slab', full: 'ae2:smooth_sky_stone_block'},
      {slab: 'aether_redux:blightmoss_holystone_slab', full: 'aether_redux:blightmoss_holystone'},
      {slab: 'aether_redux:blightwillow_slab', full: 'aether_redux:blightwillow_planks'},
      {slab: 'aether_redux:carved_stone_brick_slab', full: 'aether_redux:carved_stone_bricks'},
      {slab: 'aether_redux:cloudcap_slab', full: 'aether_redux:cloudcap_planks'},
      {slab: 'aether_redux:crystal_slab', full: 'aether_redux:crystal_planks'},
      {slab: 'aether_redux:fieldsprout_slab', full: 'aether_redux:fieldsprout_planks'},
      {slab: 'aether_redux:frosted_holystone_slab', full: 'aether_redux:frosted_holystone'},
      {slab: 'aether_redux:gilded_holystone_slab', full: 'aether_redux:gilded_holystone'},
      {slab: 'aether_redux:glacia_slab', full: 'aether_redux:glacia_planks'},
      {slab: 'aether_redux:springshroom_slab', full: 'aether_redux:springshroom_planks'},
      {slab: 'aether_redux:vitrium_brick_slab', full: 'aether_redux:vitrium_bricks'},
      {slab: 'aether_redux:vitrium_slab', full: 'aether_redux:vitrium'},
      {slab: 'aether:aerogel_slab', full: 'aether:aerogel'},
      {slab: 'aether:angelic_slab', full: 'aether:angelic_stone'},
      {slab: 'aether:carved_slab', full: 'aether:carved_stone'},
      {slab: 'aether:hellfire_slab', full: 'aether:hellfire_stone'},
      {slab: 'aether:holystone_brick_slab', full: 'aether:holystone_bricks'},
      {slab: 'aether:holystone_slab', full: 'aether:holystone'},
      {slab: 'aether:icestone_slab', full: 'aether:icestone'},
      {slab: 'aether:mossy_holystone_slab', full: 'aether:mossy_holystone'},
      {slab: 'aether:skyroot_slab', full: 'aether:skyroot_planks'},
      {slab: 'bloodmagic:dungeon_brick_slab', full: 'bloodmagic:dungeon_brick1'},
      {slab: 'bloodmagic:dungeon_tile_slab', full: 'bloodmagic:dungeon_tile'},
      {slab: 'create:copper_shingle_slab', full: 'create:copper_shingles'},
      {slab: 'create:copper_tile_slab', full: 'create:copper_tiles'},
      {slab: 'create:cut_andesite_brick_slab', full: 'create:cut_andesite_bricks'},
      {slab: 'create:cut_andesite_slab', full: 'create:cut_andesite'},
      {slab: 'create:cut_asurine_brick_slab', full: 'create:cut_asurine_bricks'},
      {slab: 'create:cut_asurine_slab', full: 'create:cut_asurine'},
      {slab: 'create:cut_calcite_brick_slab', full: 'create:cut_calcite_bricks'},
      {slab: 'create:cut_calcite_slab', full: 'create:cut_calcite'},
      {slab: 'create:cut_crimsite_brick_slab', full: 'create:cut_crimsite_bricks'},
      {slab: 'create:cut_crimsite_slab', full: 'create:cut_crimsite'},
      {slab: 'create:cut_deepslate_brick_slab', full: 'create:cut_deepslate_bricks'},
      {slab: 'create:cut_deepslate_slab', full: 'create:cut_deepslate'},
      {slab: 'create:cut_diorite_brick_slab', full: 'create:cut_diorite_bricks'},
      {slab: 'create:cut_diorite_slab', full: 'create:cut_diorite'},
      {slab: 'create:cut_dripstone_brick_slab', full: 'create:cut_dripstone_bricks'},
      {slab: 'create:cut_dripstone_slab', full: 'create:cut_dripstone'},
      {slab: 'create:cut_granite_brick_slab', full: 'create:cut_granite_bricks'},
      {slab: 'create:cut_granite_slab', full: 'create:cut_granite'},
      {slab: 'create:cut_limestone_brick_slab', full: 'create:cut_limestone_bricks'},
      {slab: 'create:cut_limestone_slab', full: 'create:cut_limestone'},
      {slab: 'create:cut_ochrum_brick_slab', full: 'create:cut_ochrum_bricks'},
      {slab: 'create:cut_ochrum_slab', full: 'create:cut_ochrum'},
      {slab: 'create:cut_scorchia_brick_slab', full: 'create:cut_scorchia_bricks'},
      {slab: 'create:cut_scorchia_slab', full: 'create:cut_scorchia'},
      {slab: 'create:cut_scoria_brick_slab', full: 'create:cut_scoria_bricks'},
      {slab: 'create:cut_scoria_slab', full: 'create:cut_scoria'},
      {slab: 'create:cut_tuff_brick_slab', full: 'create:cut_tuff_bricks'},
      {slab: 'create:cut_tuff_slab', full: 'create:cut_tuff'},
      {slab: 'create:cut_veridium_brick_slab', full: 'create:cut_veridium_bricks'},
      {slab: 'create:cut_veridium_slab', full: 'create:cut_veridium'},
      {slab: 'create:exposed_copper_shingle_slab', full: 'create:exposed_copper_shingles'},
      {slab: 'create:exposed_copper_tile_slab', full: 'create:exposed_copper_tiles'},
      {slab: 'create:oxidized_copper_shingle_slab', full: 'create:oxidized_copper_shingles'},
      {slab: 'create:oxidized_copper_tile_slab', full: 'create:oxidized_copper_tiles'},
      {slab: 'create:polished_cut_andesite_slab', full: 'create:polished_cut_andesite'},
      {slab: 'create:polished_cut_asurine_slab', full: 'create:polished_cut_asurine'},
      {slab: 'create:polished_cut_calcite_slab', full: 'create:polished_cut_calcite'},
      {slab: 'create:polished_cut_crimsite_slab', full: 'create:polished_cut_crimsite'},
      {slab: 'create:polished_cut_deepslate_slab', full: 'create:polished_cut_deepslate'},
      {slab: 'create:polished_cut_diorite_slab', full: 'create:polished_cut_diorite'},
      {slab: 'create:polished_cut_dripstone_slab', full: 'create:polished_cut_dripstone'},
      {slab: 'create:polished_cut_granite_slab', full: 'create:polished_cut_granite'},
      {slab: 'create:polished_cut_limestone_slab', full: 'create:polished_cut_limestone'},
      {slab: 'create:polished_cut_ochrum_slab', full: 'create:polished_cut_ochrum'},
      {slab: 'create:polished_cut_scorchia_slab', full: 'create:polished_cut_scorchia'},
      {slab: 'create:polished_cut_scoria_slab', full: 'create:polished_cut_scoria'},
      {slab: 'create:polished_cut_tuff_slab', full: 'create:polished_cut_tuff'},
      {slab: 'create:polished_cut_veridium_slab', full: 'create:polished_cut_veridium'},
      {slab: 'create:small_andesite_brick_slab', full: 'create:small_andesite_bricks'},
      {slab: 'create:small_asurine_brick_slab', full: 'create:small_asurine_bricks'},
      {slab: 'create:small_calcite_brick_slab', full: 'create:small_calcite_bricks'},
      {slab: 'create:small_crimsite_brick_slab', full: 'create:small_crimsite_bricks'},
      {slab: 'create:small_deepslate_brick_slab', full: 'create:small_deepslate_bricks'},
      {slab: 'create:small_diorite_brick_slab', full: 'create:small_diorite_bricks'},
      {slab: 'create:small_dripstone_brick_slab', full: 'create:small_dripstone_bricks'},
      {slab: 'create:small_granite_brick_slab', full: 'create:small_granite_bricks'},
      {slab: 'create:small_limestone_brick_slab', full: 'create:small_limestone_bricks'},
      {slab: 'create:small_ochrum_brick_slab', full: 'create:small_ochrum_bricks'},
      {slab: 'create:small_scorchia_brick_slab', full: 'create:small_scorchia_bricks'},
      {slab: 'create:small_scoria_brick_slab', full: 'create:small_scoria_bricks'},
      {slab: 'create:small_tuff_brick_slab', full: 'create:small_tuff_bricks'},
      {slab: 'create:small_veridium_brick_slab', full: 'create:small_veridium_bricks'},
      {slab: 'create:waxed_copper_shingle_slab', full: 'create:waxed_copper_shingles'},
      {slab: 'create:waxed_copper_tile_slab', full: 'create:waxed_copper_tiles'},
      {slab: 'create:waxed_exposed_copper_shingle_slab', full: 'create:waxed_exposed_copper_shingles'},
      {slab: 'create:waxed_exposed_copper_tile_slab', full: 'create:waxed_exposed_copper_tiles'},
      {slab: 'create:waxed_oxidized_copper_shingle_slab', full: 'create:waxed_oxidized_copper_shingles'},
      {slab: 'create:waxed_oxidized_copper_tile_slab', full: 'create:waxed_oxidized_copper_tiles'},
      {slab: 'create:waxed_weathered_copper_shingle_slab', full: 'create:waxed_weathered_copper_shingles'},
      {slab: 'create:waxed_weathered_copper_tile_slab', full: 'create:waxed_weathered_copper_tiles'},
      {slab: 'create:weathered_copper_shingle_slab', full: 'create:weathered_copper_shingles'},
      {slab: 'create:weathered_copper_tile_slab', full: 'create:weathered_copper_tiles'},
      {slab: 'deep_aether:aether_mud_bricks_slab', full: 'deep_aether:aether_mud_bricks'},
      {slab: 'deep_aether:aseterite_bricks_slab', full: 'deep_aether:aseterite_bricks'},
      {slab: 'deep_aether:aseterite_slab', full: 'deep_aether:aseterite'},
      {slab: 'deep_aether:big_holystone_bricks_slab', full: 'deep_aether:big_holystone_bricks'},
      {slab: 'deep_aether:blightmoss_holystone_brick_slab', full: 'deep_aether:blightmoss_holystone_bricks'},
      {slab: 'deep_aether:blightmoss_holystone_tile_slab', full: 'deep_aether:blightmoss_holystone_tiles'},
      {slab: 'deep_aether:clorite_slab', full: 'deep_aether:clorite'},
      {slab: 'deep_aether:cobbled_aseterite_slab', full: 'deep_aether:cobbled_aseterite'},
      {slab: 'deep_aether:conberry_slab', full: 'deep_aether:conberry_planks'},
      {slab: 'deep_aether:cruderoot_slab', full: 'deep_aether:cruderoot_planks'},
      {slab: 'deep_aether:frosted_holystone_brick_slab', full: 'deep_aether:frosted_holystone_bricks'},
      {slab: 'deep_aether:frosted_holystone_tile_slab', full: 'deep_aether:frosted_holystone_tiles'},
      {slab: 'deep_aether:gilded_holystone_brick_slab', full: 'deep_aether:gilded_holystone_bricks'},
      {slab: 'deep_aether:gilded_holystone_tile_slab', full: 'deep_aether:gilded_holystone_tiles'},
      {slab: 'deep_aether:holystone_tile_slab', full: 'deep_aether:holystone_tiles'},
      {slab: 'deep_aether:mossy_holystone_brick_slab', full: 'deep_aether:mossy_holystone_bricks'},
      {slab: 'deep_aether:mossy_holystone_tile_slab', full: 'deep_aether:mossy_holystone_tiles'},
      {slab: 'deep_aether:polished_aseterite_slab', full: 'deep_aether:polished_aseterite'},
      {slab: 'deep_aether:polished_clorite_slab', full: 'deep_aether:polished_clorite'},
      {slab: 'deep_aether:raw_clorite_slab', full: 'deep_aether:raw_clorite'},
      {slab: 'deep_aether:roseroot_slab', full: 'deep_aether:roseroot_planks'},
      {slab: 'deep_aether:sunroot_slab', full: 'deep_aether:sunroot_planks'},
      {slab: 'deep_aether:yagroot_slab', full: 'deep_aether:yagroot_planks'},
      {slab: 'ecologics:azalea_slab', full: 'ecologics:azalea_planks'},
      {slab: 'ecologics:coconut_slab', full: 'ecologics:coconut_planks'},
      {slab: 'ecologics:flowering_azalea_slab', full: 'ecologics:flowering_azalea_planks'},
      {slab: 'ecologics:ice_brick_slab', full: 'ecologics:ice_bricks'},
      {slab: 'ecologics:seashell_tile_slab', full: 'ecologics:seashell_tiles'},
      {slab: 'ecologics:snow_brick_slab', full: 'ecologics:snow_bricks'},
      {slab: 'ecologics:walnut_slab', full: 'ecologics:walnut_planks'},
      {slab: 'eidolon:bone_pile_slab', full: 'eidolon:bone_pile'},
      {slab: 'eidolon:elder_bricks_slab', full: 'eidolon:elder_bricks'},
      {slab: 'eidolon:elder_masonry_slab', full: 'eidolon:elder_masonry'},
      {slab: 'eidolon:illwood_planks_slab', full: 'eidolon:illwood_planks'},
      {slab: 'eidolon:polished_planks_slab', full: 'eidolon:polished_planks'},
      {slab: 'eidolon:smooth_stone_bricks_slab', full: 'eidolon:smooth_stone_bricks'},
      {slab: 'eidolon:smooth_stone_masonry_slab', full: 'eidolon:smooth_stone_masonry'},
      {slab: 'eidolon:smooth_stone_tiles_slab', full: 'eidolon:smooth_stone_tiles'},
      {slab: 'embers:archaic_bricks_slab', full: 'embers:archaic_bricks'},
      {slab: 'embers:archaic_tile_slab', full: 'embers:archaic_tile'},
      {slab: 'embers:ashen_brick_slab', full: 'embers:ashen_brick'},
      {slab: 'embers:ashen_stone_slab', full: 'embers:ashen_stone'},
      {slab: 'embers:ashen_tile_slab', full: 'embers:ashen_tile'},
      {slab: 'embers:caminite_bricks_slab', full: 'embers:caminite_bricks'},
      {slab: 'enlightened_end:bismuth_sheet_slab', full: 'enlightened_end:bismuth_sheets'},
      {slab: 'enlightened_end:cerulean_slab', full: 'enlightened_end:cerulean_planks'},
      {slab: 'enlightened_end:dazzling_bismuth_slab', full: 'enlightened_end:dazzling_bismuth_block'},
      {slab: 'enlightened_end:depleted_irradium_brick_slab', full: 'enlightened_end:depleted_irradium_bricks'},
      {slab: 'enlightened_end:end_stone_slab', full: 'minecraft:end_stone'},
      {slab: 'enlightened_end:end_stone_tile_slab', full: 'enlightened_end:end_stone_tiles'},
      {slab: 'enlightened_end:ethereal_bismuth_sheet_slab', full: 'enlightened_end:ethereal_bismuth_sheets'},
      {slab: 'enlightened_end:glacium_brick_slab', full: 'enlightened_end:glacium_bricks'},
      {slab: 'enlightened_end:indigo_slab', full: 'enlightened_end:indigo_planks'},
      {slab: 'enlightened_end:iridescent_bismuth_sheet_slab', full: 'enlightened_end:iridescent_bismuth_sheets'},
      {slab: 'enlightened_end:irradium_brick_slab', full: 'enlightened_end:irradium_bricks'},
      {slab: 'enlightened_end:malachite_brick_slab', full: 'enlightened_end:malachite_bricks'},
      {slab: 'enlightened_end:malachite_slab', full: 'enlightened_end:malachite_block'},
      {slab: 'enlightened_end:malachite_tile_slab', full: 'enlightened_end:malachite_tiles'},
      {slab: 'enlightened_end:palerock_brick_slab', full: 'enlightened_end:palerock_bricks'},
      {slab: 'enlightened_end:palerock_slab', full: 'enlightened_end:palerock'},
      {slab: 'enlightened_end:palerock_tile_slab', full: 'enlightened_end:palerock_tiles'},
      {slab: 'enlightened_end:poise_bismuth_sheet_slab', full: 'enlightened_end:poise_bismuth_sheets'},
      {slab: 'enlightened_end:polished_malachite_slab', full: 'enlightened_end:polished_malachite'},
      {slab: 'enlightened_end:polished_palerock_slab', full: 'enlightened_end:polished_palerock'},
      {slab: 'enlightened_end:polished_void_shale_slab', full: 'enlightened_end:polished_void_shale'},
      {slab: 'enlightened_end:serene_bismuth_sheet_slab', full: 'enlightened_end:serene_bismuth_sheets'},
      {slab: 'enlightened_end:smooth_purpur_slab', full: 'enlightened_end:smooth_purpur'},
      {slab: 'enlightened_end:verdant_bismuth_sheet_slab', full: 'enlightened_end:verdant_bismuth_sheets'},
      {slab: 'enlightened_end:void_shale_brick_slab', full: 'enlightened_end:void_shale_bricks'},
      {slab: 'enlightened_end:void_shale_slab', full: 'enlightened_end:void_shale'},
      {slab: 'enlightened_end:void_shale_tile_slab', full: 'enlightened_end:void_shale_tiles'},
      {slab: 'enlightened_end:waxed_bismuth_sheet_slab', full: 'enlightened_end:waxed_bismuth_sheets'},
      {slab: 'framedblocks:framed_double_slope_slab', full: 'framedblocks:framed_double_slope'},
      {slab: 'framedblocks:framed_pyramid_slab', full: 'framedblocks:framed_pyramid'},
      {slab: 'framedblocks:framed_slope_slab', full: 'framedblocks:framed_slope'},
      {slab: 'minecraft:acacia_slab', full: 'minecraft:acacia_planks'},
      {slab: 'minecraft:andesite_slab', full: 'minecraft:andesite'},
      {slab: 'minecraft:bamboo_mosaic_slab', full: 'minecraft:bamboo_mosaic'},
      {slab: 'minecraft:bamboo_slab', full: 'bamboo_planks'},
      {slab: 'minecraft:birch_slab', full: 'minecraft:birch_planks'},
      {slab: 'minecraft:blackstone_slab', full: 'minecraft:blackstone'},
      {slab: 'minecraft:brick_slab', full: 'minecraft:bricks'},
      {slab: 'minecraft:cherry_slab', full: 'minecraft:cherry_planks'},
      {slab: 'minecraft:cobbled_deepslate_slab', full: 'minecraft:cobbled_deepslate'},
      {slab: 'minecraft:cobblestone_slab', full: 'minecraft:cobblestone'},
      {slab: 'minecraft:crimson_slab', full: 'minecraft:crimson_planks'},
      {slab: 'minecraft:cut_copper_slab', full: 'minecraft:cut_copper'},
      {slab: 'minecraft:cut_red_sandstone_slab', full: 'minecraft:cut_red_sandstone'},
      {slab: 'minecraft:cut_sandstone_slab', full: 'minecraft:cut_sandstone'},
      {slab: 'minecraft:dark_oak_slab', full: 'minecraft:dark_oak_planks'},
      {slab: 'minecraft:dark_prismarine_slab', full: 'minecraft:dark_prismarine'},
      {slab: 'minecraft:deepslate_brick_slab', full: 'minecraft:deepslate_bricks'},
      {slab: 'minecraft:deepslate_tile_slab', full: 'minecraft:deepslate_tiles'},
      {slab: 'minecraft:diorite_slab', full: 'minecraft:diorite'},
      {slab: 'minecraft:end_stone_brick_slab', full: 'minecraft:end_stone_bricks'},
      {slab: 'minecraft:exposed_cut_copper_slab', full: 'minecraft:exposed_cut_copper'},
      {slab: 'minecraft:granite_slab', full: 'minecraft:granite'},
      {slab: 'minecraft:jungle_slab', full: 'minecraft:jungle_planks'},
      {slab: 'minecraft:mangrove_slab', full: 'minecraft:mangrove_planks'},
      {slab: 'minecraft:mossy_cobblestone_slab', full: 'minecraft:mossy_cobblestone'},
      {slab: 'minecraft:mossy_stone_brick_slab', full: 'minecraft:mossy_stone_bricks'},
      {slab: 'minecraft:mud_brick_slab', full: 'minecraft:mud_bricks'},
      {slab: 'minecraft:nether_brick_slab', full: 'minecraft:nether_bricks'},
      {slab: 'minecraft:oak_slab', full: 'minecraft:oak_planks'},
      {slab: 'minecraft:oxidized_cut_copper_slab', full: 'minecraft:oxidized_cut_copper'},
      {slab: 'minecraft:polished_andesite_slab', full: 'minecraft:polished_andesite'},
      {slab: 'minecraft:polished_blackstone_brick_slab', full: 'minecraft:polished_blackstone_bricks'},
      {slab: 'minecraft:polished_blackstone_slab', full: 'minecraft:polished_blackstone'},
      {slab: 'minecraft:polished_deepslate_slab', full: 'minecraft:polished_deepslate'},
      {slab: 'minecraft:polished_diorite_slab', full: 'minecraft:polished_diorite'},
      {slab: 'minecraft:polished_granite_slab', full: 'minecraft:polished_granite'},
      {slab: 'minecraft:prismarine_brick_slab', full: 'minecraft:prismarine_bricks'},
      {slab: 'minecraft:prismarine_slab', full: 'minecraft:prismarine'},
      {slab: 'minecraft:purpur_slab', full: 'minecraft:purpur_block'},
      {slab: 'minecraft:quartz_slab', full: 'minecraft:quartz_block'},
      {slab: 'minecraft:red_nether_brick_slab', full: 'minecraft:red_nether_bricks'},
      {slab: 'minecraft:red_sandstone_slab', full: 'minecraft:red_sandstone'},
      {slab: 'minecraft:sandstone_slab', full: 'minecraft:sandstone'},
      {slab: 'minecraft:smooth_quartz_slab', full: 'minecraft:smooth_quartz'},
      {slab: 'minecraft:smooth_red_sandstone_slab', full: 'minecraft:smooth_red_sandstone'},
      {slab: 'minecraft:smooth_sandstone_slab', full: 'minecraft:smooth_sandstone'},
      {slab: 'minecraft:smooth_stone_slab', full: 'minecraft:smooth_stone'},
      {slab: 'minecraft:spruce_slab', full: 'minecraft:spruce_planks'},
      {slab: 'minecraft:stone_brick_slab', full: 'minecraft:stone_bricks'},
      {slab: 'minecraft:stone_slab', full: 'minecraft:stone'},
      {slab: 'minecraft:warped_slab', full: 'minecraft:warped_planks'},
      {slab: 'minecraft:waxed_cut_copper_slab', full: 'minecraft:waxed_cut_copper'},
      {slab: 'minecraft:waxed_exposed_cut_copper_slab', full: 'minecraft:waxed_exposed_cut_copper'},
      {slab: 'minecraft:waxed_oxidized_cut_copper_slab', full: 'minecraft:waxed_oxidized_cut_copper'},
      {slab: 'minecraft:waxed_weathered_cut_copper_slab', full: 'minecraft:waxed_weathered_cut_copper'},
      {slab: 'minecraft:weathered_cut_copper_slab', full: 'minecraft:weathered_cut_copper'},
      {slab: 'naturalist:cut_shellstone_slab', full: 'naturalist:cut_shellstone'},
      {slab: 'naturalist:shellstone_brick_slab', full: 'naturalist:shellstone_bricks'},
      {slab: 'naturalist:shellstone_slab', full: 'naturalist:shellstone'},
      {slab: 'naturalist:smooth_shellstone_slab', full: 'naturalist:smooth_shellstone'},
      {slab: 'regions_unexplored:alpha_slab', full: 'regions_unexplored:alpha_planks'},
      {slab: 'regions_unexplored:baobab_slab', full: 'regions_unexplored:baobab_planks'},
      {slab: 'regions_unexplored:black_painted_slab', full: 'regions_unexplored:black_painted_planks'},
      {slab: 'regions_unexplored:blackwood_slab', full: 'regions_unexplored:blackwood_planks'},
      {slab: 'regions_unexplored:blue_bioshroom_slab', full: 'regions_unexplored:blue_bioshroom_planks'},
      {slab: 'regions_unexplored:blue_painted_slab', full: 'regions_unexplored:blue_painted_planks'},
      {slab: 'regions_unexplored:brimwood_slab', full: 'regions_unexplored:brimwood_planks'},
      {slab: 'regions_unexplored:brown_painted_slab', full: 'regions_unexplored:brown_painted_planks'},
      {slab: 'regions_unexplored:chalk_brick_slab', full: 'regions_unexplored:chalk_bricks'},
      {slab: 'regions_unexplored:chalk_slab', full: 'regions_unexplored:chalk'},
      {slab: 'regions_unexplored:cobalt_slab', full: 'regions_unexplored:cobalt_planks'},
      {slab: 'regions_unexplored:cyan_painted_slab', full: 'regions_unexplored:cyan_painted_planks'},
      {slab: 'regions_unexplored:cypress_slab', full: 'regions_unexplored:cypress_planks'},
      {slab: 'regions_unexplored:dead_slab', full: 'regions_unexplored:dead_planks'},
      {slab: 'regions_unexplored:eucalyptus_slab', full: 'regions_unexplored:eucalyptus_planks'},
      {slab: 'regions_unexplored:gray_painted_slab', full: 'regions_unexplored:gray_painted_planks'},
      {slab: 'regions_unexplored:green_bioshroom_slab', full: 'regions_unexplored:green_bioshroom_planks'},
      {slab: 'regions_unexplored:green_painted_slab', full: 'regions_unexplored:green_painted_planks'},
      {slab: 'regions_unexplored:joshua_slab', full: 'regions_unexplored:joshua_planks'},
      {slab: 'regions_unexplored:kapok_slab', full: 'regions_unexplored:kapok_planks'},
      {slab: 'regions_unexplored:larch_slab', full: 'regions_unexplored:larch_planks'},
      {slab: 'regions_unexplored:light_blue_painted_slab', full: 'regions_unexplored:light_blue_painted_planks'},
      {slab: 'regions_unexplored:light_gray_painted_slab', full: 'regions_unexplored:light_gray_painted_planks'},
      {slab: 'regions_unexplored:lime_painted_slab', full: 'regions_unexplored:lime_painted_planks'},
      {slab: 'regions_unexplored:magenta_painted_slab', full: 'regions_unexplored:magenta_painted_planks'},
      {slab: 'regions_unexplored:magnolia_slab', full: 'regions_unexplored:magnolia_planks'},
      {slab: 'regions_unexplored:maple_slab', full: 'regions_unexplored:maple_planks'},
      {slab: 'regions_unexplored:mauve_slab', full: 'regions_unexplored:mauve_planks'},
      {slab: 'regions_unexplored:orange_painted_slab', full: 'regions_unexplored:orange_painted_planks'},
      {slab: 'regions_unexplored:palm_slab', full: 'regions_unexplored:palm_planks'},
      {slab: 'regions_unexplored:pine_slab', full: 'regions_unexplored:pine_planks'},
      {slab: 'regions_unexplored:pink_bioshroom_slab', full: 'regions_unexplored:pink_bioshroom_planks'},
      {slab: 'regions_unexplored:pink_painted_slab', full: 'regions_unexplored:pink_painted_planks'},
      {slab: 'regions_unexplored:polished_chalk_slab', full: 'regions_unexplored:polished_chalk'},
      {slab: 'regions_unexplored:purple_painted_slab', full: 'regions_unexplored:purple_painted_planks'},
      {slab: 'regions_unexplored:red_painted_slab', full: 'regions_unexplored:red_painted_planks'},
      {slab: 'regions_unexplored:redwood_slab', full: 'regions_unexplored:redwood_planks'},
      {slab: 'regions_unexplored:socotra_slab', full: 'regions_unexplored:socotra_planks'},
      {slab: 'regions_unexplored:white_painted_slab', full: 'regions_unexplored:white_painted_planks'},
      {slab: 'regions_unexplored:willow_slab', full: 'regions_unexplored:willow_planks'},
      {slab: 'regions_unexplored:yellow_bioshroom_slab', full: 'regions_unexplored:yellow_bioshroom_planks'},
      {slab: 'regions_unexplored:yellow_painted_slab', full: 'regions_unexplored:yellow_painted_planks'},
      {slab: 'spawn:rotten_slab', full: 'spawn:rotten_planks'},
      {slab: 'spawn:snail_shell_tile_slab', full: 'spawn:snail_shell_tiles'},
      {slab: 'supplementaries:ash_bricks_slab', full: 'supplementaries:ash_bricks'},
      {slab: 'supplementaries:blackstone_tile_slab', full: 'supplementaries:blackstone_tile'},
      {slab: 'supplementaries:checker_slab', full: 'supplementaries:checker_block'},
      {slab: 'supplementaries:lapis_bricks_slab', full: 'supplementaries:lapis_bricks'},
      {slab: 'supplementaries:stone_tile_slab', full: 'supplementaries:stone_tile'},
      {slab: 'twigs:bamboo_thatch_slab', full: 'twigs:bamboo_thatch'},
      {slab: 'twigs:black_silt_shingle_slab', full: 'twigs:black_silt_shingles'},
      {slab: 'twigs:bloodstone_slab', full: 'twigs:bloodstone'},
      {slab: 'twigs:blue_silt_shingle_slab', full: 'twigs:blue_silt_shingles'},
      {slab: 'twigs:brown_silt_shingle_slab', full: 'twigs:brown_silt_shingles'},
      {slab: 'twigs:calcite_slab', full: 'minecraft:calcite'},
      {slab: 'twigs:cobblestone_brick_slab', full: 'twigs:cobblestone_bricks'},
      {slab: 'twigs:cyan_silt_shingle_slab', full: 'twigs:cyan_silt_shingles'},
      {slab: 'twigs:gravel_brick_slab', full: 'twigs:gravel_bricks'},
      {slab: 'twigs:gray_silt_shingle_slab', full: 'twigs:gray_silt_shingles'},
      {slab: 'twigs:green_silt_shingle_slab', full: 'twigs:green_silt_shingles'},
      {slab: 'twigs:light_blue_silt_shingle_slab', full: 'twigs:light_blue_silt_shingles'},
      {slab: 'twigs:light_gray_silt_shingle_slab', full: 'twigs:light_gray_silt_shingles'},
      {slab: 'twigs:lime_silt_shingle_slab', full: 'twigs:lime_silt_shingles'},
      {slab: 'twigs:magenta_silt_shingle_slab', full: 'twigs:magenta_silt_shingles'},
      {slab: 'twigs:mossy_brick_slab', full: 'twigs:mossy_bricks'},
      {slab: 'twigs:mossy_cobblestone_brick_slab', full: 'twigs:mossy_cobblestone_bricks'},
      {slab: 'twigs:orange_silt_shingle_slab', full: 'twigs:orange_silt_shingles'},
      {slab: 'twigs:pink_silt_shingle_slab', full: 'twigs:pink_silt_shingles'},
      {slab: 'twigs:polished_bloodstone_brick_slab', full: 'twigs:polished_bloodstone_bricks'},
      {slab: 'twigs:polished_bloodstone_slab', full: 'twigs:polished_bloodstone'},
      {slab: 'twigs:polished_calcite_brick_slab', full: 'twigs:polished_calcite_bricks'},
      {slab: 'twigs:polished_calcite_slab', full: 'twigs:polished_calcite'},
      {slab: 'twigs:polished_rhyolite_brick_slab', full: 'twigs:polished_rhyolite_bricks'},
      {slab: 'twigs:polished_rhyolite_slab', full: 'twigs:polished_rhyolite'},
      {slab: 'twigs:polished_schist_brick_slab', full: 'twigs:polished_schist_bricks'},
      {slab: 'twigs:polished_schist_slab', full: 'twigs:polished_schist'},
      {slab: 'twigs:polished_tuff_brick_slab', full: 'twigs:polished_tuff_bricks'},
      {slab: 'twigs:polished_tuff_slab', full: 'twigs:polished_tuff'},
      {slab: 'twigs:purple_silt_shingle_slab', full: 'twigs:purple_silt_shingles'},
      {slab: 'twigs:red_silt_shingle_slab', full: 'twigs:red_silt_shingles'},
      {slab: 'twigs:rhyolite_slab', full: 'twigs:rhyolite'},
      {slab: 'twigs:schist_slab', full: 'twigs:schist'},
      {slab: 'twigs:silt_brick_slab', full: 'twigs:silt_bricks'},
      {slab: 'twigs:silt_shingle_slab', full: 'twigs:silt_shingles'},
      {slab: 'twigs:smooth_basalt_brick_slab', full: 'twigs:smooth_basalt_bricks'},
      {slab: 'twigs:smooth_stone_brick_slab', full: 'twigs:smooth_stone_bricks'},
      {slab: 'twigs:tuff_slab', full: 'minecraft:tuff'},
      {slab: 'twigs:twisting_polished_blackstone_brick_slab', full: 'twigs:twisting_polished_blackstone_bricks'},
      {slab: 'twigs:weeping_polished_blackstone_brick_slab', full: 'twigs:weeping_polished_blackstone_bricks'},
      {slab: 'twigs:white_silt_shingle_slab', full: 'twigs:white_silt_shingles'},
      {slab: 'twigs:yellow_silt_shingle_slab', full: 'twigs:yellow_silt_shingles'},
    ].forEach(x => {
      console.log(`2x${x.slab} -> ${x.full}`);
      event.shapeless(x.full, [x.slab, x.slab]);
    });

    // __DebugFind(event);
  };

  const Storage = () => {
    // Replace minecraft:chest with tags
    event.replaceInput({}, 'minecraft:chest', '#forge:chests/wooden');
    event.replaceOutput({}, 'minecraft:chest', 'expandedstorage:wood_chest');

    // Remove the recipe for the vanilla chest, replace w/ a swap recipe
    event.remove({output: 'minecraft:chest'});
    event.shapeless('minecraft:chest', ['expandedstorage:wood_chest']);

    // Better recipe for the Full-block wooden chest
    event.remove({output: 'expandedstorage:old_wood_chest'});
    event.shaped('expandedstorage:old_wood_chest', ['PPP', 'PCP', 'PPP'], {
      P: '#minecraft:planks',
      C: 'expandedstorage:wood_chest',
    });

    // 4 chests from logs
    event.shaped('4x expandedstorage:wood_chest', ['LLL', 'L L', 'LLL'], {L: '#minecraft:logs'});

    // Backpacked: backpacks are big expensive by default -_-
    event.remove({output: 'backpacked:backpack'});
    event.shaped('backpacked:backpack', ['LLL', 'SIS', 'LLL'], {
      L: 'minecraft:leather',
      S: 'minecraft:string',
      I: '#forge:ingots/iron',
    });
  };

  Chunkloaders();
  Entangled();
  Powah();
  Slabs();
  Storage();
});
