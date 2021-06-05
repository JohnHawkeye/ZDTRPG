function Training() {

    let price = 100 * cpMapLv;

    standImage = "stand_budouka";
    message.push("＠武道家");
    message.push("　鍛えたいのか？");
    message.push("　" + price + "Sかかるが、どうする？");
    command = [];
    cmdOver = -1;
    command = [
        { name: "training_train", label: "－たのむ！", price: price, pos_x: 1184, pos_y: 674 }
    ];
    command.push({ name: "seeyou", label: "－やめときます...", pos_x: 1184, pos_y: 674 + 32 * command.length });
}

function Inn() {

    let price = 10 *cpMapLv;

    standImage = "stand_inosisi";
    message.push("＠宿屋のおばはん");
    message.push("　" + price + "Sだけど、泊ってくかい？");
    command = [];
    cmdOver = -1;
    command = [
        { name: "inn_stay", label: "－へい", price: price, pos_x: 1184, pos_y: 674 }
    ];
    command.push({ name: "seeyou", label: "－宿屋を出る", pos_x: 1184, pos_y: 674 + 32 * command.length });
}

function Shopping() {

    standImage = "stand_kitune";
    message.push("＠キツネの行商人");
    message.push("　いらっしゃい。なんか買う？");

    let label = "";
    let value = "";
    let price = 0;

    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].name === "food") {
            value = itemList[i].name;
            label = "－" + itemList[i].label;
            price = itemList[i].price;
            break;
        }
    }
    command = [];
    cmdOver = -1;
    command = [
        { name: "shopping_buy", label: label + " " + price + "S", value: value, price: price, pos_x: 1184, pos_y: 674 }
    ];

    //equipment
    for (let i = 0; i < equipment_table.merchant[cpMapLv].length; i++) {
        console.log(equipment_table.merchant[cpMapLv]);
        for (let j = 0; j < equipment_list.length; j++) {
            console.log(cpMapLv + "," + SelectEquipmentCategory(equipment_table.merchant[cpMapLv][i]));
            if (equipment_list[j].lv == cpMapLv &&
                equipment_list[j].category === SelectEquipmentCategory(equipment_table.merchant[cpMapLv][i])) {
                console.log(equipment_list[j]);
                command.push({
                    name: "shopping_equip",
                    label: "－" + equipment_list[j].label + " " + equipment_list[j].price + "S",
                    lv: equipment_list[j].lv, category: equipment_list[j].category,
                    value: equipment_list[j].name,
                    price: equipment_list[j].price,
                    pos_x: 1184, pos_y: 674 + 32 * command.length
                });
            }
        }
    }

    command.push({ name: "shopping_end", label: "－買い物をやめる", pos_x: 1184, pos_y: 674 + 32 * command.length });
}

function ShoppingCommand(name, value, price, lv, category) {

    switch (name) {
        case 'shopping_buy':
            if (player_money >= price) {
                GetItem(value);
                player_money -= price;
                message.push("＠キツネの行商人");
                message.push("　まいどあり！");
            } else {
                message.push("＠キツネの行商人");
                message.push("　お金が足りないよ。");
            }
            break;

        case 'shopping_equip':
            if (player_money >= price) {
                GetEquipment(lv, category);
                player_money -= price;
                message.push("＠キツネの行商人");
                message.push("　まいどあり！");
            } else {
                message.push("＠キツネの行商人");
                message.push("　お金が足りないよ。");
            }
            break;

        case 'shopping_end':
            message = [];
            GenerateCommand();
            SetAreaData();

            standImage = "";
            gamemode = "free";
            break;

        case 'inn_stay':
            if (player_money >= price) {
                player_nowhp = player_maxhp;
                player_money -= price;
                message.push("ぐっすり眠れて体力が戻った。");
            } else {
                message.push("＠宿屋のおばはん");
                message.push("　お金が足りないよ。");
            }
            break;

        case 'training_train':
            if (player_level < cpMapLv * 10) {
                if (player_money >= price) {
                    player_money -= price;
                    message.push("＠武道家");
                    message.push("　見事だ。よく頑張ったな。");
                    message.push("レベルが上がった！");

                    player_level++;
                    player_exp = 0;

                    player_maxhp += Math.floor(Math.random() * 4) + 10;
                    player_nowhp = player_maxhp;
                    player_str += Math.floor(Math.random() * 2) + 1;
                    player_vit += Math.floor(Math.random() * 2) + 1;
                    player_spd += Math.floor(Math.random() * 2) + 1;
                    player_luk += Math.floor(Math.random() * 2) + 1;
                } else {
                    message.push("＠武道家");
                    message.push("　すまん、金が足りんようだぞ。");
                }
            } else {
                message.push("＠武道家");
                message.push("　お前は十分強くなった。");
            }
            break;
    }
}

//sell
function PawnShop(){

    standImage = "stand_sitiya";
    message.push("＠質屋のフクロウ");
    message.push("　ようこそ。お客様。");

    command = [];
    cmdOver = -1;
    command = [
        { name: "", label: "－インベントリから選択", pos_x: 1184, pos_y: 674 }
    ];
    command.push({ name: "seeyou", label: "－店を出る", pos_x: 1184, pos_y: 674 + 32 * command.length });


}
 