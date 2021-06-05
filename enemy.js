var enemy_name = "";
var enemy_label = "";
var enemy_type = "";
var enemy_nowhp = 0;
var enemy_str = 0;
var enemy_vit = 0;
var enemy_spd = 0;

var enemy = [
    //field1
    { name: "mob_ryunohara_a", label: "ぴよっこ", area: "field1", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_ryunohara_b", label: "岩石の精霊", area: "field1", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_ryunohara_c", label: "炎のインプ", area: "field1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_ryunohara_d", label: "岩の巨大カメ", area: "field1", type: 'boss', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_mujyou_a", label: "一つ目サソリ", area: "field2", type: 'minion', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_mujyou_b", label: "炎のアブ", area: "field2", type: 'minion', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_mujyou_c", label: "空飛ぶサボテン", area: "field2", type: 'minion', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_mujyou_d", label: "砂漠の巨大ワーム", area: "field2", type: 'boss', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_haimori_a", label: "赤いアリ", area: "field3", type: 'minion', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_haimori_b", label: "歩くどんぐり", area: "field3", type: 'minion', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_haimori_c", label: "ウサギ忍者", area: "field3", type: 'minion', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_haimori_d", label: "カブト戦士", area: "field3", type: 'boss', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_sinokawa_a", label: "泥沼の死者", area: "field4", type: 'minion', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_sinokawa_b", label: "死肉を食らう魚", area: "field4", type: 'minion', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_sinokawa_c", label: "あざ笑う亡霊", area: "field4", type: 'minion', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_sinokawa_d", label: "鉄のアリ地獄", area: "field4", type: 'boss', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_ryunose_a", label: "ゴーレムの鉄槌", area: "field5", type: 'minion', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_ryunose_b", label: "炎のムカデ", area: "field5", type: 'minion', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_ryunose_c", label: "吸水植物", area: "field5", type: 'minion', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_ryunose_d", label: "岩肌巨大トカゲ", area: "field5", type: 'boss', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_tumeato_a", label: "炎の魔術師", area: "field6", type: 'minion', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_tumeato_b", label: "炎の怪鳥", area: "field6", type: 'minion', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_tumeato_c", label: "炎のトカゲ", area: "field6", type: 'minion', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_tumeato_d", label: "溶岩巨人", area: "field6", type: 'boss', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_gebura_a", label: "黒曜の噴煙", area: "field7", type: 'minion', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_gebura_b", label: "爆弾小僧", area: "field7", type: 'minion', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_gebura_c", label: "尖った小竜", area: "field7", type: 'minion', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_gebura_d", label: "岩石の守護者", area: "field7", type: 'boss', nowhp: 940, str: 150, vit: 150, spd: 150 },
    //dungeon
    { name: "mob_piyodou_a", label: "つるされたコウモリ", area: "dungeon1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_piyodou_b", label: "ひよこ剣士", area: "dungeon1", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_piyodou_c", label: "ひよこ魔術師", area: "dungeon1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_piyodou_d", label: "ひよこ隊長", area: "dungeon1", type: 'boss', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_suradou_a", label: "スライム", area: "dungeon2", type: 'minion', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_suradou_b", label: "歩くシメジ", area: "dungeon2", type: 'minion', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_suradou_c", label: "溶けたゾンビ", area: "dungeon2", type: 'minion', nowhp: 220, str: 30, vit: 30, spd: 30 },
    { name: "mob_suradou_d", label: "吸血スライム", area: "dungeon2", type: 'boss', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_arinosu_a", label: "アリの戦士", area: "dungeon3", type: 'minion', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_arinosu_b", label: "アリの狩人", area: "dungeon3", type: 'minion', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_arinosu_c", label: "アリの魔術師", area: "dungeon3", type: 'minion', nowhp: 340, str: 50, vit: 50, spd: 50 },
    { name: "mob_arinosu_d", label: "女王アリ", area: "dungeon3", type: 'boss', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_oubo_a", label: "恨みの霊魂", area: "dungeon4", type: 'minion', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_oubo_b", label: "奈落の門", area: "dungeon4", type: 'minion', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_oubo_c", label: "墓石の兵", area: "dungeon4", type: 'minion', nowhp: 460, str: 70, vit: 70, spd: 70 },
    { name: "mob_oubo_d", label: "地獄の大剣", area: "dungeon4", type: 'boss', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_rust_a", label: "ポルターガイスト", area: "dungeon5", type: 'minion', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_rust_b", label: "一族の暗殺者", area: "dungeon5", type: 'minion', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_rust_c", label: "鋼鉄の巨人", area: "dungeon5", type: 'minion', nowhp: 580, str: 90, vit: 90, spd: 90 },
    { name: "mob_rust_d", label: "薔薇の末裔", area: "dungeon5", type: 'boss', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_lava_a", label: "溶岩スライム", area: "dungeon6", type: 'minion', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_lava_b", label: "炎の精霊", area: "dungeon6", type: 'minion', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_lava_c", label: "爆弾虫", area: "dungeon6", type: 'minion', nowhp: 700, str: 110, vit: 110, spd: 110 },
    { name: "mob_lava_d", label: "炎の龍", area: "dungeon6", type: 'boss', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_sinden_a", label: "炎の監視者", area: "dungeon7", type: 'minion', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_sinden_b", label: "炎の演舞者", area: "dungeon7", type: 'minion', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_sinden_c", label: "炎の守護者", area: "dungeon7", type: 'minion', nowhp: 820, str: 130, vit: 130, spd: 130 },
    { name: "mob_sinden_d", label: "マケーラヴナツ", area: "dungeon7", type: 'boss', nowhp: 940, str: 150, vit: 150, spd: 150 },
];

var enemy_selected = [];

function SetEnemyData() {

    let count = 0;
    let rn = 0;

    enemy_selected = [];

    for (let i = 0; i < enemy.length; i++) {
        if (cpMapName === enemy[i].area && enemy[i].type === "minion") {
            enemy_selected.push(enemy[i]);
            count++;
            if (count > 2) {
                break;
            }
        }
    }

    rn = Math.floor(Math.random() * 3);

    standImage = enemy_selected[rn].name;
    enemy_name = enemy_selected[rn].name;
    enemy_label = enemy_selected[rn].label;
    enemy_type = enemy_selected[rn].type;
    enemy_nowhp = enemy_selected[rn].nowhp;
    enemy_str = enemy_selected[rn].str;
    enemy_vit = enemy_selected[rn].vit;
    enemy_spd = enemy_selected[rn].spd;
}

function SetEnemyBossData() {

    let rn = 0;

    enemy_selected = [];

    for (let i = 0; i < enemy.length; i++) {
        if (cpMapName === enemy[i].area && enemy[i].type === "boss") {
            enemy_selected.push(enemy[i]);
            break;
        }
    }

    standImage = enemy_selected[0].name;
    enemy_name = enemy_selected[0].name;
    enemy_label = enemy_selected[0].label;
    enemy_type = enemy_selected[0].type;
    enemy_nowhp = enemy_selected[0].nowhp;
    enemy_str = enemy_selected[0].str;
    enemy_vit = enemy_selected[0].vit;
    enemy_spd = enemy_selected[0].spd;
}