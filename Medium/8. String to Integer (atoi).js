/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let arr = s.trim().split('');
    let numStr = '';
    let minus = false;
    const numberRegex = /^-?\d+(\.\d+)?$/;
    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -Math.pow(2, 31);

    if (arr[0] == '-') {
        minus = true;
        arr.shift();
    } else if (arr[0] == '+') {
        arr.shift();
    }

    for (var i = 0; i < arr.length; i++) {
        if (numberRegex.test(arr[i])) {
            numStr += arr[i]
        } else {
            break;
        }
    }

    let num = Number(numStr);

    if (num > INT_MAX) {
        return minus ? INT_MIN : INT_MAX;
    }

    return minus ? -1 * num : num;
};
