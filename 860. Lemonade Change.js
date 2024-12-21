/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var storedBills = {
        '5': 0,
        '10': 0,
        '20': 0,
    };

    for (i in bills) {
        switch (bills[i]) {
            case 5:
                storedBills['5'] += 1;
                break;
            case 10:
                storedBills['10'] += 1;
                storedBills['5'] -= 1;
                break;
            case 20:
                storedBills['20'] += 1;

                if (storedBills['10'] == 0 && storedBills['5'] >= 3) {
                    storedBills['5'] -= 3;
                } else {
                    storedBills['10'] -= 1;
                    storedBills['5'] -= 1;
                }

                break;
        }
        console.log(`20: ${storedBills['20']}, 10: ${storedBills['10']}, 5: ${storedBills['5']}`)

        if (storedBills['20'] < 0 || storedBills['10'] < 0 || storedBills['5'] < 0) return false;
    }

    return true;
};
