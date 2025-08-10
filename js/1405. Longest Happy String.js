/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let curra = 0, 
        currb = 0, 
        currc = 0;
        
        // Maximum total iterations possible is given by the sum of a, b and c.
        let totalIterations = a + b + c;
        let ans = [];

        for (let i = 0; i < totalIterations; i++) {
            if (
                (a >= b && a >= c && curra != 2) ||
                (a > 0 && (currb == 2 || currc == 2))
            ) {
                // If 'a' is maximum and it's streak is less than 2, or if streak of 'b' or 'c' is 2, then 'a' will be the next character.
                ans.push('a');
                a--;
                curra++;
                currb = 0;
                currc = 0;
            } else if (
                (b >= a && b >= c && currb != 2) ||
                (b > 0 && (currc == 2 || curra == 2))
            ) {
                // If 'b' is maximum and it's streak is less than 2, or if streak of 'a' or 'c' is 2, then 'b' will be the next character.
                ans.push('b');
                b--;
                currb++;
                curra = 0;
                currc = 0;
            } else if (
                (c >= a && c >= b && currc != 2) ||
                (c > 0 && (curra == 2 || currb == 2))
            ) {
                // If 'c' is maximum and it's streak is less than 2, or if streak of 'a' or 'b' is 2, then 'c' will be the next character.
                ans.push('c');
                c--;
                currc++;
                curra = 0;
                currb = 0;
            }
        }

        return ans.join('');
};
