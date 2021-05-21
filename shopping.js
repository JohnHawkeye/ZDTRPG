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
    command.push({ name: "shopping_end", label: "－買い物をやめる", pos_x: 1184, pos_y: 674 + 32 * command.length });
}

function ShoppingCommand(name, value, price) {

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

        case 'shopping_end':
            message = [];
            GenerateCommand();
            SetAreaData();

            standImage = "";
            gamemode = "free";
            break;
    }
}