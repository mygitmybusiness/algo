/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let resMap = new Map();
    let s = '';

    let i = 0;

    while (i < chars.length) {
        let n = 1;

        while (chars[i + 1] == chars[i]) {
            chars.splice(i + 1, 1);
            n++;
        }

        let amtArr = String(n).split('');

        if (n == 1) {
            i++;
        } else {
            chars.splice(i + 1, 0, ...amtArr);
            i += amtArr.length + 1;
        }
    }

    return chars.length;
};
