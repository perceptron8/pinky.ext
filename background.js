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
	// prestaging
	"9727a5ebf10b4dfce67c78e5ea938fe62f02d063.png", // buffad_collectible_bridge_base_material.png
	"f4d3e0fe037b8ed21e8b0e06d892cba7a6affafc.png", // buffad_collectible_picks.png
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
	"5d517db57eaae8a68830a49feb8e69c965d0cb4d.png", // collectible_adamantium.png
	"dbe46525ddd9475ec0e4ee1e7bbd8f69146ece8b.png", // collectible_axe.png
	"b7eaa4488a229cac52d1e031fedeefd7b97582fc.png", // collectible_banner.png
	"283538564519dca4309cdc3ca6c72bdcdb6afa75.png", // collectible_barrels.png
	"7bf4444e950d8526ffa99e6b0bbec2d12661cb46.png", // collectible_boards.png
	"a742110c8c65cbef35c5a26e0a47d4efaf66cac1.png", // collectible_bronze_cauldron.png
	"72e3ad4b1748dd0b777ff3dcd18145bbd0983870.png", // collectible_bucket.png
	"22964054852e428544c85ba620009100dcada507.png", // collectible_cake_candles.png
	"0ace11531bb218d3602d82f70bc6ed543daf4cf1.png", // collectible_cake_dough.png
	"d8554de0337f5a4fea7a227154cf572222600846.png", // collectible_dead_crops.png
	"6ad06e0ac1351d47248d0fa1cf900c3025b24b6e.png", // collectible_dead_tree_wood.png
	"8806f72ac4e322714f1d3f0564c2110443809810.png", // collectible_easter2015_frightened_chicken.png
	"47fce2c3efbbb0b51305ef7339bab85f417058aa.png", // collectible_easter2015_stinky_plant.png
	"5ddad335cf8a2deb1caad9d742c632942529e4d2.png", // collectible_egg.png
	"84f8940b6bc60d8eabc2320d42fc73fa57345f9a.png", // collectible_fire_wood.png
	"ef09d55fa6bc5e3ad4e5a1d11394315af11662bf.png", // collectible_flower.png
	"64d108babe884b88a3069454dbc4cf03bded22a0.png", // collectible_food_cart.png
	"2b9a56599b90e8f70ee9a948283f6649a0fa97a9.png", // collectible_furniture.png
	"dda8da528f94f56d7632dffde29f20e5920aeec3.png", // collectible_furs.png
	"df4c7433c1fc6b17eaac94fb2f9f69657fe7e7b3.png", // collectible_glowing_herbs.png
	"24437716b427e83c7c024bc0fc0746151c96d806.png", // collectible_grain_sacks.png
	"f31b44c6e175545b648227d5e2de44ea2d38b670.png", // collectible_heart_fruit.png
	"e6d3971f602cec239e440a7686c5bb66a3118f3b.png", // collectible_herbs.png
	"893515df8aa2d0b13873d13634c2a20ed7a3ca92.png", // collectible_kettle.png
	"69cecda42189efd869011b2dfc3843da08d22821.png", // collectible_magic_stone.png
	"a644282215a4cd70c603f77bc6872025ad5fcc43.png", // collectible_mounten_ore.png
	"1598a00f843e7a3c28e36a435f02cd16696b8393.png", // collectible_obsidian_shard.png
	"a8e12a2d4252ceeae0cc0562a1ffa3524b1fa613.png", // collectible_plants.png
	"0ebc734684a8e9f4bf5184859e05e6e72c0ac7bf.png", // collectible_pumpkin.png
	"43cd0cad62616d330b597bbf8da9f4de9029db74.png", // collectible_sacks.png
	"111fba22e01a476f89a818825d8e1018ad102ff1.png", // collectible_scarecrow.png
	"8c9b74cbb21d4efefdd9ca15152ef9e1d5052501.png", // collectible_scrap.png
	"a0eb2f8f746fdf846d7f9a91b4da62c18a35a0cb.png", // collectible_stinky_mushroom.png
	"233979928224b1254b60f63c7eafd96651f9ea6a.png", // collectible_training_dummy_01.png
	"84bdb312e2a092b2b2b418165b3933edfc528c2c.png", // collectible_used_hammer.png
	"eaaf6c223e4349782be7b5054a74a6f2cdfb9776.png", // collectible_wine_barrel.png
];

const replacement = 
	"f9f7e2bacd84c76001820a3621bda5c6959d609d.png"; // bw_w_firebowl

for (const base of bases) {
	const callback = details => ({"redirectUrl": base + replacement});
	const filter = {"urls": collectibles.map(collectible => base + collectible)};
	chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);
}
