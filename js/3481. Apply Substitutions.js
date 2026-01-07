/**
 * @param {string[][]} replacements
 * @param {string} text
 * @return {string}
 */
var applySubstitutions = function(replacements, text) {
    let map = new Map();

    for (let [key, val] of replacements) {
        map.set(key, val);
    }

    while (text.includes('%')) {
        let split = text.split('%');
        let res = '';

        for (let char of split) {
            if (map.has(char)) res += map.get(char);
            else res += char
        }

        text = res;
    }

    return text;
};
