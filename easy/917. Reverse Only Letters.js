/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('');
    let i = 0; 
    let k = s.length - 1; 
    const isNotLetter = (char) => {
        return !/^[a-zA-Z]$/.test(char);
    }

    while (i < k) {
        if (isNotLetter(s[i])) {
            i++;
            continue;
        }

        if (isNotLetter(s[k])) {
            k--;
            continue;
        }

        let save = s[k];
        s[k] = s[i];
        s[i] = save;

        i++;
        k--;
    }

    return s.join('');
};
