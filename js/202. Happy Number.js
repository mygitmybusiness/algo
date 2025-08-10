/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n < 0) return false;

    let num = String(n);
    let count = 0;

    while (count < 100) {
        if (Number(num) == 1) return true;
        
        let sum = 0;

        for (var i = 0; i < num.length; i++) {
            sum += num[i] ** 2;
        }

        num = String(sum);
        count++;
    }

    return false;
};
