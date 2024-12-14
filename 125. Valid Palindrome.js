/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    var l = 0, r = cleanedStr.length -1;

    while (l < r) {
        console.log(cleanedStr[l] + ' - ' + cleanedStr[r]);

        if (cleanedStr[l] != cleanedStr[r]) return false;
        l++;
        r--;
    }

    return true;
};
