
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
            break;
    }
}

function SetTreasureCommand(){
    command = [
        { name: 'treasure_leave', label: '－何もせずに立ち去る', pos_x: 1184, pos_y: 674 },
    ];
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