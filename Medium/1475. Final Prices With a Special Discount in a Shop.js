/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let n = prices.length;
    let nge = new Array(n).fill(-1);
    let st = [];

    st.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (st.length && prices[st[st.length - 1]] > prices[i]) {
            st.pop();
        }
        if (st.length) {
            nge[i] = st[st.length - 1];
        }
        st.push(i);
    }

    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nge[i] === -1) {
            ans[i] = prices[i];
        } else {
            ans[i] = prices[i] - prices[nge[i]];
        }
    }
    
    return ans;
};
