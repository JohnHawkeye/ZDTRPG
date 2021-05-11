
var gamemode = "free";

//nothing:0, undeveloped:1, myhome:2, town:3, field:4, dungeon:5,
var world = [];
var worldSize = 11;

var flg_prepare = false;

var treasure = [];
var treasureReward = false;

function Process() {

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
                        ClickBattleChipBehavior();
                    } else {
                        BattleEnemyTrun();
                    }
                break;
            case 'treasure':
                if (!treasureReward) {
                    ClickTreasureChipBehavior();
                }
                break;
        }

        ClickCommandBehavior();
        ClickInventoryBehavior();

        //delete msg log
        while (message.length > 5) {
            message.splice(0, 1);
        }
    }


}

function Prepare() {

    //map data
    for (let i = 0; i < 11; i++) {
        world[i] = [];
        battleChip[i] = [];
        treasure[i] = [];

        for (let j = 0; j < 11; j++) {
            world[i][j] = { type: 0, name: '', level: 0 };
            battleChip[i][j] = { name: 'action' };
            treasure[i][j] = { name: 'nothing', answer: 'empty' };  //nothing, unopened, name, trap, coin, empty

            if (i == 5 && j == 5) {
                world[i][j] = { type: 2, name: 'myhome', level: 0 };
            }
        }
    }

    world[4][5] = { type: 1, name: 'undeveloped', level: 1 };
    world[6][5] = { type: 1, name: 'undeveloped', level: 1 };
    world[5][4] = { type: 1, name: 'undeveloped', level: 1 };
    world[5][6] = { type: 1, name: 'undeveloped', level: 1 };

    //click point
    clickPoint = [
        { name: 'map', pos_x: 448, pos_y: 98, size: 704 },
    ];

}

function InitAreaData() {
    message = [];
    command = [];
}

function GenerateCommand() {

    command = [];
    cmdOver = -1;

    switch (cpMapID) {
        case 2:
            command = [
                { name: 'explore', label: '－何かないか探す', pos_x: 1184, pos_y: 674 },
                { name: 'sleep', label: '－休む', pos_x: 1184, pos_y: 706 }
            ];
            break;

        case 3:
            command = [
                { name: 'talk_npc', label: '－町の人と話す', pos_x: 1184, pos_y: 674 },
            ];
            break;

        case 4:
            command = [
                { name: 'explore_field', label: '－探索する', pos_x: 1184, pos_y: 674 }
            ];
            break;

        case 5:
            command = [
                { name: 'explore_dungeon', label: '－探索する', pos_x: 1184, pos_y: 674 }
            ];
            break;
    }

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
        case 5://gungeon
            message.push("洞窟だ。何かがすんでいるようだ。");
            break;
    }

}

function GenerateArea(x, y) {

    //type set
    player_zp -= world[x][y].level;

    let rn = Math.floor(Math.random() * 3);

    if (rn <= 1) {
        world[x][y].type = 4;
    } else {
        rn = Math.floor(Math.random() * 2);
        world[x][y].type = (rn == 0) ? 3 : 5;
    }

    //name set
    switch (world[x][y].type) {
        case 3://town:dias,atrias,dios,razes
            SelectTownLevel(world[x][y].level, x, y);
            break;
        case 4://field
            SelectFieldLevel(world[x][y].level, x, y);
            break;
        case 5://dungeon
            SelectDungeonLevel(world[x][y].level, x, y);
            break;
    }

    //new area
    if (x - 1 >= 0 && world[x][y].level < 7) {
        if (world[x - 1][y].type == 0) {
            world[x - 1][y].type = 1;
            world[x - 1][y].level = world[x][y].level + 1;
            world[x - 1][y].name = 'undeveloped';
        }
    }
    if (x + 1 < worldSize && world[x][y].level < 7) {
        if (world[x + 1][y].type == 0) {
            world[x + 1][y].type = 1;
            world[x + 1][y].level = world[x][y].level + 1;
            world[x + 1][y].name = 'undeveloped';
        }
    }

    if (y - 1 >= 0 && world[x][y].level < 7) {

        if (world[x][y - 1].type == 0) {
            world[x][y - 1].type = 1;
            world[x][y - 1].level = world[x][y].level + 1;
            world[x][y - 1].name = 'undeveloped';
        }
    }
    if (y + 1 < worldSize && world[x][y].level < 7) {

        if (world[x][y + 1].type == 0) {
            world[x][y + 1].type = 1;
            world[x][y + 1].level = world[x][y].level + 1;
            world[x][y + 1].name = 'undeveloped';
        }
    }
}