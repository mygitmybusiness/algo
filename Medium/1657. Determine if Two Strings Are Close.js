/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const im1 = mapEntries(word1);
    const im2 = mapEntries(word2);

    let im1keyset = Array.from(im1.keys()).sort().join('');
    let im2keyset = Array.from(im2.keys()).sort().join('');

    if (im1keyset !== im2keyset) return false;

    let im1fr = Array.from(im1.values()).sort((a, b) => b - a);
    let im2fr = Array.from(im2.values()).sort((a, b) => b - a);

    return im1fr.join('') == im2fr.join('');
};

const mapEntries = (arr) => {
    const map = new Map();
    
    for (let el of arr) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1)
        } else {
            map.set(el, 1);
        }
    }

    return map;
}
