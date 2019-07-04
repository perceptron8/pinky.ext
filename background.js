"use strict";

const bases = [
	"http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/",
	"http://static.cdn.ubi.com/0018/prestaging/GFX_HASHED/building_lib/",
	"https://ubistatic-a.akamaihd.net/0018/live/GFX_HASHED/building_lib/",
	"https://ubistatic-a.akamaihd.net/0018/prestaging/GFX_HASHED/building_lib/",
];

const collectibles = [
	// original
	"0930cc2c9163a30734a1c30a6afd3fb3d491cba6.png", // buffad_collectible_bridge_base_material.png
	"8debdc2f661ffe8f6528e9c373b706e3f936d44b.png", // buffad_collectible_picks.png
	"fe863d8b51d327bc57bed878ced1f51e046c454e.png", // c_banana.png
	"c5c05e9880f26957819658b087e7e0be3a10a1d0.png", // c_boxing_glove.png
	"144e19ee3f16e12972695cea95ba2024b9dec3cf.png", // c_christmas_bells.png
	"c55f730b452e9ac32a2fa2de53f71493712a2db5.png", // c_christmas_candy_cane.png
	"6d11dcde93afce91bc146f88e622f450201e4fff.png", // c_christmas_gingerbread.png
	"5e2acf0f44f30d53c31c6daa84ca7593bf45f9f7.png", // c_clue.png
	"abe49267a436e35405773dc9aa4c4cefc8fafe52.png", // c_corner_flag.png
	"cef12e64d750fd34e6410d4f8fa776a104f4af8c.png", // c_eggpaint.png
	"1f49e02e088178d0aa7483135784ae22555c52b9.png", // c_football.png
	"486e3035c3a777ec7febb3b8072733d788fd6fb6.png", // c_mushroom_red.png
	"4a89a4212b31b0dcc6beae1bc7c86b774774df53.png", // c_plain_egg.png
	"891d3237cdc0e6fe4c8fdbb7732aa9db13759f44.png", // c_red_paint.png
	"c76ce1d89a5e98538d34de0574eef577b493e895.png", // c_shoe.png
	"0d63183d063b3bd81e0902be6b210ec222d948e0.png", // c_spring.png
	"caa26959772b4b72dd0575eef486d6d89062eca2.png", // c_telescope.png
	"a02db422d82f851050fdb54514882b4eaebf90c2.png", // c_wicker_basket.png
	"fcce02e6d1fea5c42237be59f91668f982bc02d9.png", // collectible_adamantium.png
	"52aeb411b37423259b56ff074e44cb37b10cfd8e.png", // collectible_axe.png
	"7dc1e1f289646ba15aeef107efe7026ebb58e8b1.png", // collectible_banner.png
	"d0e699eec06c97b2a493f73f94db947420e6a966.png", // collectible_barrels.png
	"061b11241a55f20fca07cf2402664e1071951cac.png", // collectible_boards.png
	"4879d59fc8fa0ce0ba5e87b4c34031f2e16ca5f9.png", // collectible_bronze_cauldron.png
	"ef852bd0ef3ef2b02a2c180d1a0bfefe63051372.png", // collectible_bucket.png
	"64af56a292cf9dc1f77bbd9332119dd3b46e3a9f.png", // collectible_cake_candles.png
	"589ca2af5d39b45a8ee351f55985d113e9cac13d.png", // collectible_cake_dough.png
	"1dae4b67796b04f1242947f892577e02f491494b.png", // collectible_dead_crops.png
	"fbbcfff52f8f7be597007da1c55233599135573c.png", // collectible_dead_tree_wood.png
	"842e318c70fa98a74fdc9e756ab014a9c8d12648.png", // collectible_easter2015_frightened_chicken.png
	"31ca98524466bb6f5212e7f80fcc83e631aa3ab1.png", // collectible_easter2015_stinky_plant.png
	"9bfef249d664948308f83674f6503ad6e22649c5.png", // collectible_egg.png
	"843510a724a509e9dd860d2886982cb4c1fad7e4.png", // collectible_fire_wood.png
	"2b977ec15e0a394dbab16c155de7b87856416917.png", // collectible_flower.png
	"41b8238caac031c265efe08544a21ac4be91f534.png", // collectible_food_cart.png
	"8c59e74ee796ebd1ec42dae2770389d2dafd855e.png", // collectible_furniture.png
	"6dfd2052dc7795d9684ffb3721d23a2d7e945847.png", // collectible_furs.png
	"fd75f298acd4fdc46129eecf536eec737b865d9b.png", // collectible_glowing_herbs.png
	"6dfe0c39243e8f407eaa135bb7342acfe14aa2a8.png", // collectible_grain_sacks.png
	"bdd4aa3b76ec4924f8ecb751e5b82c22bcee12ec.png", // collectible_heart_fruit.png
	"bd76cd8196c23aaf73139bc263002cf759afc1ce.png", // collectible_herbs.png
	"8257a3e50f6ae19db4aeb2c978949b2d81021a61.png", // collectible_kettle.png
	"2ad1a2713f8e3b4a491c2aaf4dd5f82ae47d41d0.png", // collectible_magic_stone.png
	"bf36525af38edb3f16879069535254c4ca09e8de.png", // collectible_mounten_ore.png
	"4fc3748a428aa2b8817fc61866d121dfce0a5ec9.png", // collectible_obsidian_shard.png
	"c52b17445b9cba401b78f190e48a9254203125b9.png", // collectible_plants.png
	"e1e6514d38a85ef913efd00f32f8c724c8209287.png", // collectible_pumpkin.png
	"7728c781065426f028efc3905f5dea2ca0cc7c49.png", // collectible_sacks.png
	"4afb3220ff0e36afab7a0fcb6368c1c064885178.png", // collectible_scarecrow.png
	"b87cd37c81ecefb5943f92913a420c6bb5bde6a0.png", // collectible_scrap.png
	"edb36c3e9346fa2bb6f8415c755c48cee9996e43.png", // collectible_stinky_mushroom.png
	"834da7887bbb2dbb03d34c9904d2d895e44a0a4e.png", // collectible_training_dummy_01.png
	"f9f338abb455ab0a17b55ae1ba552b70a684c3aa.png", // collectible_used_hammer.png
	"ed7377941c61f005b031ae119e98aa138793936e.png", // collectible_wine_barrel.png
	// reduced
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
