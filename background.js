"use strict";

const bases = [
	"http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/",
	"http://static.cdn.ubi.com/0018/prestaging/GFX_HASHED/building_lib/",
	"https://ubistatic-a.akamaihd.net/0018/live/GFX_HASHED/building_lib/",
	"https://ubistatic-a.akamaihd.net/0018/prestaging/GFX_HASHED/building_lib/",
];

const collectibles = [
	"0930cc2c9163a30734a1c30a6afd3fb3d491cba6.png", // buffad_collectible_bridge_base_material.png
	"d1d8cf6dcf7597f57377a3b028307fb54d5678d8.png", // buffad_collectible_bridge_base_material.png
	"8debdc2f661ffe8f6528e9c373b706e3f936d44b.png", // buffad_collectible_picks.png
	"30f0baaaa12e4447144153f46136b449dd3c3b75.png", // buffad_collectible_picks.png
	"fe863d8b51d327bc57bed878ced1f51e046c454e.png", // c_banana.png
	"d8bcb64f81ea66d2bb405a76352d1e54bf51ee0b.png", // c_banana.png
	"c5c05e9880f26957819658b087e7e0be3a10a1d0.png", // c_boxing_glove.png
	"dc81f60a9758824be51adf5523863d318b9a7142.png", // c_boxing_glove.png
	"144e19ee3f16e12972695cea95ba2024b9dec3cf.png", // c_christmas_bells.png
	"c55f730b452e9ac32a2fa2de53f71493712a2db5.png", // c_christmas_candy_cane.png
	"6d11dcde93afce91bc146f88e622f450201e4fff.png", // c_christmas_gingerbread.png
	"5e2acf0f44f30d53c31c6daa84ca7593bf45f9f7.png", // c_clue.png
	"91cc31f70b5c84a1a8f7882b93947c8ffcf44988.png", // c_clue.png
	"abe49267a436e35405773dc9aa4c4cefc8fafe52.png", // c_corner_flag.png
	"cef12e64d750fd34e6410d4f8fa776a104f4af8c.png", // c_eggpaint.png
	"18704a048ab2e8da9b94bca25b9b7b6b1dce817c.png", // c_eggpaint.png
	"1f49e02e088178d0aa7483135784ae22555c52b9.png", // c_football.png
	"486e3035c3a777ec7febb3b8072733d788fd6fb6.png", // c_mushroom_red.png
	"270c6c638bcbe5113fbe0589b8e25b136782c01d.png", // c_mushroom_red.png
	"4a89a4212b31b0dcc6beae1bc7c86b774774df53.png", // c_plain_egg.png
	"14c7944b896b543eb00773e83b451f6032d9566e.png", // c_plain_egg.png
	"891d3237cdc0e6fe4c8fdbb7732aa9db13759f44.png", // c_red_paint.png
	"a64bb599de5b4cff09cf5d93f68db2d563a7cf39.png", // c_red_paint.png
	"c76ce1d89a5e98538d34de0574eef577b493e895.png", // c_shoe.png
	"ce8c87f1da7663e716162c2dcd43b1504e08fa93.png", // c_shoe.png
	"0d63183d063b3bd81e0902be6b210ec222d948e0.png", // c_spring.png
	"4a2c4c60a0fc0e8320ae43afd0a60f52acf6fe35.png", // c_spring.png
	"caa26959772b4b72dd0575eef486d6d89062eca2.png", // c_telescope.png
	"84e216219729c2f916780a3b80950bc5afe0725e.png", // c_telescope.png
	"a02db422d82f851050fdb54514882b4eaebf90c2.png", // c_wicker_basket.png
	"ff2bd6901dd57d55a5a7a7f5d632ee4e2e9a15d6.png", // c_wicker_basket.png
	"fcce02e6d1fea5c42237be59f91668f982bc02d9.png", // collectible_adamantium.png
	"266a7e26836bc830512cd0ea919481562a0009df.png", // collectible_adamantium.png
	"52aeb411b37423259b56ff074e44cb37b10cfd8e.png", // collectible_axe.png
	"a5f5d240cff9ff0e625eef02d7d926dc0ee92a63.png", // collectible_axe.png
	"7dc1e1f289646ba15aeef107efe7026ebb58e8b1.png", // collectible_banner.png
	"d0e699eec06c97b2a493f73f94db947420e6a966.png", // collectible_barrels.png
	"1dd24082bcd22fc20777357499e2394897e2a37a.png", // collectible_barrels.png
	"061b11241a55f20fca07cf2402664e1071951cac.png", // collectible_boards.png
	"df8a33947846c9f8ce2f2902a0cdba4adf8b7b48.png", // collectible_boards.png
	"4879d59fc8fa0ce0ba5e87b4c34031f2e16ca5f9.png", // collectible_bronze_cauldron.png
	"ef852bd0ef3ef2b02a2c180d1a0bfefe63051372.png", // collectible_bucket.png
	"0c1d43eea8d2e74ab52103c30e3ac2f6eea5dd91.png", // collectible_bucket.png
	"1dae4b67796b04f1242947f892577e02f491494b.png", // collectible_dead_crops.png
	"5a204d4374fefad3d55858a62850c81804f18978.png", // collectible_dead_crops.png
	"fbbcfff52f8f7be597007da1c55233599135573c.png", // collectible_dead_tree_wood.png
	"5621cbed3a6b20791e0439123b8231b459a668ea.png", // collectible_dead_tree_wood.png
	"842e318c70fa98a74fdc9e756ab014a9c8d12648.png", // collectible_easter2015_frightened_chicken.png
	"31437bd8393e7b6c386bc72f045530009e09b50c.png", // collectible_easter2015_frightened_chicken.png
	"31ca98524466bb6f5212e7f80fcc83e631aa3ab1.png", // collectible_easter2015_stinky_plant.png
	"85ce87088f887aed36f7d4b1ee2b423c82b30a99.png", // collectible_easter2015_stinky_plant.png
	"9bfef249d664948308f83674f6503ad6e22649c5.png", // collectible_egg.png
	"d5de5a5369c541c8b9f1d2efe2a3a7d5b7acd4cb.png", // collectible_egg.png
	"843510a724a509e9dd860d2886982cb4c1fad7e4.png", // collectible_fire_wood.png
	"ab5333c0dc06caddc500444d976132936aa98eab.png", // collectible_fire_wood.png
	"2b977ec15e0a394dbab16c155de7b87856416917.png", // collectible_flower.png
	"1515f7c8c753cc379ea7056062297f92d5ccfe85.png", // collectible_flower.png
	"41b8238caac031c265efe08544a21ac4be91f534.png", // collectible_food_cart.png
	"8c59e74ee796ebd1ec42dae2770389d2dafd855e.png", // collectible_furniture.png
	"0a1384a56afe4f1469fe2f2ea87a0e1cd0c3af64.png", // collectible_furniture.png
	"6dfd2052dc7795d9684ffb3721d23a2d7e945847.png", // collectible_furs.png
	"11fa4311ceabae96ac58b954921b2930f82724c2.png", // collectible_furs.png
	"fd75f298acd4fdc46129eecf536eec737b865d9b.png", // collectible_glowing_herbs.png
	"f9194a1613b2c3db8b383d87c86d6e100d8ac905.png", // collectible_glowing_herbs.png
	"6dfe0c39243e8f407eaa135bb7342acfe14aa2a8.png", // collectible_grain_sacks.png
	"f237f6c7e3b6c6aac01ae7f51cd917bdeb6ddec2.png", // collectible_grain_sacks.png
	"bdd4aa3b76ec4924f8ecb751e5b82c22bcee12ec.png", // collectible_heart_fruit.png
	"5411ec93e61930e6eb3a958c56b81ba63023a9ee.png", // collectible_heart_fruit.png
	"bd76cd8196c23aaf73139bc263002cf759afc1ce.png", // collectible_herbs.png
	"8257a3e50f6ae19db4aeb2c978949b2d81021a61.png", // collectible_kettle.png
	"2ad1a2713f8e3b4a491c2aaf4dd5f82ae47d41d0.png", // collectible_magic_stone.png
	"a761cd0aeca1a908ee28c76f882fb3970178f7cf.png", // collectible_magic_stone.png
	"bf36525af38edb3f16879069535254c4ca09e8de.png", // collectible_mounten_ore.png
	"77ea4e96f3a2fbe1a73a5cfe6892fa1fc5343d51.png", // collectible_mounten_ore.png
	"4fc3748a428aa2b8817fc61866d121dfce0a5ec9.png", // collectible_obsidian_shard.png
	"26fc61e2116da08a17348064af90a8bbbbe94dd2.png", // collectible_obsidian_shard.png
	"c52b17445b9cba401b78f190e48a9254203125b9.png", // collectible_plants.png
	"3da48a638753a4f5c846a433d6f984e25bb0954c.png", // collectible_plants.png
	"e1e6514d38a85ef913efd00f32f8c724c8209287.png", // collectible_pumpkin.png
	"29e687a31e953020cf937c36a8fa5036793b89ec.png", // collectible_pumpkin.png
	"7728c781065426f028efc3905f5dea2ca0cc7c49.png", // collectible_sacks.png
	"d8c8060e31406770e71c5c6557f1873c2e424920.png", // collectible_sacks.png
	"4afb3220ff0e36afab7a0fcb6368c1c064885178.png", // collectible_scarecrow.png
	"b87cd37c81ecefb5943f92913a420c6bb5bde6a0.png", // collectible_scrap.png
	"2f723e660a18567097b0353bb1b968b68235cf80.png", // collectible_scrap.png
	"edb36c3e9346fa2bb6f8415c755c48cee9996e43.png", // collectible_stinky_mushroom.png
	"ae018b91595f76a6ced714a49c185314ff545576.png", // collectible_stinky_mushroom.png
	"834da7887bbb2dbb03d34c9904d2d895e44a0a4e.png", // collectible_training_dummy_01.png
	"62b89f4ed680ca42fff2ffb9273131867c97856c.png", // collectible_training_dummy_01.png
	"f9f338abb455ab0a17b55ae1ba552b70a684c3aa.png", // collectible_used_hammer.png
	"cca4d11ec41b5976e2e13e6c945bb07b96f656ba.png", // collectible_used_hammer.png
	"ed7377941c61f005b031ae119e98aa138793936e.png", // collectible_wine_barrel.png
	"db5c26a467c4f5dee9804c7c88417103515c326a.png", // collectible_wine_barrel.png
];

const replacement = 
	"f9f7e2bacd84c76001820a3621bda5c6959d609d.png"; // bw_w_firebowl

for (const base of bases) {
	const callback = details => ({"redirectUrl": base + replacement});
	const filter = {"urls": collectibles.map(collectible => base + collectible)};
	chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);
}
