/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    
    var tsplit = t.split('');

    for (var i = 0; i < s.length; i++) {
        if (tsplit.includes(s[i])) {
            tsplit.splice(tsplit.indexOf(s[i]), 1);
        } else {
            return false;
        }
    }

    return true;
};
