
var friendList = [
    //name = flag
    { name: "stand_sika", label: "シカくん", lv: 1, talk_a: ["　こんにちは！"], talk_b: ["　もう友達だよ。"] },
    { name: "stand_lion", label: "ライオンさん", lv: 1, talk_a: ["　よう。"], talk_b: ["　なんかようか？"] },
    { name: "stand_mouko", label: "モウ子", lv: 1, talk_a: ["　おはよ～ん。"], talk_b: ["　うちのミルク、あげちゃう<3。"] },

    { name: "stand_tokagen", label: "トカゲン", lv: 2, talk_a: ["　なんかようか？"], talk_b: ["　まあ、よろしくな。"] },
    { name: "stand_aronasu", label: "アロエナース", lv: 2, talk_a: ["　お体、大丈夫？"], talk_b: ["　無理しないでね。"] },
    { name: "stand_arakuma", label: "アラクマさん", lv: 2, talk_a: ["　あぢー！"], talk_b: ["　それどころじゃねー。"] },

    { name: "stand_kumapati", label: "くまパティシエ", lv: 3, talk_a: ["　ようこそ。"], talk_b: ["　おいしいスイーツ、", "　作ってあげるよ。"] },
    { name: "stand_azarisu", label: "あざといリス", lv: 3, talk_a: ["　なにあんたー。"], talk_b: ["　メープルワッフル", "　超ゆうめー。"] },
    { name: "stand_yomikirin", label: "キリンさん", lv: 3, talk_a: ["　こんにちは。"], talk_b: ["　君も読むかい？"] },

    { name: "stand_hebitan", label: "へびターバン", lv: 4, talk_a: ["　ひょろん～"], talk_b: ["　ひょろひょろん～。"] },
    { name: "stand_tubamen", label: "ツバメン", lv: 4, talk_a: ["　なんだきみは？"], talk_b: ["　悪いやつには気を付けな。"] },
    { name: "stand_umajou", label: "ウマ嬢", lv: 4, talk_a: ["　なにですの？"], talk_b: ["　出せるものはなくてよ。"] },

    { name: "stand_saru", label: "サル戦士", lv: 5, talk_a: ["　ふん。"], talk_b: ["　決闘したいか？"] },
    { name: "stand_usako", label: "うさこ", lv: 5, talk_a: ["　こんにちは！"], talk_b: ["　きみも武道大会にでるの？"] },
    { name: "stand_kamebaa", label: "カメばあ", lv: 5, talk_a: ["　こんにちは。"], talk_b: ["　元気でいいわねぇ～。"] },

    { name: "stand_doraoya", label: "ドラゴン親子", lv: 6, talk_a: ["　よく来たわね。"], talk_b: ["　お友達ですよ。"] },
    { name: "stand_dorago", label: "ドラゴン盗賊", lv: 6, talk_a: ["　やあ。"], talk_b: ["　一緒に冒険するかい？"] },
    { name: "stand_negi", label: "ネギさん", lv: 6, talk_a: ["　ふん～。"], talk_b: ["　こんなとこまできちゃった。"] },

    { name: "stand_d_soldier", label: "龍の兵士", lv: 7, talk_a: ["　モンスターには気を付けなよ。"], talk_b: ["　困ったときは聞いてくれ。"] },
    { name: "stand_dias", label: "ディアス七世", lv: 7, talk_a: ["　よく来たな。"], talk_b: ["　なんでも言ってくれたまえ。"] },
    { name: "stand_buta", label: "ブタさん", lv: 7, talk_a: ["　う～ん。"], talk_b: ["　とんとことん♪"] },
];

var friend_label = "";
var friend_talk_bm = [];


function SetNpcFriend() {

    let lv = cpMapLv;
    let list = [];
    let rn = Math.floor(Math.random() * 3);

    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].lv == lv) {
            list.push(friendList[i]);
        }
    }
    standImage = list[rn].name;
    friend_label = list[rn].label;
    friend_talk_bm = Array.from(list[rn].talk_b);

    message.push("＠" + friend_label);
    message.push(list[rn].talk_a);
    NpcTalkCmd();
}

function ReactionNpcFriend() {

    if (!flags.npc[standImage]) {
        message.push(friend_label + "を友達にした！");
        flags.npc[standImage] = true;
        NpcTalkCmd();
        message.push("ZPを" + cpMapLv + "獲得しました。");
        player_zp += cpMapLv;
    } else {
        message.push("＠" + friend_label);
        for (let i = 0; i < friend_talk_bm.length; i++) {
            message.push(friend_talk_bm[i]);
        }
        if (standImage === "stand_mouko") {
            GetItem("drink");
        }
    }
}

function NpcTalkCmd(){

    let space = 32;
    let word = "－ともだちになる";

    if (flags.npc[standImage])
    word = "－会話する";

    command = [];
    command = [
        { name: 'friend_want', label: word, pos_x: 1184, pos_y: 674 },
        { name: 'seeyou', label: '－さよならする', pos_x: 1184, pos_y: 674 + space * 1 }
    ];
}