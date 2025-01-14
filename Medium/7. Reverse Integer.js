/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = String(x).split('');
    let j = str.length - 1, i = 0;

    while (i < j) {
        let tmp = str[j];
        str[j] = str[i];
        str[i] = tmp;

        i++;
        j--;
    }

    let res = parseInt(str.join(''));

    if (res >= 2147483647) return 0;

    return x >= 0 ? res : res * -1;
};
