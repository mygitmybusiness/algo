/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
    let n = startTime.length;
    let ans = 0;
    let time = 0;

    for (let i = 0; i < n; i++) {
        time += endTime[i] - startTime[i];
        let left = i <= k - 1 ? 0 : endTime[i - k];
        let right = i === n - 1 ? eventTime : startTime[i + 1];

        ans = Math.max(ans, right - left - time);

        if (i >= k - 1) time -= endTime[i - k + 1] - startTime[i - k + 1];
    }

    return ans;
};
