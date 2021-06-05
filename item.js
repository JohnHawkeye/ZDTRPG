
var itemList = [
    { name: 'food', category: 'consumable', price: 20, label: "クラッカー", recovery: 20 },
    { name: 'food2', category: 'consumable', price: 30, label: "サボテンサラダ", recovery: 30 },
    { name: 'food3', category: 'consumable', price: 40, label: "メープルワッフル", recovery: 40 },
    { name: 'food4', category: 'consumable', price: 50, label: "高級干し肉", recovery: 50 },
    { name: 'food5', category: 'consumable', price: 60, label: "豚角煮まん", recovery: 60 },
    { name: 'food6', category: 'consumable', price: 70, label: "激辛うま鍋", recovery: 70 },
    { name: 'food7', category: 'consumable', price: 80, label: "ドラゴン肉", recovery: 80 },

    { name: 'drink', category: 'consumable', price: 20, label: "ミルク", recovery: 20 },
];

var inventory = [];
var equipment_table = { merchant: [], chest: [], monster: [] };

function GetItem(name) {

    let sx = inventory.length + 1;
    let row = 0;

    while (sx > 5) {
        sx -= 5;
        row++;
    }
    sx = sx * 64 - 64;
    row *= 64;

    for (let i = 0; i < itemList.length; i++) {
        if (name === itemList[i].name) {
            inventory.push({
                name: itemList[i].name, category: itemList[i].category,
                label: itemList[i].label, price: itemList[i].price,
                str: itemList[i].str, vit: itemList[i].vit,
                recovery: itemList[i].recovery
            });
            break;
        }
    }
    inventory[inventory.length - 1].pos_x = sx;
    inventory[inventory.length - 1].pos_y = row;

    message.push(inventory[inventory.length - 1].label + "を手に入れた！");
}

function GetEquipment(lv, cg) {

    let sx = inventory.length + 1;
    let row = 0;

    while (sx > 5) {
        sx -= 5;
        row++;
    }
    sx = sx * 64 - 64;
    row *= 64;

    for (let i = 0; i < equipment_list.length; i++) {
        if (equipment_list[i].category === cg && equipment_list[i].lv == lv) {
            inventory.push({
                name: equipment_list[i].name, category: equipment_list[i].category,
                label: equipment_list[i].label, lv: equipment_list[i].lv,
                price: equipment_list[i].price,
                str: equipment_list[i].str, vit: equipment_list[i].vit, spd: equipment_list[i].spd,
            });
            break;
        }
    }

    inventory[inventory.length - 1].pos_x = sx;
    inventory[inventory.length - 1].pos_y = row;

    message.push(inventory[inventory.length - 1].label + "を手に入れた！");

}

function SetTreasure() {

    let rn = 0;
    let lotterybox = [];

    for (let i = 0; i < 10; i++) {
        lotterybox.push("hit");
    }
    for (let i = 0; i < 10; i++) {
        //lotterybox.push("hit");
        lotterybox.push("empty");
    }
    for (let i = 0; i < 5; i++) {
        //lotterybox.push("hit");
        lotterybox.push("trap");
    }

    for (let i = 0; i < treasure.length; i++) {
        for (let j = 0; j < treasure[i].length; j++) {

            if (i % 2 != 0 && j % 2 != 0) {
                treasure[i][j].name = "unopened";

                rn = Math.floor(Math.random() * lotterybox.length);
                treasure[i][j].answer = lotterybox[rn];
                lotterybox.splice(rn, 1);
            }
        }
    }
}

function GetTreasureEvent(name) {
    switch (name) {
        case 'hit':
            let rn = Math.floor(Math.random() * 10);
            //rn  = 0;
            if (rn >= 2) {
                rn = (Math.floor(Math.random() * 9) + 4) * 10;
                rn *= cpMapLv;
                message.push(rn + "Sを手に入れた！");
                player_money += rn;
            } else {
                rn = Math.floor(Math.random() * 3);
                GetEquipment(cpMapLv, SelectEquipmentCategory(equipment_table.chest[cpMapLv][rn]));
            }
            break;

        case 'empty':
            message.push("宝箱の中は空っぽだった。");

            break;

        case 'trap':
            message.push("トラップだ！ダメージを受けてしまった！");
            if (player_nowhp - 10 < 0) {
                player_nowhp = 0;
            } else {
                player_nowhp -= 10;
            }
            break;

    }
}

function SetEquipmentTable() {

    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let ans = [];
    let rn = 0;

    for (let i = 0; i < 8; i++) {
        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        ans = [];
        rn = 0;
        equipment_table.merchant[i] = [];
        equipment_table.chest[i] = [];
        equipment_table.monster[i] = [];

        for (let n = 0; n < 9; n++) {
            rn = Math.floor(Math.random() * nums.length);
            ans[n] = nums[rn];
            nums.splice(rn, 1);
        }

        for (let j = 0; j < 9; j++) {
            if (j >= 6) {
                equipment_table.merchant[i].push(ans[j]);
            } else if (j >= 3) {
                equipment_table.chest[i].push(ans[j]);
            } else {
                equipment_table.monster[i].push(ans[j]);
            }
        }
    }
}