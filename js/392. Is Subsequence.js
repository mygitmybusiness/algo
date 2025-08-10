/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split('');
    for (var i = 0; i < t.length; i++) {
        if (t[i] == s[0]) s.shift();
    }

    return !s.length;
};
