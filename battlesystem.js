
var battleChip = [];
var battleSelectedChip_x = 0;
var battleSelectedChip_y = 0;
var battleTurn = true;
var battlePlayerAction = "";
var battleEnemyAction = "";
var battleReward = false;

var battleChipSetEnd = false;
var battleChipSetWait = 0;
var battleChipSetCount = 0;
var battleChipSetCountMax = 0;
var battleChipList = [];

function SetBattleChip() {

    for (let i = 0; i < battleChip.length; i++) {
        for (let j = 0; j < battleChip[i].length; j++) {
            battleChip[i][j] = { name: 'action', opened: false, count: 0 };
        }
    }
    battleChipSetEnd = false;
    battleChipList = [];
    let bc_rn = Math.floor(Math.random() * battleChipTransition.length);

    for (let i = 0; i < battleChip.length; i++) {
        for (let j = 0; j < battleChip[i].length; j++) {

            if (battleChipTransition[bc_rn][i][j] != 0) {
                battleChipList.push({ x: i, y: j });

                battleChip[i][j].name = "action";
                let type = Math.floor(Math.random() * 5);

                switch (type) {
                    case 0:
                        battleChip[i][j].answer = "attack";
                        break;
                    case 1:
                        battleChip[i][j].answer = "defend";
                        break;
                    case 2:
                        battleChip[i][j].answer = "critical";
                        break;
                    case 3:
                        battleChip[i][j].answer = "special";
                        break;
                    case 4:
                        battleChip[i][j].answer = "miss";
                        break;
                }
                battleChip[i][j].count = battleChipTransition[bc_rn][i][j];
                if (battleChipSetCount <= battleChipTransition[bc_rn][i][j])
                    battleChipSetCount = battleChipTransition[bc_rn][i][j];
            }
        }
    }
    battleChipSetCountMax = battleChipSetCount;
    battleChipSetWait = 0;
}

function WaitingBattleChipSet() {
    if (battleChipSetWait >= 0.025) {
        battleChipSetWait = 0;
        if (battleChipSetCount == 0) {
            battleChipSetEnd = true;
        } else {
            battleChipSetCount--;
        }
    } else {
        battleChipSetWait += fixedDeltaTime;
    }
}

function BattlePlayerTrun() {
    battlePlayerAction
        = battleChip[battleSelectedChip_x][battleSelectedChip_y].name
        = battleChip[battleSelectedChip_x][battleSelectedChip_y].answer;
    battleChip[battleSelectedChip_x][battleSelectedChip_y].opened = true;
}

function BattleEnemyTrun() {
    let num = Math.floor(Math.random() * battleChipList.length);

    battleEnemyAction = battleChip[battleChipList[num].x][battleChipList[num].y].answer;
    battleChip[battleChipList[num].x][battleChipList[num].y].name
        = "enemy_" + battleChip[battleChipList[num].x][battleChipList[num].y].answer;
    battleChipList.splice(num, 1);
    battleTurn = true;
    BattleCalculate();
}

function BattleChipOpenedCheck(x, y) {
    let ans = false;

    for (let i = 0; i < battleChipList.length; i++) {
        if (battleChipList[i].x == x && battleChipList[i].y == y) {
            battleChipList.splice(i, 1);
            return ans = true;
        }
    }

    return ans;
}

function BattleCalculate() {
    let p_str = 0, p_vit = 0;
    let p_spd = 0, p_luk = 0;
    let p_msg = "";

    let e_str = 0, e_vit = 0;
    let e_spd = 0, e_luk = 0;
    let e_msg = "";

    //store damage
    switch (battlePlayerAction) {
        case 'attack':
            p_str = player_str;
            p_str += player_equip_str;
            p_vit += player_equip_vit;
            break;
        case 'defend':
            p_vit = player_vit;
            p_vit += player_equip_vit;
            p_msg = player_name + "は防御している。";
            break;
        case 'critical':
            p_str = player_str * 2;
            break;
        case 'miss':
            p_msg = player_name + "は攻撃を外してしまった。";
            p_vit += player_equip_vit;
            break;
        case 'special':
            p_str = player_str;
            p_str += player_equip_str;
            p_vit += player_equip_vit;
            break;
    }
    switch (battleEnemyAction) {
        case 'attack':
            e_str = enemy_str;
            break;
        case 'defend':
            e_vit = enemy_vit;
            e_msg = enemy_label + "は防御している。";
            break;
        case 'critical':
            e_str = enemy_str * 2;
            break;
        case 'miss':
            e_msg = enemy_label + "の攻撃を避けた！";
            break;
        case 'special':
            e_str = enemy_str;
            break;
    }
    let e_damage = p_str - e_vit;
    if (e_damage < 0)
        e_damage = 0;
    let p_damage = e_str - p_vit;
    if (p_damage < 0)
        p_damage = 0;

    //atk message
    if (battlePlayerAction === "attack" || battlePlayerAction === "special") {
        p_msg = e_damage + " のダメージを与えた！";
    }
    if (battleEnemyAction === "attack" || battleEnemyAction === "special") {
        e_msg = p_damage + " のダメージを受けてしまった！";
    }
    if (battlePlayerAction === "critical") {
        p_msg = e_damage + " のクリティカルを与えた！";
    }
    if (battleEnemyAction === "critical") {
        e_msg = p_damage + " のクリティカルを受けてしまった！";
    }

    //Order by speed
    p_spd = player_spd + player_equip_spd;
    e_spd = enemy_spd;
    if (p_spd >= e_spd) {
        //player => enemy
        message.push(p_msg);
        enemy_nowhp -= e_damage;
        //enemy => player
        if (enemy_nowhp > 0) {
            message.push(e_msg);
            player_nowhp -= p_damage;
        }
    } else {
        //enemy => player
        message.push(e_msg);
        player_nowhp -= p_damage;
        //player => enemy
        if (player_nowhp > 0) {
            message.push(p_msg);
            enemy_nowhp -= e_damage;
        }
    }

    if (enemy_nowhp <= 0) {
        GenerateCommand();
        message.push("モンスターを倒した！");
        message.push("ZPを1獲得しました。");
        player_zp++;

        //gold drop
        let drop_rn = Math.floor(Math.random() * 11) + 10;
        drop_rn = (enemy_type === "boss") ? 1000 : drop_rn;
        player_money += drop_rn * cpMapLv;
        message.push(drop_rn + "Sを手に入れた。");

        //item drop
        drop_rn = Math.floor(Math.random() * 6);
        if (drop_rn == 0) {
            drop_rn = Math.floor(Math.random() * 3);
            GetEquipment(cpMapLv, SelectEquipmentCategory(equipment_table.monster[cpMapLv][drop_rn]));
        }

        //levelup
        if (player_exp + 1 >= 7) {
            message.push("レベルアップしました！");
            player_level++;
            player_exp = 0;

            player_maxhp += Math.floor(Math.random() * 4) + 11;
            player_nowhp = player_maxhp;
            player_str += Math.floor(Math.random() * 3) + 1;
            player_vit += Math.floor(Math.random() * 3) + 1;
            player_spd += Math.floor(Math.random() * 3) + 1;
            player_luk += Math.floor(Math.random() * 3) + 1;
        } else {
            if (zuitul_level <= cpMapLv) {
                message.push("EXPを1獲得しました。");
                player_exp++;
            } else {

            }

        }
        //vs boss victory
        if (enemy_type === "boss") {
            if (zuitul_level <= world[cpMapX][cpMapY].level) {
                message.push("ズィトゥールレベルが上昇した。");
                zuitul_level++;
            }
        }

        standImage = "";
        enemy_name = "";
        SetBattleRewardCommand();
        battleReward = true;

        //in dungeon
        if (dungeon_Searching) {
            if (dungeon[dungeon_posX][dungeon_posY].name === "minion") {
                dungeon[dungeon_posX][dungeon_posY].name = "nothing";
            } else {
                dungeon[dungeon_posX][dungeon_posY].name = "start";
            }
        }
    }
}

var battleChipTransition = [
    [
        [1, 0, 22, 0, 23, 0, 33, 0, 12, 0, 11],
        [2, 0, 21, 0, 24, 0, 32, 0, 13, 0, 10],
        [3, 0, 20, 0, 25, 0, 31, 0, 14, 0, 9],
        [4, 0, 19, 0, 26, 0, 30, 0, 15, 0, 8],
        [5, 0, 18, 0, 27, 0, 29, 0, 16, 0, 7],
        [6, 0, 17, 0, 28, 0, 28, 0, 17, 0, 6],
        [7, 0, 16, 0, 29, 0, 27, 0, 18, 0, 5],
        [8, 0, 15, 0, 30, 0, 26, 0, 19, 0, 4],
        [9, 0, 14, 0, 31, 0, 25, 0, 20, 0, 3],
        [10, 0, 13, 0, 32, 0, 24, 0, 21, 0, 2],
        [11, 0, 12, 0, 33, 0, 23, 0, 22, 0, 1],
    ], [
        [1, 0, 18, 18, 17, 16, 15, 14, 13, 12, 11],
        [2, 0, 19, 0, 0, 0, 0, 0, 0, 0, 10],
        [3, 0, 20, 0, 31, 30, 29, 28, 27, 0, 9],
        [4, 0, 21, 0, 32, 0, 0, 0, 26, 0, 8],
        [5, 0, 21, 0, 33, 0, 33, 0, 25, 0, 7],
        [6, 0, 22, 0, 34, 0, 32, 0, 24, 0, 6],
        [7, 0, 23, 0, 35, 0, 31, 0, 23, 0, 5],
        [8, 0, 24, 0, 0, 0, 30, 0, 22, 0, 4],
        [9, 0, 25, 26, 27, 28, 29, 0, 21, 0, 3],
        [10, 0, 0, 0, 0, 0, 0, 0, 20, 0, 2],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 1],
    ], [
        [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6],
        [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0],
        [2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 5],
        [0, 3, 0, 4, 0, 5, 0, 6, 0, 5, 0],
        [3, 0, 4, 0, 5, 0, 6, 0, 5, 0, 4],
        [0, 4, 0, 5, 0, 6, 0, 5, 0, 4, 0],
        [4, 0, 5, 0, 6, 0, 5, 0, 4, 0, 3],
        [0, 5, 0, 6, 0, 5, 0, 4, 0, 3, 0],
        [5, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2],
        [0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 0],
        [6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1],
    ]
];