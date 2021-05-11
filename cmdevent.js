
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
            gamemode = "free";
            standImage = "";
            GenerateCommand();
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
            break;

        case 'battle_reward':
            gamemode = "free";
            battleReward = false;
            GenerateCommand();
            break;

        case 'treasure_reward':
            gamemode = "free";
            standImage = "";
            treasureReward = false;
            GenerateCommand();
            break;
    }
}

function Explore() {

    if (player_nowhp > world[cpMapX][cpMapY].level * 10) {

        player_nowhp -= world[cpMapX][cpMapY].level * 10;

        let rn = Math.floor(Math.random() * 5);

        if (rn <= 2) {
            rn = Math.floor(Math.random() * 5);
            rn = 0;
            if (rn != 0) {
                message.push("特に何も見つからなかった。");
            } else {
                message.push("宝箱を発見した！");
                gamemode = "treasure";
                standImage = "stand_hako";
                SetTreasure();
                SetTreasureCommand();
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