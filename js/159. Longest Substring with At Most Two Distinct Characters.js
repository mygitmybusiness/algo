/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let book = new Set();
        let current = 0
        
        for (let j = i; j < s.length; j++) {
            if (book.size < 2 && !book.has(s[j])) {
                book.add(s[j]);
            }

            if (book.has(s[j])) {
                current++;
            } else {
                break;
            }
        }

        longest = Math.max(current, longest);
    }

    return longest;
};
