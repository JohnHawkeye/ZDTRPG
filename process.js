
var gamemode = "free";

//nothing:0, undeveloped:1, myhome:2, town:3, field:4, dungeon:5,
var world = [];
var worldSize = 11;
var land_a = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
var land_b = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
];
var land_c = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
];

var flg_prepare = false;

var treasure = [];
var treasureReward = false;

var gameover = false;

function Process() {

    if (!data_waiting)
        if (!gameover) {
            if (!flg_prepare) {
                Prepare();
                flg_prepare = true;
            } else {
                switch (gamemode) {
                    case 'free':
                        ClickPointBehavior();
                        break;

                    case 'npc':
                        break;

                    case 'battle':
                        if (!battleReward)
                            if (battleTurn) {
                                if (!battleChipSetEnd) {
                                    WaitingBattleChipSet();
                                } else {
                                    ClickBattleChipBehavior();
                                }

                            } else {
                                BattleEnemyTrun();
                            }
                        break;

                    case 'treasure':
                        if (!treasureReward) {
                            ClickTreasureChipBehavior();
                        }
                        break;

                    case 'dungeon':
                        ClickDungeonBehavior();
                        break;
                }

                ClickCommandBehavior();
                ClickInventoryBehavior();

                //delete msg log
                while (message.length > 5) {
                    message.splice(0, 1);
                }
            }
            PlayerDeadInit();
        } else {
            ClickCommandBehavior();
        }

    if(data_waiting){
        DataWait();
    }
}

function Prepare() {
    //nothing:0, undeveloped:1, myhome:2, town:3, field:4, dungeon:5,ocean:6,land:7
    let myhome_x = Math.floor(Math.random() * 11);
    let myhome_y = Math.floor(Math.random() * 11);

    cpMapX = cpPickX = myhome_x;
    cpMapY = cpPickY = myhome_y;

    //map data
    for (let i = 0; i < 11; i++) {
        world[i] = [];
        battleChip[i] = [];
        treasure[i] = [];
        dungeon[i] = [];

        for (let j = 0; j < 11; j++) {
            world[i][j] = { type: 6, name: 'ocean', level: 0 };
            battleChip[i][j] = { name: 'action', opened: false, count: 0 };
            treasure[i][j] = { name: 'nothing', answer: 'empty' };  //nothing, unopened, name, trap, coin, empty
            dungeon[i][j] = {};
        }
    }
    //
    //direction length , North start clockwise 
    let directions = [];
    let d_rn = 0;
    for (let i = 0; i < 8; i++) {
        d_rn = Math.floor(Math.random() * 8);
        if (d_rn <= 1) {
            directions[i] = Math.floor(Math.random() * 4) + 2;
        } else
            if (d_rn <= 3) {
                directions[i] = Math.floor(Math.random() * 5) + 4;
            } else {
                directions[i] = Math.floor(Math.random() * 4) + 8;
            }
    }

    //land generate
    //n
    for (let d = 0; d < 8; d++) {
        for (let i = 0; i < directions[d]; i++) {
            switch (d) {
                case 0:
                    if (myhome_y - i >= 0) {
                        GenerateLand(myhome_x, myhome_y - i);
                    }
                    break;
                case 1:
                    if (myhome_x + i <= 10 && myhome_y - i >= 0) {
                        GenerateLand(myhome_x + i, myhome_y - i);
                    }
                    break;
                case 2:
                    if (myhome_x + i <= 10) {
                        GenerateLand(myhome_x + i, myhome_y);
                    }
                    break;
                case 3:
                    if (myhome_x + i <= 10 && myhome_y + i <= 10) {
                        GenerateLand(myhome_x + i, myhome_y + i);
                    }
                    break;
                case 4:
                    if (myhome_y + i <= 10) {
                        GenerateLand(myhome_x, myhome_y + i);
                    }
                    break;
                case 5:
                    if (myhome_x - i >= 0 && myhome_y + i <= 10) {
                        GenerateLand(myhome_x - i, myhome_y + i);
                    }
                    break;
                case 6:
                    if (myhome_x - i >= 0) {
                        GenerateLand(myhome_x - i, myhome_y);
                    }
                    break;
                case 7:
                    if (myhome_x - i >= 0 && myhome_y - i >= 0) {
                        GenerateLand(myhome_x - i, myhome_y - i);
                    }
                    break;
            }
        }
    }
    //myhome
    world[myhome_x][myhome_y] = { type: 2, name: 'myhome', level: 0 };

    //
    if (myhome_x - 1 >= 0)
        world[myhome_x - 1][myhome_y] = { type: 1, name: 'undeveloped', level: 0 };
    if (myhome_x + 1 <= 10)
        world[myhome_x + 1][myhome_y] = { type: 1, name: 'undeveloped', level: 0 };
    if (myhome_y - 1 >= 0)
        world[myhome_x][myhome_y - 1] = { type: 1, name: 'undeveloped', level: 0 };
    if (myhome_y + 1 <= 10)
        world[myhome_x][myhome_y + 1] = { type: 1, name: 'undeveloped', level: 0 };

    //player equip state
    PlayerEquipAddition();

    SetEquipmentTable();
}

function GenerateLand(x, y) {

    let land_rn = Math.floor(Math.random() * 3);
    let land_array = [];
    switch (land_rn) {
        case 0:
            land_array = Array.from(land_a);
            break;
        case 1:
            land_array = Array.from(land_b);
            break;
        case 2:
            land_array = Array.from(land_c);
            break;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (x + i - 1 >= 0 && x + i - 1 <= 10 && y + j - 1 >= 0 && y + j - 1 <= 10)
                if (land_array[i][j] == 1 && world[x + i - 1][y + j - 1].type != 7) {
                    world[x + i - 1][y + j - 1] = { type: 7, name: 'land', level: 0 };
                }
        }
    }
}

function InitAreaData() {
    message = [];
    command = [];
}

function SetAreaData() {

    switch (cpMapID) {
        case 2://myhome
            message.push("マイホームだ。");
            break;
        case 3://town
            message.push("あたたかな街並みだ。");
            break;
        case 4://field
            message.push("岩肌の多い風景が続く。");
            break;
        case 5://dungeon
            message.push("洞窟だ。何かがすんでいるようだ。");
            break;
    }

}

function GenerateArea(x, y) {

    cpMapLv = world[x][y].level = zuitul_level;

    player_nowhp -= world[x][y].level;

    //type set
    player_zp -= world[x][y].level;

    let rn = Math.floor(Math.random() * 10);

    if (rn >= 2) {
        world[x][y].type = 4;
    } else {
        rn = Math.floor(Math.random() * 2);
        if (rn == 0) {
            if (!flags.map[world[x][y].level].town) {
                world[x][y].type = 3;
            } else {
                world[x][y].type = 4;
            }
        } else {
            if (!flags.map[world[x][y].level].dungeon) {
                world[x][y].type = 5;
            } else {
                world[x][y].type = 4;
            }
        }
    }

    //name set
    switch (world[x][y].type) {
        case 3://town:dias,atrias,dios,razes
            SelectTownLevel(world[x][y].level, x, y);
            flags.map[world[x][y].level].town = true;
            break;
        case 4://field
            SelectFieldLevel(world[x][y].level, x, y);
            break;
        case 5://dungeon
            SelectDungeonLevel(world[x][y].level, x, y);
            flags.map[world[x][y].level].dungeon = true;
            break;
    }
    //map data update
    cpMapID = world[cpMapX][cpMapY].type;
    cpMapName = world[cpMapX][cpMapY].name;
    GenerateCommand();
    SetAreaData();

    //new area
    if (x - 1 >= 0 && world[x][y].level < 7) {
        if (world[x - 1][y].type == 7) {
            world[x - 1][y].type = 1;
            world[x - 1][y].level = 0;
            world[x - 1][y].name = 'undeveloped';
        }
    }
    if (x + 1 < worldSize && world[x][y].level < 7) {
        if (world[x + 1][y].type == 7) {
            world[x + 1][y].type = 1;
            world[x + 1][y].level = 0;
            world[x + 1][y].name = 'undeveloped';
        }
    }

    if (y - 1 >= 0 && world[x][y].level < 7) {
        if (world[x][y - 1].type == 7) {
            world[x][y - 1].type = 1;
            world[x][y - 1].level = 0;
            world[x][y - 1].name = 'undeveloped';
        }
    }
    if (y + 1 < worldSize && world[x][y].level < 7) {
        if (world[x][y + 1].type == 7) {
            world[x][y + 1].type = 1;
            world[x][y + 1].level = 0;
            world[x][y + 1].name = 'undeveloped';
        }
    }
}

function PlayerDeadInit() {
    if (player_nowhp <= 0) {
        message = [];
        message.push("体力がなくなり、");
        message.push("動けなくなってしまった・・・。");
        command = [];
        cmdOver = -1;
        command = [
            { name: 'restart', label: '－もう一度夢を見なおす', pos_x: 1184, pos_y: 674 }
        ];
        gameover = true;
    }
}
