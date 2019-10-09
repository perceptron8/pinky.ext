"use strict";

const bases = [
	"http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/",
	"http://static.cdn.ubi.com/0018/prestaging/GFX_HASHED/building_lib/",
	"https://ubistatic-a.akamaihd.net/0018/live/GFX_HASHED/building_lib/",
	"https://ubistatic-a.akamaihd.net/0018/prestaging/GFX_HASHED/building_lib/",
];

const collectibles = [
	// live
	"3d22e289f157476f3a79a53c1ce2d16b29064c8a.png", // buffad_collectible_bridge_base_material.png
	"27b0441fe4a8812665b8af61972966d5294a9ecb.png", // buffad_collectible_picks.png
	"2283394af62449b6d1012dc0c2a8ddfc2cabd34c.png", // c_banana.png
	"c11e14421d3f64ac4cf2f26888deff9f4ad0e964.png", // c_boxing_glove.png
	"144e19ee3f16e12972695cea95ba2024b9dec3cf.png", // c_christmas_bells.png
	"c55f730b452e9ac32a2fa2de53f71493712a2db5.png", // c_christmas_candy_cane.png
	"6d11dcde93afce91bc146f88e622f450201e4fff.png", // c_christmas_gingerbread.png
	"15e6e9e0530c90735c5cf589c4f7289bfff345ed.png", // c_clue.png
	"fd051d9f5c663494141f9c891ae026e9ac0af62b.png", // c_corner_flag.png
	"0f6796a0845db6618f98d949a67a0979d03ec7de.png", // c_eggpaint.png
	"8c7f90c5f97c733c0975b2db5a6b8e6605549f47.png", // c_football.png
	"2fec40fa97eca571ebb00672a8c73c193f38b71f.png", // c_mushroom_red.png
	"70dc23e44a76aa0eca1a59cbae657bbd3cfd2b63.png", // c_plain_egg.png
	"be974b1d2f2b57bd6d43edfdd08d4768f8e909bb.png", // c_red_paint.png
	"b66acaaa3a29fd7a1ce8ea1654a316ca86127bdf.png", // c_shoe.png
	"de44eef412ce71fe5dd9275dc67e685ed1f8fd2e.png", // c_spring.png
	"b7639e0a05e784364057a1c555ade7863e9e1419.png", // c_telescope.png
	"c318a870415a5f5eed83785e10e5a886ad8c6cc4.png", // c_wicker_basket.png
	"4ef8a9204d9f25b49334c4d8f6624c9a424f88e0.png", // collectible_adamantium.png
	"52aeb411b37423259b56ff074e44cb37b10cfd8e.png", // collectible_axe.png
	"68855612f064a57cc0fe9b8e3a9947d2d1fd8973.png", // collectible_banner.png
	"23c05f493e4e88eaad96ffc32961433b8dfb9f83.png", // collectible_barrels.png
	"410a396e893923e93522d04b98d817342f6f7410.png", // collectible_boards.png
	"b3bb7719b547048c7882975d01be2c68a9e1b2c6.png", // collectible_bronze_cauldron.png
	"eb679f6b56d97d89fa4c6da2696c7b0bd0b1178c.png", // collectible_bucket.png
	"c0a1d931b960997abdb1b727fa27c9fff26eff58.png", // collectible_cake_candles.png
	"77f9564a4f3a36bae4b5dee6290081f60d9be161.png", // collectible_cake_dough.png
	"d8554de0337f5a4fea7a227154cf572222600846.png", // collectible_dead_crops.png
	"6ad06e0ac1351d47248d0fa1cf900c3025b24b6e.png", // collectible_dead_tree_wood.png
	"8806f72ac4e322714f1d3f0564c2110443809810.png", // collectible_easter2015_frightened_chicken.png
	"e70ef11a6cd50676c3fba384fe09a577a0d097fa.png", // collectible_easter2015_stinky_plant.png
	"5ddad335cf8a2deb1caad9d742c632942529e4d2.png", // collectible_egg.png
	"07204d7db7e2c05bd1415008a4a838fb3b02f95e.png", // collectible_fire_wood.png
	"37ad6e5a7ea234dc037d0ef76616a4e881533c5a.png", // collectible_flower.png
	"00a663f12b07ba6c0b7e45fc4162e2bdd65a30a8.png", // collectible_food_cart.png
	"5a318280a6667a95f80df062d37724961337064f.png", // collectible_furniture.png
	"b484c99e4c69ee4240aa43b1a3d791304afe41ad.png", // collectible_furs.png
	"1197e11606420dc5d31300c0c2cd9a56f89166bf.png", // collectible_glowing_herbs.png
	"25990f1384ac16b0f0105f364d8c05ece9c1fb95.png", // collectible_grain_sacks.png
	"7ede727c6b80bcfbb5213647a57be6f281ffaf82.png", // collectible_heart_fruit.png
	"4bb18353c2b66abcde0ea781bb60ce1c6f570c08.png", // collectible_herbs.png
	"5675e92fff91d171ca65340acbfd77def72017a9.png", // collectible_kettle.png
	"ffe88752f4abeca9da394bfbf26146fe103223ac.png", // collectible_magic_stone.png
	"525519f6b097fbfcae02a7916e6c15b151eccf55.png", // collectible_mounten_ore.png
	"e45261d1a4d90b2c74b4953281632bf178b422ac.png", // collectible_obsidian_shard.png
	"d3328c5855254eebf2481e04af9bcba99fa00945.png", // collectible_plants.png
	"19d5c3c98cdc1bf1983aedfa799b0a1904593714.png", // collectible_pumpkin.png
	"630bf65944c0b2b7331b1a506c79e5e9d238689d.png", // collectible_sacks.png
	"b0c0d479947e28a8dc59ec5b7bc8bb52507ceefc.png", // collectible_scarecrow.png
	"a87de0412e159a79358ca3e1e25d795c5bc60b52.png", // collectible_scrap.png
	"5f7730a646f11f092512161cf2d13c3bfa8dd60b.png", // collectible_stinky_mushroom.png
	"233979928224b1254b60f63c7eafd96651f9ea6a.png", // collectible_training_dummy_01.png
	"78967ff3d870a89c53241cae568b0f441df0f308.png", // collectible_used_hammer.png
	"79334340891586303ed3531dbd1f59469eb3e9f0.png", // collectible_wine_barrel.png
	// prestaging
	"3d22e289f157476f3a79a53c1ce2d16b29064c8a.png", // buffad_collectible_bridge_base_material.png
	"27b0441fe4a8812665b8af61972966d5294a9ecb.png", // buffad_collectible_picks.png
	"2283394af62449b6d1012dc0c2a8ddfc2cabd34c.png", // c_banana.png
	"c11e14421d3f64ac4cf2f26888deff9f4ad0e964.png", // c_boxing_glove.png
	"144e19ee3f16e12972695cea95ba2024b9dec3cf.png", // c_christmas_bells.png
	"c55f730b452e9ac32a2fa2de53f71493712a2db5.png", // c_christmas_candy_cane.png
	"6d11dcde93afce91bc146f88e622f450201e4fff.png", // c_christmas_gingerbread.png
	"15e6e9e0530c90735c5cf589c4f7289bfff345ed.png", // c_clue.png
	"fd051d9f5c663494141f9c891ae026e9ac0af62b.png", // c_corner_flag.png
	"0f6796a0845db6618f98d949a67a0979d03ec7de.png", // c_eggpaint.png
	"8c7f90c5f97c733c0975b2db5a6b8e6605549f47.png", // c_football.png
	"2fec40fa97eca571ebb00672a8c73c193f38b71f.png", // c_mushroom_red.png
	"70dc23e44a76aa0eca1a59cbae657bbd3cfd2b63.png", // c_plain_egg.png
	"be974b1d2f2b57bd6d43edfdd08d4768f8e909bb.png", // c_red_paint.png
	"b66acaaa3a29fd7a1ce8ea1654a316ca86127bdf.png", // c_shoe.png
	"de44eef412ce71fe5dd9275dc67e685ed1f8fd2e.png", // c_spring.png
	"b7639e0a05e784364057a1c555ade7863e9e1419.png", // c_telescope.png
	"c318a870415a5f5eed83785e10e5a886ad8c6cc4.png", // c_wicker_basket.png
	"d460a625eac8def11ca0ad5d5f157b7f75921633.png", // collectible_adamantium.png
	"52aeb411b37423259b56ff074e44cb37b10cfd8e.png", // collectible_axe.png
	"7dc1e1f289646ba15aeef107efe7026ebb58e8b1.png", // collectible_banner.png
	"4ea96605998865c72f6f40dc8b28d82d62d16b79.png", // collectible_barrels.png
	"7bf4444e950d8526ffa99e6b0bbec2d12661cb46.png", // collectible_boards.png
	"4879d59fc8fa0ce0ba5e87b4c34031f2e16ca5f9.png", // collectible_bronze_cauldron.png
	"9811b58652f7eecd312479c666cb89c3bfe75352.png", // collectible_bucket.png
	"c0a1d931b960997abdb1b727fa27c9fff26eff58.png", // collectible_cake_candles.png
	"77f9564a4f3a36bae4b5dee6290081f60d9be161.png", // collectible_cake_dough.png
	"d8554de0337f5a4fea7a227154cf572222600846.png", // collectible_dead_crops.png
	"6ad06e0ac1351d47248d0fa1cf900c3025b24b6e.png", // collectible_dead_tree_wood.png
	"8806f72ac4e322714f1d3f0564c2110443809810.png", // collectible_easter2015_frightened_chicken.png
	"47fce2c3efbbb0b51305ef7339bab85f417058aa.png", // collectible_easter2015_stinky_plant.png
	"5ddad335cf8a2deb1caad9d742c632942529e4d2.png", // collectible_egg.png
	"84f8940b6bc60d8eabc2320d42fc73fa57345f9a.png", // collectible_fire_wood.png
	"ef09d55fa6bc5e3ad4e5a1d11394315af11662bf.png", // collectible_flower.png
	"41b8238caac031c265efe08544a21ac4be91f534.png", // collectible_food_cart.png
	"2b9a56599b90e8f70ee9a948283f6649a0fa97a9.png", // collectible_furniture.png
	"c46291560daf1224ea94cb37c9489fffed9008e1.png", // collectible_furs.png
	"df4c7433c1fc6b17eaac94fb2f9f69657fe7e7b3.png", // collectible_glowing_herbs.png
	"c7986b6a8e08a4da78915bfbb4805e98a3707cb1.png", // collectible_grain_sacks.png
	"f31b44c6e175545b648227d5e2de44ea2d38b670.png", // collectible_heart_fruit.png
	"bd76cd8196c23aaf73139bc263002cf759afc1ce.png", // collectible_herbs.png
	"8257a3e50f6ae19db4aeb2c978949b2d81021a61.png", // collectible_kettle.png
	"be3b817311852267b1874a0418c05399a6e45004.png", // collectible_magic_stone.png
	"699019d84356acb04b43b69ca0c75e918ee03647.png", // collectible_mounten_ore.png
	"15afc74e10b16aa27ead12729e8fe608fab4cddd.png", // collectible_obsidian_shard.png
	"a8e12a2d4252ceeae0cc0562a1ffa3524b1fa613.png", // collectible_plants.png
	"0ebc734684a8e9f4bf5184859e05e6e72c0ac7bf.png", // collectible_pumpkin.png
	"68a42d6358860f4f1ce705f4aed3f58e245d7a17.png", // collectible_sacks.png
	"4afb3220ff0e36afab7a0fcb6368c1c064885178.png", // collectible_scarecrow.png
	"8c9b74cbb21d4efefdd9ca15152ef9e1d5052501.png", // collectible_scrap.png
	"4966a1257774552286f9b5ea1aa12af5388e18f4.png", // collectible_stinky_mushroom.png
	"233979928224b1254b60f63c7eafd96651f9ea6a.png", // collectible_training_dummy_01.png
	"98ff078c8804608fff67ce5c1f11ee8abeb89633.png", // collectible_used_hammer.png
	"f7890455b2a22f29265b63966cfa22f0dd069906.png", // collectible_wine_barrel.png
];

const replacement = 
	"f9f7e2bacd84c76001820a3621bda5c6959d609d.png"; // bw_w_firebowl

for (const base of bases) {
	const callback = details => ({"redirectUrl": base + replacement});
	const filter = {"urls": collectibles.map(collectible => base + collectible)};
	chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);
}
