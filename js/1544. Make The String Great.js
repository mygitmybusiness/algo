/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let i = 0;

    while (s.length && i < s.length - 1) {
        if (
                s[i] !== s[i + 1] && 
                s[i].toLowerCase() === s[i + 1].toLowerCase()
            ) {
                let output = s.slice(0, i) + s.slice(i + 2, s.length);
                console.log(output);
                s = output;
                i--;
                if (i < 0) i = 0;
            } else {
                i++;
            }
    }

    return s;
};
