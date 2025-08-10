/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let str = word.split('');
    let start = 0;
    let end = 0;

    while (end < word.length) {
        if (str[end] == ch) {
            while (start < end) {
                var store = str[end];

                str[end] = str[start];
                str[start] = store;

                start++;
                end--;
            }

            return str.join('');
        }

        end++;
    }

    return str.join('');
};
