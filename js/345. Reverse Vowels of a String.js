/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let word = s.split('');

    let i = 0;
    let j = word.length - 1;

    while (i < j) {
        if (vowels.includes(word[i]) && !vowels.includes(word[j])) {
            j--;
        } else if(vowels.includes(word[j]) && !vowels.includes(word[i])) {
            i++;
        } else if (vowels.includes(word[i]) && vowels.includes(word[j])) {
            let tmp = word[j];
            word[j] = word[i];
            word[i] = tmp;
            i++;
            j--;
        } else {
            i++;
            j--;
        }
    }

    return word.join('');
};
