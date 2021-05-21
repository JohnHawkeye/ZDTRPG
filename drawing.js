
var standImage = "";

function Render() {

    ctx.imageSmoothingEnabled = false;

    let sw = canvas.width * SCREEN_MAGNIFICATION;
    let sh = canvas.height * SCREEN_MAGNIFICATION;
    ctx.clearRect(0, 0, sw, sh);

    //back ground
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    ctx.drawImage(Asset.images['back'], 0, 0);

    switch (gamemode) {
        case "battle":
            DrawingBattlechip();
            break;
        case "treasure":
            DrawingTreasurechip();
            break;
        case "dungeon":
            DrawingDungeonchip();
            break;
        case "npc":
            if (dungeon_Searching) {
                DrawingDungeonchip();
            }
            break;
        default:
            DrawingWorldIcon();
            break;
    }


    DrawingScenery();

    DrawingMessage();
    DrawingCommand();
    DrawingPlayerState();
    DrawingEquip();
    DrawingInventory();
    DrawingStand();
    DrawingEnemyHealth();
}

function DrawingWorldIcon() {

    let offset_x = 448;
    let offset_y = 98;

    for (let i = 0; i < world.length; i++) {
        for (let j = 0; j < world[i].length; j++) {

            if (typeof Asset.icon_map[world[i][j].name] !== 'undefined') {
                ctx.drawImage(Asset.images['icon_map'],
                    Asset.icon_map[world[i][j].name].sx, Asset.icon_map[world[i][j].name].sy, 64, 64,
                    64 * i + offset_x, 64 * j + offset_y,
                    64, 64);
            }

        }
    }
    //pin
    if (cpMapID >= 1)
        ctx.drawImage(Asset.images['pin'],
            64 * cpPickX + offset_x, 64 * cpPickY + offset_y - 64);
}

function DrawingBattlechip() {
    let offset_x = 448;
    let offset_y = 98;

    for (let i = 0; i < battleChip.length; i++) {
        for (let j = 0; j < battleChip[i].length; j++) {

            if (typeof Asset.icon_map[battleChip[i][j].name] !== 'undefined') {
                ctx.drawImage(Asset.images['icon_map'],
                    Asset.icon_map[battleChip[i][j].name].sx, Asset.icon_map[battleChip[i][j].name].sy, 64, 64,
                    64 * i + offset_x, 64 * j + offset_y,
                    64, 64);
            }

        }
    }
}

function DrawingTreasurechip() {
    let offset_x = 448;
    let offset_y = 98;

    for (let i = 0; i < treasure.length; i++) {
        for (let j = 0; j < treasure[i].length; j++) {

            if (typeof Asset.icon_map[treasure[i][j].name] !== 'undefined') {
                ctx.drawImage(Asset.images['icon_map'],
                    Asset.icon_map[treasure[i][j].name].sx, Asset.icon_map[treasure[i][j].name].sy, 64, 64,
                    64 * i + offset_x, 64 * j + offset_y,
                    64, 64);
            }

        }
    }
}

function DrawingDungeonchip() {
    let offset_x = 448;
    let offset_y = 98;

    for (let i = 0; i < dungeon.length; i++) {
        for (let j = 0; j < dungeon[i].length; j++) {

            if (typeof Asset.icon_map[dungeon[i][j].name] !== 'undefined') {
                ctx.drawImage(Asset.images['icon_map'],
                    Asset.icon_map[dungeon[i][j].name].sx, Asset.icon_map[dungeon[i][j].name].sy, 64, 64,
                    64 * i + offset_x, 64 * j + offset_y,
                    64, 64);
            }

        }
    }
    //pin

    ctx.drawImage(Asset.images['pin'],
        64 * dungeon_posX + offset_x, 64 * dungeon_posY + offset_y - 64);
}


function DrawingScenery() {

    let offset_x = 1184;
    let offset_y = 34;

    let imageName = "";

    switch (cpMapID) {
        case 2:
            imageName = "scenery_myhome";
            break;
        case 3: imageName = SelectTownImage(cpMapName);
            break;
        case 4: imageName = SelectFieldImage(cpMapName);
            break;
        case 5: imageName = SelectDungeonImage(cpMapName);
            break;
    }

    if (typeof Asset.images[imageName] !== 'undefined')
        ctx.drawImage(Asset.images[imageName], offset_x, offset_y);
}

function DrawingMessage() {

    let offset_x = 1184;
    let offset_y = 482;

    ctx.font = 24 + "px PixelMplus12";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";

    for (let i = 0; i < message.length; i++) {
        ctx.fillText(message[i], offset_x + 8, offset_y + 8 + i * 24);
    }


}

function DrawingCommand() {

    ctx.font = 24 + "px PixelMplus12";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";

    if (command.length > 0 && cmdOver >= 0) {
        ctx.fillText("▶", command[cmdOver].pos_x, command[cmdOver].pos_y);
    }

    for (let i = 0; i < command.length; i++) {
        ctx.fillText(command[i].label, command[i].pos_x, command[i].pos_y);
    }
}

function DrawingPlayerState() {

    let offset_x = 64;
    let offset_y = 66;
    let space = 24;

    ctx.font = 24 + "px PixelMplus12";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";


    //hp
    ctx.fillText("HP:" + player_nowhp + " / " + player_maxhp, offset_x + 8, offset_y + 8);
    ctx.fillText("STR:" + player_str + "(+" + player_equip_str + ")", offset_x + 8, offset_y + 8 + space * 1);
    ctx.fillText("VIT:" + player_vit + "(+" + player_equip_vit + ")", offset_x + 8, offset_y + 8 + space * 2);
    //ctx.fillText("SPD:" + player_spd + "(+" + + ")", offset_x + 8, offset_y + 8 + space * 1);
    ctx.fillText("ZP:" + player_zp, offset_x + 8, offset_y + 8 + space * 3);

    //money
    offset_x = 400;
    offset_y = 816;

    ctx.font = 24 + "px PixelMplus12";
    ctx.textBaseline = "top";
    ctx.textAlign = "right";
    ctx.fillStyle = "white";
    ctx.fillText(player_money + " STAR", offset_x + 8, offset_y + 8);
}

function DrawingEquip() {

    let offset_x = 64;
    let offset_y = 450;
    let line = 0; row = 0;

    for (let i = 0; i < player_equip.length; i++) {
        if (typeof player_equip[i] !== 'undefined' && player_equip[i].name !== "") {
            ctx.drawImage(Asset.images['icon_item'],
                Asset.icon_item[player_equip[i].name].sx, Asset.icon_item[player_equip[i].name].sy,
                64, 64,
                offset_x + 64 * line, offset_y + row,
                64, 64);
        }
        line++;
        if (line >= 5) {
            line = 0;
            row = 64;
        }

    }
}

function DrawingInventory() {

    let offset_x = 64;
    let offset_y = 610;

    for (let i = 0; i < inventory.length; i++) {
        ctx.drawImage(Asset.images['icon_item'],
            Asset.icon_item[inventory[i].name].sx, Asset.icon_item[inventory[i].name].sy,
            64, 64,
            offset_x + inventory[i].pos_x, offset_y + inventory[i].pos_y,
            64, 64);
    }

}

function DrawingStand() {

    let sx = 0;
    let sy = 0;
    let size_w = 0;
    let size_h = 0;
    let bigger = 0;
    let rate = 0;

    if (typeof Asset.images[standImage] !== 'undefined') {

        sx = (SCREEN_WIDTH - Asset.images[standImage].width) / 2;
        sy = (SCREEN_HEIGHT - Asset.images[standImage].height) / 2;
        size_w = Asset.images[standImage].width;
        size_h = Asset.images[standImage].height;

        //battle mode
        if (gamemode === "battle" || gamemode === "treasure") {
            sx = 1184 + 384 / 2, sy = 34 + 416 / 2;

            if (size_w > 384 || size_h > 384) {
                bigger = (size_w > size_h) ? size_w : size_h;

                rate = (Math.round((bigger / 384) * 100) / 100);
                Math.floor(rate * size_w);
                size_w = Math.floor(size_w/rate);
                size_h = Math.floor(size_h/rate);
                sx -= size_w / 2;
                sy -= size_h / 2;
            } else {
                sx -= Asset.images[standImage].width / 2;
                sy -= Asset.images[standImage].height / 2;
            }
        }

        ctx.drawImage(Asset.images[standImage], 0, 0,
            Asset.images[standImage].width, Asset.images[standImage].height,
            sx, sy, size_w, size_h);
    }
}

function DrawingEnemyHealth() {

    let sx = 0;
    let sy = 0;

    if (typeof Asset.images[standImage] !== 'undefined' &&
        enemy_name != "") {

        sx = (SCREEN_WIDTH - Asset.images[standImage].width) / 2;
        sy = (SCREEN_HEIGHT - Asset.images[standImage].height) / 2;

        ctx.font = 32 + "px PixelMplus12";
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgb(96,49,0)";
        ctx.fillText("敵の体力: " + enemy_nowhp, CENTER_X, 32);
        ctx.fillText("あなたの体力: " + player_nowhp, CENTER_X, 840);
    }

    if (battleReward) {
        ctx.font = 32 + "px PixelMplus12";
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgb(96,49,0)";
        ctx.fillText("勝利！！ ", CENTER_X, 32);
    }
}