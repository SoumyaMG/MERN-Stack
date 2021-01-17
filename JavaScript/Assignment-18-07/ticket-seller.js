const money = {
    "25": 0,
    "50": 0,
    "100": 0
}

function canSellTickets(a) {
    if (a.length == 0) {
        return 'YES'
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 25) {
            money['25'] = money['25'] + 1
        }
        else if (a[i] == 50 && money['25'] < 1) {
            return 'NO'
        }
        else if (a[i] == 50 && money['25'] >= 1) {
            money['50'] = money['50'] + 1
            money['25'] = money['25'] - 1
        }
        else if (a[i] == 100 && money['25'] >= 3) {
            money['100'] = money['100'] + 1
            money['25'] = money['25'] - 3
        }
        else if (a[i] == 100 && (money['25'] >= 1) && (money['50'] >= 1)) {
            money['100'] = money['100'] + 1
            money['25'] = money['25'] - 1
            money['50'] = money['50'] - 1
        }
        else {
            return 'NO'
        }
    }
    // console.log(money['25'], money['50'], money['100'])
    return 'YES'
}


console.log(canSellTickets([25, 100]))
//[25, 50, 25, 100, 25, 25, 25, 50, 100, 100]