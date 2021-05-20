var enemy_name = "";
var enemy_nowhp = 0;
var enemy_str = 0;
var enemy_vit = 0;
var enemy_spd = 0;

var enemy = [
    //field1
    { name: "mob_ryunohara_a", area: "field1", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_ryunohara_b", area: "field1", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_ryunohara_c", area: "field1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_ryunohara_d", area: "field1", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_mujyou_a", area: "field2", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_mujyou_b", area: "field2", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_mujyou_c", area: "field2", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_mujyou_d", area: "field2", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_haimori_a", area: "field3", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_haimori_b", area: "field3", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_haimori_c", area: "field3", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_haimori_d", area: "field3", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_sinokawa_a", area: "field4", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_sinokawa_b", area: "field4", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_sinokawa_c", area: "field4", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_sinokawa_d", area: "field4", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_ryunose_a", area: "field5", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_ryunose_b", area: "field5", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_ryunose_c", area: "field5", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_ryunose_d", area: "field5", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_tumeato_a", area: "field6", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_tumeato_b", area: "field6", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_tumeato_c", area: "field6", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_tumeato_d", area: "field6", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_gebura_a", area: "field7", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_gebura_b", area: "field7", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_gebura_c", area: "field7", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_gebura_d", area: "field7", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
    //dungeon
    { name: "mob_piyodou_a", area: "dungeon1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_piyodou_b", area: "dungeon1", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_piyodou_c", area: "dungeon1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_piyodou_d", area: "dungeon1", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
    { name: "mob_suradou_a", area: "dungeon2", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_suradou_b", area: "dungeon2", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_suradou_c", area: "dungeon2", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_suradou_d", area: "dungeon2", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
    { name: "mob_arinosu_a", area: "dungeon3", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_arinosu_b", area: "dungeon3", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_arinosu_c", area: "dungeon3", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_arinosu_d", area: "dungeon3", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
    { name: "mob_oubo_a", area: "dungeon4", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_oubo_b", area: "dungeon4", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_oubo_c", area: "dungeon4", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_oubo_d", area: "dungeon4", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
    { name: "mob_rust_a", area: "dungeon5", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_rust_b", area: "dungeon5", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_rust_c", area: "dungeon5", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_rust_d", area: "dungeon5", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
    { name: "mob_lava_a", area: "dungeon6", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_lava_b", area: "dungeon6", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_lava_c", area: "dungeon6", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_lava_d", area: "dungeon6", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
    { name: "mob_sinden_a", area: "dungeon7", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_sinden_b", area: "dungeon7", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_sinden_c", area: "dungeon7", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 10 },
    { name: "mob_sinden_d", area: "dungeon7", type: 'boss', nowhp: 60, str: 20, vit: 20, spd: 20 },
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
    enemy_nowhp = enemy_selected[0].nowhp;
    enemy_str = enemy_selected[0].str;
    enemy_vit = enemy_selected[0].vit;
    enemy_spd = enemy_selected[0].spd;
}