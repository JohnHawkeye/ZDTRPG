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

    //
    { name: "mob_bat", area: "dungeon1", type: 'minion', nowhp: 20, str: 20, vit: 10, spd: 10 },
    { name: "mob_bat", area: "dungeon1", type: 'minion', nowhp: 20, str: 10, vit: 20, spd: 10 },
    { name: "mob_bat", area: "dungeon1", type: 'minion', nowhp: 20, str: 10, vit: 10, spd: 20 },
    { name: "mob_bat", area: "dungeon1", type: 'boss', nowhp: 20, str: 10, vit: 10, spd: 10 },
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
