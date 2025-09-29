/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currentEnd = 0,
        jump = 0,
        farthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        
        if (i === currentEnd) {
            jump++;
            currentEnd = farthest;
            
            if (currentEnd >= nums.length - 1) break;
        }
    }
    
    return jump;
};