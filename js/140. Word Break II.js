/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const memo = new Map();

function run(str) {
    if(memo.has(str)) return memo.get(str);
    if(!str.length) return [];
    
    const result = [];
    
    for(let word of wordDict) {
        
        // find words in the dict that match the start of str
        if(str.startsWith(word)) {
            // remove the current word from the start of the str
            const next = str.slice(word.length);
            const paths = run(next); 
            
            // if 'paths' is empty arr, and 'next' is empty str
            // current word will be the last one in the sequence
            if(!paths.length && !next.length) result.push(word);
            
            // else map the current word to the start of every path
            // and push each path to result
            result.push(...paths.map(rest => word + ' ' + rest));
        }
    }
    // cache result
    memo.set(str, result);
    return result;
}
return run(s);
};
