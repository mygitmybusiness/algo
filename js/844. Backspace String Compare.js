/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return fix(s) == fix(t);
};

let fix = function (str) {
    str.split('');

    let ans = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '#') {
            ans.pop();
        } else {
            ans.push(str[i]);
        }
    }

    return ans.join('');
}
