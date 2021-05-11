
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
            break;
        case "town2":
            imageName = "scenery_oasis";
            break;
        case "town3":
            imageName = "scenery_maple";
            break;
        case "town4":
            imageName = "scenery_qatar";
            break;
        case "town5":
            imageName = "scenery_levertain";
            break;
        case "town6":
            imageName = "scenery_dragontown";
            break;
        case "town7":
            imageName = "scenery_diasempire";
            break;
        default:
            imageName = "scenery_mati";
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
            break;
        case "field2":
            imageName = "scenery_mujyou";
            break;
        case "field3":
            imageName = "scenery_hainomori";
            break;
        case "field4":
            imageName = "scenery_sinokawa";
            break;
        case "field5":
            imageName = "scenery_ryunose";
            break;
        case "field6":
            imageName = "scenery_tumeato";
            break;
        case "field7":
            imageName = "scenery_gebura";
            break;
        default:
            imageName = "scenery_ryunohara";
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
            break;
        case "dungeon2":
            imageName = "scenery_slime";
            break;
        case "dungeon3":
            imageName = "scenery_antnest";
            break;
        case "dungeon4":
            imageName = "scenery_oubo";
            break;
        case "dungeon5":
            imageName = "scenery_rustcasl";
            break;
        case "dungeon6":
            imageName = "scenery_lavacave";
            break;
        case "dungeon7":
            imageName = "scenery_firetemple";
            break;
        default:
            imageName = "scenery_ryunohara";
            break;
    } 

    return imageName;
}