/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    var counter = 0;

    for(var i = 0; i < words.length; i++) {
        let str = words[i];

        for (var j = i + 1; j < words.length; j++) {
            let pref = words[j].split('').splice(0, str.length).join('');
            let suff = words[j].split('').splice(words[j].length - str.length, words[j].length).join('');

            console.log(str + ' vs ' + pref + ' vs ' + suff);

            if (pref == str && suff == str) {
                counter++;
            }
        }
    }

    return counter;
};