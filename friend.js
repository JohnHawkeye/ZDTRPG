
function SetNpcFriend() {
    let num = Math.floor(Math.random() * 4);

    switch (num) {
        case 0:
            standImage = "stand_sika";
            message.push("＠シカくん");
            message.push("　こんにちは！");
            break;
        case 1:
            standImage = "stand_lion";
            message.push("＠ライオンさん");
            message.push("　よう。");
            break;
        case 2:
            standImage = "stand_d_soldier";
            message.push("＠龍の兵士");
            message.push("　モンスターには気を付けなよ。");
            break;
        case 3:
            standImage = "stand_mouko";
            message.push("＠モウ子さん");
            message.push("　おはよ～ん。");
            break;
    }
}

function ReactionNpcFriend() {
    switch (standImage) {
        case "stand_sika":
            if (!flags.npc['sika']) {
                message.push("シカくんを友達にした！");
                message.push("ZPを1獲得しました。");
                flags.npc['sika'] = true;
                player_zp++;
            }else{
                message.push("＠シカくん");
                message.push("　もう友達だよ。");
            }
            break;
        case "stand_lion":
            if (!flags.npc['lion']) {
                message.push("ライオンさんを友達にした！");
                message.push("ZPを1獲得しました。");
                flags.npc['lion'] = true;
                player_zp++;
            }else{
                message.push("＠ライオンさん");
                message.push("　なんかようか？");
            }
            break;
        case "stand_d_soldier":
            if (!flags.npc['d_soldier']) {
                message.push("龍の兵士を友達にした！");
                message.push("ZPを1獲得しました。");
                flags.npc['d_soldier'] = true;
                player_zp++;
            }else{
                message.push("＠龍の兵士");
                message.push("　困ったときは聞いてくれ。");
            }
            break;
            
        case "stand_mouko":
            if (!flags.npc['mouko']) {
                message.push("モウ子さんを友達にした！");
                message.push("ZPを1獲得しました。");
                flags.npc['mouko'] = true;
                player_zp++;
            }else{
                message.push("＠モウ子さん");
                message.push("　うちのミルク、あげちゃう<3。");
                GetItem("drink");
            }
            break;
    }
}