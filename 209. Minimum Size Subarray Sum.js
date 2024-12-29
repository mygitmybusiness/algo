var minSubArrayLen = function(s, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;
    
    while(right < nums.length) {
        sum += nums[right];
        
        while(sum >= s) {
            let len = right - left +1;
            if(result === 0 || len < result) result = len;
            sum -= nums[left];
            left++
        }
        right++;
    }
    return result;
};
