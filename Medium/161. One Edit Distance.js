/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    let bigger = Math.max(s.length, t.length);

    let i = 0;

    while (i < bigger) {
        if (s[i] !== t[i]) {
            return s.slice(i) === t.slice(i + 1) ||
                   s.slice(i + 1) === t.slice(i) ||
                   s.slice(i + 1) === t.slice(i + 1)
        }

        i++;
    }

    return false;
};
