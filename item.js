
var itemList = [
    { name: 'left', category: 'left', label: "ムチ", str: 10, vit: 0 },
    { name: 'helmet', category: 'helmet', label: "帽子", str: 0, vit: 0 },

    { name: 'food', category: 'consumable', price: 100, label: "クラッカー",recovery:20},
    { name: 'drink', category: 'consumable', price: 100, label: "ミルク",recovery:20},
];

var inventory = [];


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
                label: itemList[i].label,
                str: itemList[i].str, vit: itemList[i].vit,
                recovery:itemList[i].recovery
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
        lotterybox.push("empty");
    }
    for (let i = 0; i < 5; i++) {
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