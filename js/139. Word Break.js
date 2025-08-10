/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function Trie () {
    this.isWord = false;
    this.children = {};
}

var wordBreak = function(s, wordDict) {
    let root = new Trie();

    for (let word of wordDict) {
        let curr = root;

        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new Trie();
            }

            curr = curr.children[char];
        }

        curr.isWord = true;
    }

    let dp = new Array(s.length).fill(false);

    for (let i in s) {
        if (i == 0 || dp[i - 1]) {
            let curr = root;

            for (let j = i; j < s.length; j++) {
                let c = s[j];

                if (!curr.children[c]) break;

                curr = curr.children[c];

                if (curr.isWord) {
                    dp[j] = true;
                }
            }
        }
    }

    return dp[s.length - 1];
};
