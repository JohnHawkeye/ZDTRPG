
var player_nowhp = 1000;
var player_maxhp = 100;
var player_str = 10;
var player_vit = 10;
var player_spd = 10;

var player_equip_str = 0;
var player_equip_vit = 0;
var player_equip_spd = 0;

var player_money = 1000;
var player_zp = 100;

var player_equip = [
    { type: "left", name: "" ,str:0,vit:0},
    { type: "right", name: "" ,str:0,vit:0},
    { type: "outer", name: "outer",str:0,vit:5 },
    { type: "pants", name: "pants",str:0,vit:5 },
    { type: "helmet", name: "" ,str:0,vit:0},
    { type: "ring", name: "" ,str:0,vit:0},
    { type: "brcelet", name: "" ,str:0,vit:0},
    { type: "necklace", name: "necklace",str:0,vit:0 },
    { type: "shoes", name: "shoes" ,str:0,vit:0},
    { type: "artifact", name: "" ,str:0,vit:0}
];

function PlayerEquipAddition(){

    player_equip_str = 0;
    player_equip_vit = 0;

    for (let i = 0; i < player_equip.length; i++) {
        player_equip_str += player_equip[i].str;
        player_equip_vit += player_equip[i].vit;
    }
}