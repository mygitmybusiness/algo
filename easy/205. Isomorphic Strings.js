/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;

    let check = (keyStr, valStr) => {
        let map = new Map();

        for (var i = 0; i < keyStr.length; i++) {
            let key = keyStr[i];
            let val = valStr[i];

            if (map.has(key) && map.get(key) !== val) {
                return false;
            } else {
                map.set(key, val);
            }
        }

        return true;
    }

    return check(s, t) && check(t, s);
};
