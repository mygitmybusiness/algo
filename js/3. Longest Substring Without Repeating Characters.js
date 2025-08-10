/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var memo = {},
        longest = 0;

    for (var i = 0; i < s.length; i++) {
        memo[i] = s[i];

        for (var j = i + 1; j < s.length; j++) {
            if (!memo[i].includes(s[j])) {
                memo[i] += s[j];
            } else {
                break;
            }
        }

        longest = longest > memo[i].length ? longest : memo[i].length;
    }

    console.log(memo);
    console.log(longest);

    return longest;
};

lengthOfLongestSubstring('pwwkewwwwww');
