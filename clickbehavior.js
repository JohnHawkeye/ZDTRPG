
var clickPointX = 448;
var clickPointY = 98;
var clickPointSize = 704;
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

    cpx = clickPointX;
    cpy = clickPointY;
    cpsize = clickPointSize;

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
    }
}

function ClickBattleChipBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 0;

    cpx = clickPointX;
    cpy = clickPointY;
    cpsize = clickPointSize;

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
    }
}


function ClickTreasureChipBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 0;

    cpx = clickPointX;
    cpy = clickPointY;
    cpsize = clickPointSize;

    if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
        (cpy <= mouseY && cpy + cpsize >= mouseY)) {

        if (mouseLeftClick && !mouseLeftClick_isClicked) {

            let px = mouseX - cpx;
            let py = mouseY - cpy;

            px = Math.floor(px / 64);
            py = Math.floor(py / 64);

            if (treasure[px][py].name === "unopened") {
                GetTreasureMessage(treasure[px][py].answer);
                treasure[px][py].name = treasure[px][py].answer;
                treasureReward = true;
                SetTreasureRewardCommand();
                //in dungeon
                if (dungeon_Searching)
                    dungeon[dungeon_posX][dungeon_posY].name = "nothing";
            }
            mouseLeftClick_isClicked = true;
        }
    }
}


function ClickDungeonBehavior() {

    let cpx = 0;
    let cpy = 0;
    let cpsize = 0;

    cpx = clickPointX;
    cpy = clickPointY;
    cpsize = clickPointSize;

    if ((cpx <= mouseX && cpx + cpsize >= mouseX) &&
        (cpy <= mouseY && cpy + cpsize >= mouseY)) {

        if (mouseLeftClick && !mouseLeftClick_isClicked) {

            let px = mouseX - cpx;
            let py = mouseY - cpy;

            px = Math.floor(px / 64);
            py = Math.floor(py / 64);

            if ((dungeon_posX - px == -1 && dungeon_posY - py == 0) ||
                (dungeon_posX - px == 1 && dungeon_posY - py == 0) ||
                (dungeon_posY - py == -1 && dungeon_posX - px == 0) ||
                (dungeon_posY - py == 1 && dungeon_posX - px == 0) ||
                (dungeon_posX == px && dungeon_posY == py)) {
                if (dungeon[px][py].name !== "block") {
                    dungeon_posX = px;
                    dungeon_posY = py;
                    DungeonMovingEvent();
                }
            }
            mouseLeftClick_isClicked = true;
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
                ShoppingCommand(cmdName,command[i].value,command[i].price);
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
                PlayerEquipAddition();

                //Consumables
                if (inventory[i].category === "consumable") {
                    let an = inventory[i].recovery;
                    player_nowhp = (player_nowhp + an > player_maxhp) ? player_maxhp : player_nowhp + an;
                    message.push(inventory[i].label + "を使用した。");
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