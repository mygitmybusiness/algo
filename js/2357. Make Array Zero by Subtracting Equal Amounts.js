var minimumOperations = function(nums) {
    let c = 0;
    
    while (Math.max(...nums) !== 0) {
        let min = Number.MAX_SAFE_INTEGER;

        for (var i = 0; i < nums.length; i++) {
            if (nums[i] !== 0 && nums[i] < min) min = nums[i];
        }

        for (var i = 0; i < nums.length; i++) {
            nums[i] -= min;

            if (nums[i] < 0) nums[i] = 0;
        }

        c++;
    }

    return c;
};
