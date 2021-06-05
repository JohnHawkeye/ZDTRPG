
//town
function SelectTownLevel(num,x,y) {

    switch (num) {
        case 1:
            world[x][y].name = "town1";
            break;
        case 2:
            world[x][y].name = "town2";
            break;
        case 3:
            world[x][y].name = "town3";
            break;
        case 4:
            world[x][y].name = "town4";
            break;
        case 5:
            world[x][y].name = "town5";
            break;
        case 6:
            world[x][y].name = "town6";
            break;
        case 7:
            world[x][y].name = "town7";
            break;
    }
}

function SelectTownImage(name) {

    let imageName = "";

    switch (name) {
        case "town1":
            imageName = "scenery_mati";
            labelDisplay = "秋風の街";
            break;
        case "town2":
            imageName = "scenery_oasis";
            labelDisplay = "オアシスの村";
            break;
        case "town3":
            imageName = "scenery_maple";
            labelDisplay = "甘蜜の村";
            break;
        case "town4":
            imageName = "scenery_qatar";
            labelDisplay = "砂漠の王国";
            break;
        case "town5":
            imageName = "scenery_levertain";
            labelDisplay = "戦士の国";
            break;
        case "town6":
            imageName = "scenery_dragontown";
            labelDisplay = "龍族の里";
            break;
        case "town7":
            imageName = "scenery_diasempire";
            labelDisplay = "ディアス帝国";
            break;
        default:
            imageName = "scenery_mati";
            labelDisplay = "秋風の街";
            break;
    } 

    return imageName;
}

//field
function SelectFieldLevel(num,x,y) {

    switch (num) {
        case 1:
            world[x][y].name = "field1";
            break;
        case 2:
            world[x][y].name = "field2";
            break;
        case 3:
            world[x][y].name = "field3";
            break;
        case 4:
            world[x][y].name = "field4";
            break;
        case 5:
            world[x][y].name = "field5";
            break;
        case 6:
            world[x][y].name = "field6";
            break;
        case 7:
            world[x][y].name = "field7";
            break;
    }
}

function SelectFieldImage(name) {

    let imageName = "";

    switch (name) {
        case "field1":
            imageName = "scenery_ryunohara";
            labelDisplay = "龍の腹";
            break;
        case "field2":
            imageName = "scenery_mujyou";
            labelDisplay = "無情の砂漠";
            break;
        case "field3":
            imageName = "scenery_hainomori";
            labelDisplay = "灰色の森";
            break;
        case "field4":
            imageName = "scenery_sinokawa";
            labelDisplay = "死の川";
            break;
        case "field5":
            imageName = "scenery_ryunose";
            labelDisplay = "龍の背";
            break;
        case "field6":
            imageName = "scenery_tumeato";
            labelDisplay = "龍の爪痕";
            break;
        case "field7":
            imageName = "scenery_gebura";
            labelDisplay = "火山";
            break;
        default:
            imageName = "scenery_ryunohara";
            labelDisplay = "龍の腹";
            break;
    } 

    return imageName;
}

//dungeon
function SelectDungeonLevel(num,x,y) {

    switch (num) {
        case 1:
            world[x][y].name = "dungeon1";
            break;
        case 2:
            world[x][y].name = "dungeon2";
            break;
        case 3:
            world[x][y].name = "dungeon3";
            break;
        case 4:
            world[x][y].name = "dungeon4";
            break;
        case 5:
            world[x][y].name = "dungeon5";
            break;
        case 6:
            world[x][y].name = "dungeon6";
            break;
        case 7:
            world[x][y].name = "dungeon7";
            break;
    }
}

function SelectDungeonImage(name) {

    let imageName = "";

    switch (name) {
        case "dungeon1":
            imageName = "scenery_doukutu";
            labelDisplay = "小さな洞窟";
            break;
        case "dungeon2":
            imageName = "scenery_slime";
            labelDisplay = "鍾乳洞";
            break;
        case "dungeon3":
            imageName = "scenery_antnest";
            labelDisplay = "アリの巣窟";
            break;
        case "dungeon4":
            imageName = "scenery_oubo";
            labelDisplay = "王の墓";
            break;
        case "dungeon5":
            imageName = "scenery_rustcasl";
            labelDisplay = "ラスト城";
            break;
        case "dungeon6":
            imageName = "scenery_lavacave";
            labelDisplay = "溶岩の洞窟";
            break;
        case "dungeon7":
            imageName = "scenery_firetemple";
            labelDisplay = "炎の神殿";
            break;
        default:
            imageName = "scenery_doukutu";
            labelDisplay = "小さな洞窟";
            break;
    } 

    return imageName;
}

function SelectEquipmentCategory(category){

    let name = "";
    switch (category) {
        case 1:
            name ="left";
            break;
        case 2:
            name ="right";
            break;
        case 3:
            name ="outer";
            break;
        case 4:
            name ="pants";
            break;
        case 5:
            name ="helmet";
            break;
        case 6:
            name ="ring";
            break;
        case 7:
            name ="brcelet";
            break;
        case 8:
            name ="necklace";
            break;
        case 9:
            name ="shoes";
            break;
    }
    return name;
}