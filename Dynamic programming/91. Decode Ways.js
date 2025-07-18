/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let dp = Array.from({ length: s.length + 1 }).map(() => 0);
    dp[0] = 1;
    dp[1] = s.charAt(0) == "0" ? 0 : 1;

    for (let i = 2; i < dp.length; i++) {
        if (s.charAt(i - 1) !== '0') dp[i] = dp[i - 1];

        let num = parseInt(s.substring(i - 2, i));
        if (num >= 10 && num <= 26) dp[i] += dp[i - 2];
    }

    return dp[s.length];
};
