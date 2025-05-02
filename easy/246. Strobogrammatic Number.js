/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let upsideDowns = {
        '1': '1',
        '6': '9',
        '9': '6',
        '8': '8',
        '0': '0',
    }

    let arr = String(num).split('');

    for (let i in arr) {
        if (!upsideDowns[arr[i]]) return false;

        arr[i] = upsideDowns[arr[i]];
    }

    return Number(arr.reverse().join('')) == num;
};
