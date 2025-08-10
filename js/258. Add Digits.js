/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = String(num).split('');

    while (num.length > 1) {
        num = num.reduce((acc, val) => Number(val) + Number(acc), 0);
        num = String(num).split('');
    }

    return Number(num);
};
