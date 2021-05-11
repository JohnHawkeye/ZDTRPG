
var message = [];

function GetMessage(name) {
    switch (name) {
        case 'explore':
            break;

        case 'sleep':
            message.push("ぐっすり休んで疲れがとれた。");
            break;

        case 'talk_npc':
            SetNpcFriend();
            SetMessageBranch();
            break;
    }
}

function SetMessageBranch() {

    let space = 32;

    command = [];
    command = [
        { name: 'friend_want', label: '－ともだちになる', pos_x: 1184, pos_y: 674 },
        { name: 'seeyou', label: '－さよならする', pos_x: 1184, pos_y: 674 + space * 1 }
    ];
}

function GetTreasureMessage(name){
    switch (name) {
        case 'hit':
            GetItem("drink");
            break;

        case 'empty':
            message.push("宝箱の中は空っぽだった。");
            
            break;

        case 'trap':
            message.push("トラップだ！ダメージを受けてしまった！");
            if(player_nowhp - 10 < 0){
                player_nowhp = 0;
            }else{
                player_nowhp -= 10;
            }
            break;

    }
}

function SetBattleCommand() {

    let space = 32;
    command = [];
    command = [
        { name: 'battle', label: '－たたかう', pos_x: 1184, pos_y: 674 + space * 0 },
        { name: 'escape', label: '－にげる', pos_x: 1184, pos_y: 674 + space * 1 },
    ];
}

function SetBattleRewardCommand() {
    command = [];
    command = [
        { name: 'battle_reward', label: '－探索を続ける', pos_x: 1184, pos_y: 674 }
    ];
}

function SetTreasureRewardCommand() {
    command = [];
    command = [
        { name: 'treasure_reward', label: '－探索を続ける', pos_x: 1184, pos_y: 674 }
    ];
}
//                            let user = window.prompt("TEST", "");