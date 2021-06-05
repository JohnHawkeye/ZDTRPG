
var dungeon = [];
var dungeon_posX = 0;
var dungeon_posY = 0;
var dungeon_Searching = false;

var piyodou = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 3, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function SetDungeonData() {

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            switch (piyodou[j][i]) {
                case 0:
                    dungeon[i][j] = { name: "block", answer: "block" };
                    break;
                case 1:
                    dungeon[i][j] = { name: "undeveloped", answer: "nothing" };
                    break;
                case 2:
                    dungeon[i][j] = { name: "start", answer: "start" };
                    dungeon_posX = i;
                    dungeon_posY = j;
                    break;
                case 3:
                    dungeon[i][j] = { name: "boss", answer: "boss" };
                    break;

            }

            //
            if (dungeon[i][j].name === "undeveloped") {
                let rn = Math.floor(Math.random() * 10);
                let num = rn;

                if (num > 6) {
                    dungeon[i][j].answer = "minion";
                } else {
                    switch (rn) {
                        case 4:
                            dungeon[i][j].answer = "treasure";
                            break;
                        case 5:
                            dungeon[i][j].answer = "pit";
                            break;
                        case 6:
                            dungeon[i][j].answer = "obstacle";
                            break;
                        default:
                            dungeon[i][j].answer = "nothing";
                            break;
                    }
                }
            }
        }
    }

    message.push("外の景色が見える。");
    command = [];
    command = [
        { name: 'dungeon_escape', label: '－脱出する', pos_x: 1184, pos_y: 674 },
    ];
}

function DungeonMovingEvent() {

    if (dungeon[dungeon_posX][dungeon_posY].name === "undeveloped")
        dungeon[dungeon_posX][dungeon_posY].name = dungeon[dungeon_posX][dungeon_posY].answer;

    standImage = "";
    switch (dungeon[dungeon_posX][dungeon_posY].name) {
        case "start":
            GenerateDungeonCommand();
            break;

        case "nothing":
            GenerateDungeonCommand();
            break;

        case "pit":
            let rn = Math.floor(Math.random() * 10);
            if (rn >= 2) {
                message.push("罠にかかってしまった！");
                if (player_nowhp - 10 < 0) {
                    player_nowhp = 0;
                } else {
                    player_nowhp -= 10;
                }
            } else {
                message.push("罠だ！");
                message.push("しかし運よくかからなかった。");
            }

            GenerateDungeonCommand();
            break;

        case "treasure":
            GenerateDungeonCommand();
            break;

        case "obstacle":
            break;

        case "minion":
            message.push("モンスターだ。");
            message.push("しかしまだこちらに気付いていない。");
            SetEnemyData();
            SetBattleCommand();
            break;

        case "boss":
            GenerateDungeonCommand();
            SetEnemyBossData();
            break;
    }
}

function GenerateDungeonCommand() {

    command = [];

    switch (dungeon[dungeon_posX][dungeon_posY].name) {
        case "start":
            message.push("外の景色が見える。");
            command = [
                { name: 'dungeon_escape', label: '－脱出する', pos_x: 1184, pos_y: 674 },
            ];
            break;

        case "nothing":
            message.push("特に何もないみたいだ。");
            command = [
                { name: 'dungeon_investigate', label: '－辺りを調べる', pos_x: 1184, pos_y: 674 },
            ];
            break;

        case "pit":

            break;

        case "treasure":

            message.push("宝箱を見つけた。");
            command = [
                { name: 'dungeon_treasure', label: '－あけてみる', pos_x: 1184, pos_y: 674 },
            ];
            break;

        case 'boss':
            message.push("ヤバそうなモンスターがいる。");
            command = [
                { name: 'dungeon_boss', label: '－戦ってみる', pos_x: 1184, pos_y: 674 },
            ];
            break;

    }
}