
var player_name = "John";
var player_level = 1;
var zuitul_level = 1;
var player_exp = 0;

var player_nowhp = 100;
var player_maxhp = 100;
var player_str = 10;
var player_vit = 10;
var player_spd = 10;
var player_luk = 10;

var player_equip_str = 0;
var player_equip_vit = 0;
var player_equip_spd = 0;
var player_equip_luk = 0;

var player_money = 9999;
var player_zp = 4;

var player_equip = [
    { type: "left", name: "", lv:0,str: 0, vit: 0, spd: 0 },
    { type: "right", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "outer", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "pants", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "helmet", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "ring", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "brcelet", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "necklace", name: "",lv:0,str: 0, vit: 0, spd: 0 },
    { type: "shoes", name: "",lv:0, str: 0, vit: 0, spd: 0 },
    { type: "artifact", name: "", lv:0,str: 0, vit: 0, spd: 0 }
];

function PlayerEquipAddition() {

    player_equip_str = 0;
    player_equip_vit = 0;
    player_equip_spd = 0;

    for (let i = 0; i < player_equip.length; i++) {
        player_equip_str += player_equip[i].str;
        player_equip_vit += player_equip[i].vit;
        player_equip_spd += player_equip[i].spd;
    }
}