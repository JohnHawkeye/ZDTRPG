
function DataAllClear() {
    //process
    gamemode = "free";
    world = [];
    flg_prepare = false;
    treasure = [];
    treasureReward = false;

    //battlesystem
    battleChip = [];
    battleTurn = true;
    battlePlayerAction = "";
    battleEnemyAction = "";
    battleReward = false;
    battleSelectedChip_x = 0;
    battleSelectedChip_y = 0;

    //clickbehavior
    cpMapX = 0;
    cpMapY = 0;
    cpMapID = 0;
    cpMapLv = 0;
    cpMapName = "";
    cpPickX = 0;
    cpPickY = 0;
    command = [];
    cmdName = "";
    cmdOver = -1;

    //drawing
    standImage = "";
    labelDisplay = "";

    //dungeon
    dungeon = [];
    dungeon_posX = 0;
    dungeon_posY = 0;
    dungeon_Searching = false;

    //enemy
    enemy_name = "";
    enemy_type = "";
    enemy_nowhp = 0;
    enemy_str = 0;
    enemy_vit = 0;
    enemy_spd = 0;
    enemy_selected = [];

    //flags
    flags.myhome_item = false;
    flags.npc = {
        stand_sika: false, stand_lion: false, stand_mouko: false,
        stand_tokagen: false, stand_aronasu: false, stand_arakuma: false,
        stand_kumapati: false, stand_azarisu: false, stand_yomikirin: false,
        stand_hebitan: false, stand_tubamen: false, stand_umajou: false,
        stand_saru: false, stand_usako: false, stand_kamebaa: false,
        stand_doraoya: false, stand_dorago: false, stand_negi: false,
        stand_d_soldier: false, stand_dias: false, stand_buta: false,
    };
    flags.map = [
        { town: false, dungeon: false }, { town: false, dungeon: false }, { town: false, dungeon: false },
        { town: false, dungeon: false }, { town: false, dungeon: false }, { town: false, dungeon: false },
        { town: false, dungeon: false }, { town: false, dungeon: false },];
    //item
    inventory = [];

    //message
    message = [];

    //player
    player_level = 1;
    zuitul_level = 1;
    player_exp = 0;

    player_nowhp = 100;
    player_maxhp = 100;
    player_str = 10;
    player_vit = 10;
    player_spd = 10;
    player_luk = 10;

    player_equip_str = 0;
    player_equip_vit = 0;
    player_equip_spd = 0;
    player_equip_luk = 0;

    //player_money = 1000;
    player_zp = 4;

    player_equip = [
        { type: "left", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "right", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "outer", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "pants", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "helmet", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "ring", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "brcelet", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "necklace", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "shoes", name: "", lv: 0, str: 0, vit: 0, spd: 0 },
        { type: "artifact", name: "", lv: 0, str: 0, vit: 0, spd: 0 }
    ];
}

//data save
function DataSave() {

    //start point
    localStorage.setItem("ZDT_cpMapX", JSON.stringify(cpMapX));
    localStorage.setItem("ZDT_cpMapY", JSON.stringify(cpMapY));
    localStorage.setItem("ZDT_cpPickX", JSON.stringify(cpPickX));
    localStorage.setItem("ZDT_cpPickY", JSON.stringify(cpPickY));

    //process
    localStorage.setItem("ZDT_world", JSON.stringify(world));

    //flags
    localStorage.setItem("ZDT_flags.myhome_item", JSON.stringify(flags.myhome_item));
    localStorage.setItem("ZDT_flags.npc", JSON.stringify(flags.npc));
    localStorage.setItem("ZDT_flags.map", JSON.stringify(flags.map));

    //item
    localStorage.setItem("ZDT_inventory", JSON.stringify(inventory));

    //player
    localStorage.setItem("ZDT_player_level", JSON.stringify(player_level));
    localStorage.setItem("ZDT_zuitul_level", JSON.stringify(zuitul_level));
    localStorage.setItem("ZDT_player_exp", JSON.stringify(player_exp));

    localStorage.setItem("ZDT_player_nowhp", JSON.stringify(player_nowhp));
    localStorage.setItem("ZDT_player_maxhp", JSON.stringify(player_maxhp));
    localStorage.setItem("ZDT_player_str", JSON.stringify(player_str));
    localStorage.setItem("ZDT_player_vit", JSON.stringify(player_vit));
    localStorage.setItem("ZDT_player_spd", JSON.stringify(player_spd));
    localStorage.setItem("ZDT_player_luk", JSON.stringify(player_luk));

    localStorage.setItem("ZDT_player_equip_str", JSON.stringify(player_equip_str));
    localStorage.setItem("ZDT_player_equip_vit", JSON.stringify(player_equip_vit));
    localStorage.setItem("ZDT_player_equip_spd", JSON.stringify(player_equip_spd));
    localStorage.setItem("ZDT_player_equip_luk", JSON.stringify(player_equip_luk));

    localStorage.setItem("ZDT_player_money", JSON.stringify(player_money));
    localStorage.setItem("ZDT_player_zp", JSON.stringify(player_zp));

    localStorage.setItem("ZDT_player_equip", JSON.stringify(player_equip));

}

function DataLoad() {

    let data = null;

    //start point
    data = localStorage.getItem("ZDT_cpMapX");
    if (data != null)
        cpMapX = JSON.parse(data);
    data = localStorage.getItem("ZDT_cpMapY");
    if (data != null)
        cpMapY = JSON.parse(data);
    data = localStorage.getItem("ZDT_cpPickX");
    if (data != null)
        cpPickX = JSON.parse(data);
    data = localStorage.getItem("ZDT_cpPickY");
    if (data != null)
        cpPickY = JSON.parse(data);

    //process
    data = localStorage.getItem("ZDT_world");
    if (data != null)
        world = JSON.parse(data);

    //flags
    data = localStorage.getItem("ZDT_flags.myhome_item");
    if (data != null)
        flags.myhome_item = JSON.parse(data);

    data = localStorage.getItem("ZDT_flags.npc");
    if (data != null)
        flags.npc = JSON.parse(data);

    data = localStorage.getItem("ZDT_flags.map");
    if (data != null)
        flags.map = JSON.parse(data);

    //item
    data = localStorage.getItem("ZDT_inventory");
    if (data != null)
        inventory = JSON.parse(data);

    //player

    data = localStorage.getItem("ZDT_player_level");
    if (data != null)
        player_level = JSON.parse(data);

    data = localStorage.getItem("ZDT_zuitul_level");
    if (data != null)
        zuitul_level = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_exp");
    if (data != null)
        player_exp = JSON.parse(data);


    data = localStorage.getItem("ZDT_player_nowhp");
    if (data != null)
        player_nowhp = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_maxhp");
    if (data != null)
        player_maxhp = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_str");
    if (data != null)
        player_str = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_vit");
    if (data != null)
        player_vit = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_spd");
    if (data != null)
        player_spd = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_luk");
    if (data != null)
        player_luk = JSON.parse(data);


    data = localStorage.getItem("ZDT_player_equip_str");
    if (data != null)
        player_equip_str = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_equip_vit");
    if (data != null)
        player_equip_vit = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_equip_spd");
    if (data != null)
        player_equip_spd = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_equip_luk");
    if (data != null)
        player_equip_luk = JSON.parse(data);


    data = localStorage.getItem("ZDT_player_money");
    if (data != null)
        player_money = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_zp");
    if (data != null)
        player_zp = JSON.parse(data);

    data = localStorage.getItem("ZDT_player_equip");
    if (data != null)
        player_equip = JSON.parse(data);

}

//waiting

var data_waiting = false;
var data_waittime = 0;

function DataWait() {

    if (data_waittime >= 2) {
        data_waittime = 0;
        data_waiting = false;
        if(cmdName === "data_save"){
            message.push("セーブ完了！");
        }else{
            message.push("ロード完了！");
        }
    } else {
        data_waittime += fixedDeltaTime;
    }
}