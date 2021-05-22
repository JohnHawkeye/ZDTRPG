
function GenerateCommand() {

    command = [];
    cmdOver = -1;

    let ls = 32;

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
                { name: 'shopping', label: '－お買い物をする', pos_x: 1184, pos_y: 674 + ls },
            ];
            break;

        case 4:
            command = [
                { name: 'explore_field', label: '－探索する', pos_x: 1184, pos_y: 674 }
            ];
            break;

        case 5:
            if (!dungeon_Searching) {
                command = [
                    { name: 'goto_dungeon', label: '－進入する', pos_x: 1184, pos_y: 674 }
                ];
            }
            break;
    }
}

function CommandEvent(name) {

    switch (name) {
        case 'explore':
            GetItem("left");
            GetItem("helmet");
            GetMessage(name);
            break;
        case 'sleep':
            GetMessage(name);
            player_nowhp = player_maxhp;
            break;

        case 'talk_npc':
            GetMessage(name);
            gamemode = "npc";
            break;

        case 'friend_want':
            ReactionNpcFriend();
            break;

        case 'shopping':
            Shopping();
            gamemode = "npc";
            break;

        case 'seeyou':
            message = [];
            GenerateCommand();
            SetAreaData();

            standImage = "";
            gamemode = "free";
            break;

        case 'explore_field':
            Explore();
            break;

        case 'explore_dungeon':
            Explore();
            break;

        case 'treasure_leave':
            standImage = "";

            if (!dungeon_Searching) {
                gamemode = "free";
                GenerateCommand();
            } else {
                gamemode = "dungeon";
                message.push("宝箱がある。");
                command = [
                    { name: 'dungeon_treasure', label: '－あけてみる', pos_x: 1184, pos_y: 674 },
                ];
            }
            break;

        case 'goto_dungeon':
            gamemode = "dungeon";
            dungeon_Searching = true;
            command = [];
            SetDungeonData();
            break;

        case 'dungeon_escape':
            cpMapX = cpPickX;
            cpMapY = cpPickY;
            gamemode = "free";
            dungeon_Searching = false;
            GenerateCommand();
            break;

        case 'dungeon_treasure':
            gamemode = "treasure";
            standImage = "stand_hako";
            SetTreasure();
            SetTreasureCommand();
            break;

        case 'dungeon_boss':
            //SetEnemyBossData();
            gamemode = "battle";
            SetBattleChip();
            break;
    }
}

function CommandBattleEvent(name) {
    switch (name) {
        case 'battle':
            gamemode = "battle";
            SetBattleChip();
            break;

        case 'escape':
            GenerateCommand();
            message.push("なんとか逃げ切った。");
            standImage = "";
            enemy_name = "";

            gamemode = "free";
            //in dungeon
            gamemode = (dungeon_Searching) ? "dungeon" : "free";
            break;

        case 'battle_reward':
            gamemode = "free";
            //in dungeon
            gamemode = (dungeon_Searching) ? "dungeon" : "free";
            battlePlayerAction = "";
            battleEnemyAction ="";

            battleReward = false;
            GenerateCommand();
            break;

        case 'treasure_reward':
            gamemode = "free";
            //in dungeon
            gamemode = (dungeon_Searching) ? "dungeon" : "free";

            standImage = "";
            treasureReward = false;
            GenerateCommand();
            break;
    }
}

function Explore() {

    if (player_nowhp > world[cpMapX][cpMapY].level * 10) {

        player_nowhp -= world[cpMapX][cpMapY].level * 10;

        let rn = Math.floor(Math.random() * 10);
        rn = 6;

        if (rn >= 6) {
            rn = Math.floor(Math.random() * 10);
            if (rn >= 2) {
                message.push("特に何も見つからなかった。");
            } else {

                //detect town or dungeon
                rn = Math.floor(Math.random() * 2);
                if (rn == 0) {
                    if (!flags.map[world[cpMapX][cpMapY].level].town) {
                        SelectTownLevel(world[cpMapX][cpMapY].level, cpMapX, cpMapY);
                        message.push("町を発見した！");
                        world[cpMapX][cpMapY].type = 3;
                        flags.map[world[cpMapX][cpMapY].level].town = true;
                    } else {
                        message.push("これ以上は見つからなさそうだ。");
                    }

                } else {
                    if (!flags.map[world[cpMapX][cpMapY].level].dungeon) {
                        SelectDungeonLevel(world[cpMapX][cpMapY].level, cpMapX, cpMapY);
                        message.push("ダンジョンを発見した！");
                        world[cpMapX][cpMapY].type = 5;
                        flags.map[world[cpMapX][cpMapY].level].dungeon = true;
                    } else {
                        message.push("これ以上は見つからなさそうだ。");
                    }
                }


                //map data update
                cpMapID = world[cpMapX][cpMapY].type;
                cpMapName = world[cpMapX][cpMapY].name;
                GenerateCommand();
                SetAreaData();
            }
        } else {
            message.push("モンスターが現れた！");
            SetEnemyData();
            SetBattleCommand();
            gamemode = "npc";

        }
    } else {
        message.push("探索できる体力が残っていない。");
        message.push("家に帰って休もう。");
    }

}