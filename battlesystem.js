
var battleChip = [];
var battleTurn = true;
var battlePlayerAction = "";
var battleEnemyAction = "";
var battleReward = false;

function SetBattleChip() {
    for (let i = 0; i < battleChip.length; i++) {
        for (let j = 0; j < battleChip[i].length; j++) {

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
        }
    }
}

function BattlePlayerTrun() {
    battlePlayerAction = battleChip[cpMapX][cpMapY].name = battleChip[cpMapX][cpMapY].answer;

}

function BattleEnemyTrun() {
    let x = Math.floor(Math.random() * 11);
    let y = Math.floor(Math.random() * 11);

    battleEnemyAction = battleChip[x][y].name = battleChip[x][y].answer;
    battleTurn = true;
    BattleCalculate();
}

function BattleCalculate() {
    let p_str = 0;
    let p_vit = 0;
    let e_str = 0;
    let e_vit = 0;

    let equip_str = 0;
    let equip_vit = 0;
    
    for (let i = 0; i < player_equip.length; i++) {
        equip_str += player_equip[i].str;
        equip_vit += player_equip[i].vit;
    }

    switch (battlePlayerAction) {
        case 'attack':
            p_str = player_str;
            break;
        case 'defend':
            p_vit = player_vit;
            break;
        case 'critical':
            p_str = player_str * 2;
            break;
        case 'miss':
            break;
    }

    switch (battleEnemyAction) {
        case 'attack':
            e_str = enemy_str;
            break;
        case 'defend':
            e_vit = enemy_vit;
            break;
        case 'critical':
            e_str = enemy_str * 2;
            break;
        case 'miss':
            break;
    }

    let e_damage = (p_str + equip_str) - e_vit;
    if(e_damage <0)
        e_damage = 0;
    
    let p_damage = e_str - (p_vit + equip_vit);
    if(p_damage <0)
        p_damage = 0;

    //player => enemy
    message.push(e_damage + "のダメージを与えた！");
    enemy_nowhp -= e_damage;

    //enemy => player
    message.push(p_damage + "のダメージを受けてしまった！");
    player_nowhp -= p_damage;
    
    if (enemy_nowhp <= 0) {
        GenerateCommand();
        message.push("モンスターを倒した！");
        message.push("ZPを1獲得しました。");
        standImage = "";
        enemy_name = "";
        SetBattleRewardCommand();
        battleReward = true;
        
        player_zp++;
    }
}
