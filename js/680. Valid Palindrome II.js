/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let arr = s.split('');

    let checkPalindrome = (arr, i, j) => {
        while (i <= j) {
            if (arr[i] != arr[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }

    let i = 0, j = arr.length - 1;

    while (i <= j) {
        if (arr[i] != arr[j]) {
            return (checkPalindrome(arr, i, j - 1) || checkPalindrome(arr, i + 1, j))
        }

        i++;
        j--;
    }

    return true;
};
