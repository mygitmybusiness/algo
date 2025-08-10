/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var counter = 0;
    var biggest = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            counter++;
        } else {
            counter = 0;
        };

        if (counter > biggest) biggest = counter;
    }
    
    return biggest;
};


console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
