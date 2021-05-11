
//assets
var Asset = {};

Asset.images = {};
Asset.sounds = {};
//
//AssetData
Asset.assets = [

	{ type: 'image', name: 'back', src: 'Assets/Images/back.png' },

	//icons
	{ type: 'image', name: 'icon_item', src: 'Assets/Images/icon_item.png' },
	{ type: 'image', name: 'icon_map', src: 'Assets/Images/icon_map.png' },
	{ type: 'image', name: 'pin', src: 'Assets/Images/pin.png' },

	//mob
	{ type: 'image', name: 'mob_bat', src: 'Assets/Images/mob_bat.png' },
	{ type: 'image', name: 'mob_nidoru', src: 'Assets/Images/mob_nidoru.png' },
	{ type: 'image', name: 'mob_rock', src: 'Assets/Images/mob_rock.png' },
	{ type: 'image', name: 'mob_piyo', src: 'Assets/Images/mob_piyo.png' },

	{ type: 'image', name: 'mob_gebura_a', src: 'Assets/Images/mob_gebura_a.png' },
	{ type: 'image', name: 'mob_gebura_b', src: 'Assets/Images/mob_gebura_b.png' },
	{ type: 'image', name: 'mob_gebura_c', src: 'Assets/Images/mob_gebura_c.png' },
	{ type: 'image', name: 'mob_gebura_d', src: 'Assets/Images/mob_gebura_d.png' },
	{ type: 'image', name: 'mob_haimori_a', src: 'Assets/Images/mob_haimori_a.png' },
	{ type: 'image', name: 'mob_haimori_b', src: 'Assets/Images/mob_haimori_b.png' },
	{ type: 'image', name: 'mob_haimori_c', src: 'Assets/Images/mob_haimori_c.png' },
	{ type: 'image', name: 'mob_haimori_d', src: 'Assets/Images/mob_haimori_d.png' },
	{ type: 'image', name: 'mob_mujyou_a', src: 'Assets/Images/mob_mujyou_a.png' },
	{ type: 'image', name: 'mob_mujyou_b', src: 'Assets/Images/mob_mujyou_b.png' },
	{ type: 'image', name: 'mob_mujyou_c', src: 'Assets/Images/mob_mujyou_c.png' },
	{ type: 'image', name: 'mob_mujyou_d', src: 'Assets/Images/mob_mujyou_d.png' },
	{ type: 'image', name: 'mob_nidoru', src: 'Assets/Images/mob_nidoru.png' },
	{ type: 'image', name: 'mob_piyo', src: 'Assets/Images/mob_piyo.png' },
	{ type: 'image', name: 'mob_rock', src: 'Assets/Images/mob_rock.png' },
	{ type: 'image', name: 'mob_ryunohara_a', src: 'Assets/Images/mob_ryunohara_a.png' },
	{ type: 'image', name: 'mob_ryunohara_b', src: 'Assets/Images/mob_ryunohara_b.png' },
	{ type: 'image', name: 'mob_ryunohara_c', src: 'Assets/Images/mob_ryunohara_c.png' },
	{ type: 'image', name: 'mob_ryunohara_d', src: 'Assets/Images/mob_ryunohara_d.png' },
	{ type: 'image', name: 'mob_ryunose_a', src: 'Assets/Images/mob_ryunose_a.png' },
	{ type: 'image', name: 'mob_ryunose_b', src: 'Assets/Images/mob_ryunose_b.png' },
	{ type: 'image', name: 'mob_ryunose_c', src: 'Assets/Images/mob_ryunose_c.png' },
	{ type: 'image', name: 'mob_ryunose_d', src: 'Assets/Images/mob_ryunose_d.png' },
	{ type: 'image', name: 'mob_sinokawa_a', src: 'Assets/Images/mob_sinokawa_a.png' },
	{ type: 'image', name: 'mob_sinokawa_b', src: 'Assets/Images/mob_sinokawa_b.png' },
	{ type: 'image', name: 'mob_sinokawa_c', src: 'Assets/Images/mob_sinokawa_c.png' },
	{ type: 'image', name: 'mob_sinokawa_d', src: 'Assets/Images/mob_sinokawa_d.png' },
	{ type: 'image', name: 'mob_tumeato_a', src: 'Assets/Images/mob_tumeato_a.png' },
	{ type: 'image', name: 'mob_tumeato_b', src: 'Assets/Images/mob_tumeato_b.png' },
	{ type: 'image', name: 'mob_tumeato_c', src: 'Assets/Images/mob_tumeato_c.png' },
	{ type: 'image', name: 'mob_tumeato_d', src: 'Assets/Images/mob_tumeato_d.png' },

	//scenery
	{ type: 'image', name: 'scenery_doukutu', src: 'Assets/Images/scenery_doukutu.png' },
	{ type: 'image', name: 'scenery_mati', src: 'Assets/Images/scenery_mati.png' },
	{ type: 'image', name: 'scenery_myhome', src: 'Assets/Images/scenery_myhome.png' },
	{ type: 'image', name: 'scenery_ryunohara', src: 'Assets/Images/scenery_ryunohara.png' },

	{ type: 'image', name: 'scenery_antnest', src: 'Assets/Images/scenery_antnest.png' },
	{ type: 'image', name: 'scenery_diasempire', src: 'Assets/Images/scenery_diasempire.png' },
	{ type: 'image', name: 'scenery_doukutu', src: 'Assets/Images/scenery_doukutu.png' },
	{ type: 'image', name: 'scenery_dragontown', src: 'Assets/Images/scenery_dragontown.png' },
	{ type: 'image', name: 'scenery_firetemple', src: 'Assets/Images/scenery_firetemple.png' },
	{ type: 'image', name: 'scenery_gebura', src: 'Assets/Images/scenery_gebura.png' },
	{ type: 'image', name: 'scenery_hainomori', src: 'Assets/Images/scenery_hainomori.png' },
	{ type: 'image', name: 'scenery_lavacave', src: 'Assets/Images/scenery_lavacave.png' },
	{ type: 'image', name: 'scenery_levertain', src: 'Assets/Images/scenery_levertain.png' },
	{ type: 'image', name: 'scenery_maple', src: 'Assets/Images/scenery_maple.png' },
	{ type: 'image', name: 'scenery_mati', src: 'Assets/Images/scenery_mati.png' },
	{ type: 'image', name: 'scenery_mujyou', src: 'Assets/Images/scenery_mujyou.png' },
	{ type: 'image', name: 'scenery_myhome', src: 'Assets/Images/scenery_myhome.png' },
	{ type: 'image', name: 'scenery_oasis', src: 'Assets/Images/scenery_oasis.png' },
	{ type: 'image', name: 'scenery_oubo', src: 'Assets/Images/scenery_oubo.png' },
	{ type: 'image', name: 'scenery_qatar', src: 'Assets/Images/scenery_qatar.png' },
	{ type: 'image', name: 'scenery_rustcasl', src: 'Assets/Images/scenery_rustcasl.png' },
	{ type: 'image', name: 'scenery_ryunohara', src: 'Assets/Images/scenery_ryunohara.png' },
	{ type: 'image', name: 'scenery_ryunose', src: 'Assets/Images/scenery_ryunose.png' },
	{ type: 'image', name: 'scenery_sinokawa', src: 'Assets/Images/scenery_sinokawa.png' },
	{ type: 'image', name: 'scenery_slime', src: 'Assets/Images/scenery_slime.png' },
	{ type: 'image', name: 'scenery_tumeato', src: 'Assets/Images/scenery_tumeato.png' },

	//stand
	{ type: 'image', name: 'stand_hako', src: 'Assets/Images/stand_hako.png' },
	{ type: 'image', name: 'stand_sika', src: 'Assets/Images/stand_sika.png' },
	{ type: 'image', name: 'stand_lion', src: 'Assets/Images/stand_lion.png' },
	{ type: 'image', name: 'stand_d_soldier', src: 'Assets/Images/stand_d_soldier.png' },
	{ type: 'image', name: 'stand_mouko', src: 'Assets/Images/stand_mouko.png'},
];

//icon image position
Asset.icon_item = {
	left: { sx: 0, sy: 0 },
	right: { sx: 0, sy: 64 },
	outer: { sx: 0, sy: 128 },
	pants: { sx: 0, sy: 192 },
	helmet: { sx: 0, sy: 256 },
	ring: { sx: 0, sy: 320 },
	brcelet: { sx: 0, sy: 384 },
	necklace: { sx: 0, sy: 448 },
	shoes: { sx: 0, sy: 512 },
	artifact: { sx: 0, sy: 576 },
	food: { sx: 0, sy: 640 },
	drink: { sx: 0, sy: 704 },
	tool: { sx: 0, sy: 768 },
	key: { sx: 0, sy: 832 },
	treasure: { sx: 0, sy: 896 },
};

Asset.icon_map = {
	undeveloped: { sx: 0, sy: 0 },
	unopened: { sx: 64, sy: 0 },
	trap: { sx: 128, sy: 0 },
	coin: { sx: 192, sy: 0 },
	empty: { sx: 256, sy: 0 },
	hit: { sx: 320, sy: 0 },

	myhome: { sx: 0, sy: 64 },

	action: { sx: 0, sy: 128 },
	attack: { sx: 64, sy: 128 },
	defend: { sx: 128, sy: 128 },
	critical: { sx: 192, sy: 128 },
	special: { sx: 256, sy: 128 },
	miss: { sx: 320, sy: 128 },

	town1: { sx: 0, sy: 192 },
	town2: { sx: 64, sy: 192 },
	town3: { sx: 128, sy: 192 },
	town4: { sx: 192, sy: 192 },
	town5: { sx: 256, sy: 192 },
	town6: { sx: 320, sy: 192 },
	town7: { sx: 384, sy: 192 },

	field1: { sx: 0, sy: 256 },
	field2: { sx: 64, sy: 256 },
	field3: { sx: 128, sy: 256 },
	field4: { sx: 192, sy: 256 },
	field5: { sx: 256, sy: 256 },
	field6: { sx: 320, sy: 256 },
	field7: { sx: 384, sy: 256 },

	dungeon1: { sx: 0, sy: 320 },
	dungeon2: { sx: 64, sy: 320 },
	dungeon3: { sx: 128, sy: 320 },
	dungeon4: { sx: 192, sy: 320 },
	dungeon5: { sx: 256, sy: 320 },
	dungeon6: { sx: 320, sy: 320 },
	dungeon7: { sx: 384, sy: 320 },
};


//load system
Asset.loadAssets = function (onComplete) {
	var total = Asset.assets.length;
	var loadCount = 0;

	var onLoad = function () {

		ctx.font = 6 * SCREEN_MAGNIFICATION + "px PixelMplus12";
		ctx.fillStyle = "rgb(204,204,204)";
		ctx.textBeaseline = "middle";
		ctx.textAlign = "center";

		ctx.fillText("ろーどちゅん",
			80 * SCREEN_MAGNIFICATION,
			72 * SCREEN_MAGNIFICATION);

		ctx.fillText("(" + loadCount + "/" + total + ")",
			80 * SCREEN_MAGNIFICATION,
			82 * SCREEN_MAGNIFICATION);

		loadCount++;
		if (loadCount >= total) {
			onComplete();
			// console.log(Asset.images);
		}
	};

	Asset.assets.forEach(function (asset) {
		switch (asset.type) {
			case 'image':
				Asset._loadImage(asset, onLoad);
				break;
			case 'sound':
				Asset._loadSounds(asset, onLoad);
				break;
		}
	});
};

Asset._loadImage = function (asset, onLoad) {
	var image = new Image();
	image.src = asset.src;
	image.onload = onLoad;
	Asset.images[asset.name] = image;
};

Asset._loadSounds = function (asset, onLoad) {
	var audio = new Audio();
	audio.src = asset.src;
	audio.onload = onLoad;
	Asset.sounds[asset.name] = audio;
};