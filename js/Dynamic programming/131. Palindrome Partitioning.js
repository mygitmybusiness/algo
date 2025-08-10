/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // is a palindrome?
    // 2d dp?
    let dp = Array.from({length: s.length}, () => Array.from({length: s.length}, () => false));

    let partitions = [];

    const dfs = (result, s, start, currentList, dp) => {
        if (start >= s.length) result.push([...currentList]);

        for (let end = start; end < s.length; end++) {
            if (s[start] === s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
                dp[start][end] = true;
                currentList.push(s.slice(start, end + 1));
                dfs(result, s, end + 1, currentList, dp);
                currentList.pop();
            }
        }
    }

    dfs(partitions, s, 0, [], dp);

    return partitions;
};
