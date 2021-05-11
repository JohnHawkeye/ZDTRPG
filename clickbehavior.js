
var clickPoint = [];
var cpMapX = 0;
var cpMapY = 0;
var cpMapID = 0;
var cpMapName = "";
var cpPickX = 0;
var cpPickY = 0;

var command = [];
var cmdName = "";
var cmdOver = -1;


function ClickPointBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 0;

    for (let i = 0; i < clickPoint.length; i++) {

        if (clickPoint[i].name === 'map') {

            cpx = clickPoint[i].pos_x;
            cpy = clickPoint[i].pos_y;
            cpsize = clickPoint[i].size;

            if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
                (cpy <= mouseY && cpy + cpsize >= mouseY)) {

                if (mouseLeftClick && !mouseLeftClick_isClicked) {

                    let px = mouseX - cpx;
                    let py = mouseY - cpy;

                    px = Math.floor(px / 64);
                    py = Math.floor(py / 64);

                    cpPickX = cpMapX = px;
                    cpPickY = cpMapY = py;

                    cpMapID = world[cpMapX][cpMapY].type;
                    cpMapName = world[cpMapX][cpMapY].name;

                    InitAreaData();

                    if (cpMapID != 1) {
                        GenerateCommand();
                        SetAreaData();
                    } else {
                        if (player_zp >= world[cpMapX][cpMapY].level) {
                            GenerateArea(cpMapX, cpMapY);
                        } else {
                            message.push("ZPが足りない。");
                        }
                    }

                    mouseLeftClick_isClicked = true;

                }

                break;
            }
        }
    }
}

function ClickBattleChipBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 0;

    for (let i = 0; i < clickPoint.length; i++) {

        if (clickPoint[i].name === 'map') {

            cpx = clickPoint[i].pos_x;
            cpy = clickPoint[i].pos_y;
            cpsize = clickPoint[i].size;

            if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
                (cpy <= mouseY && cpy + cpsize >= mouseY)) {

                if (mouseLeftClick && !mouseLeftClick_isClicked) {

                    let px = mouseX - cpx;
                    let py = mouseY - cpy;

                    px = Math.floor(px / 64);
                    py = Math.floor(py / 64);

                    cpMapX = px;
                    cpMapY = py;

                    BattlePlayerTrun();
                    battleTurn = false;

                    mouseLeftClick_isClicked = true;
                }
                break;
            }
        }
    }
}


function ClickTreasureChipBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 0;

    for (let i = 0; i < clickPoint.length; i++) {

        if (clickPoint[i].name === 'map') {

            cpx = clickPoint[i].pos_x;
            cpy = clickPoint[i].pos_y;
            cpsize = clickPoint[i].size;

            if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
                (cpy <= mouseY && cpy + cpsize >= mouseY)) {

                if (mouseLeftClick && !mouseLeftClick_isClicked) {

                    let px = mouseX - cpx;
                    let py = mouseY - cpy;

                    px = Math.floor(px / 64);
                    py = Math.floor(py / 64);

                    cpMapX = px;
                    cpMapY = py;

                    if (treasure[cpMapX][cpMapY].name === "unopened") {
                        GetTreasureMessage(treasure[cpMapX][cpMapY].answer);
                        treasure[cpMapX][cpMapY].name = treasure[cpMapX][cpMapY].answer;
                        treasureReward = true;
                        SetTreasureRewardCommand();

                    }

                    mouseLeftClick_isClicked = true;

                }

                break;
            }
        }
    }
}

function ClickCommandBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 384;

    for (let i = 0; i < command.length; i++) {

        cpx = command[i].pos_x;
        cpy = command[i].pos_y;

        if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
            (cpy <= mouseY && cpy + 24 >= mouseY)) {

            cmdOver = i;

            if (mouseLeftClick && !mouseLeftClick_isClicked) {

                cmdName = command[i].name;
                CommandEvent(cmdName);
                CommandBattleEvent(cmdName);
                mouseLeftClick_isClicked = true;
            }
            break;
        } else {
            cmdOver = -1;
        }
    }
}

function ClickInventoryBehavior() {

    let offset_x = 64;
    let offset_y = 610;

    let cpx = 0;
    let cpy = 0;
    let cpsize = 64;

    let used = false;

    for (let i = 0; i < inventory.length; i++) {

        cpx = offset_x + inventory[i].pos_x;
        cpy = offset_y + inventory[i].pos_y;

        if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
            (cpy <= mouseY && cpy + cpsize >= mouseY)) {

            if (mouseLeftClick && !mouseLeftClick_isClicked) {

                //equip
                for (let j = 0; j < player_equip.length; j++) {
                    if (player_equip[j].type === inventory[i].category) {
                        player_equip[j].name = inventory[i].name;
                        player_equip[j].str = inventory[i].str;
                        player_equip[j].vit = inventory[i].vit;
                    }
                }

                //Consumables
                if (inventory[i].category === "drink") {
                    let an = 20;
                    player_nowhp = (player_nowhp + an > player_maxhp) ? player_maxhp : player_nowhp + an;
                    message.push("体力が" + an + "回復した。");
                }

                inventory.splice(i, 1);
                used = true;
                mouseLeftClick_isClicked = true;
            }
            break;
        }
    }

    //drawing position sort
    if (used) {

        let sx = 0;
        let line = 0;
        let row = 0;

        for (let i = 0; i < inventory.length; i++) {
            inventory[i].pos_x = sx;
            inventory[i].pos_y = row;
            sx += 64;
            line++;
            if (line >= 5) {
                sx = 0;
                line = 0;
                row += 64;
            }
        }
    }
}