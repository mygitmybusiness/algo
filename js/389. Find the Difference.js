/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var alphabet = s.split('');

    for (var i = 0; i < t.length; i++) {
        if (alphabet.includes(t[i])) {
            alphabet.splice(alphabet.indexOf(t[i]), 1)
        } else {
            return t[i];
        };
    }
};
