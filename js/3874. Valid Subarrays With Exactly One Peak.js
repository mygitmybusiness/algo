/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var validSubarrays = function(nums, k) {
    let n = nums.length;
    let peaks = [];
    
    // Step 1: Identify and store the indices of all peaks
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            peaks.push(i);
        }
    }
    
    let valid = 0;
    
    // Step 2: Calculate valid combinations for each peak independently
    for (let p = 0; p < peaks.length; p++) {
        let i = peaks[p];
        
        // Find neighboring peaks to ensure we don't include them
        let prevPeak = p > 0 ? peaks[p - 1] : -1;
        let nextPeak = p < peaks.length - 1 ? peaks[p + 1] : n;
        
        // Calculate the furthest left boundary (min_l)
        // Must satisfy bounds (0), distance (i-k), and exclude prev peak
        let min_l = Math.max(0, i - k, prevPeak + 1);
        let leftChoices = i - min_l + 1; // Number of valid 'l' positions
        
        // Calculate the furthest right boundary (max_r)
        // Must satisfy bounds (n-1), distance (i+k), and exclude next peak
        let max_r = Math.min(n - 1, i + k, nextPeak - 1);
        let rightChoices = max_r - i + 1; // Number of valid 'r' positions
        
        // Multiply independent choices to get total valid subarrays for this peak
        valid += leftChoices * rightChoices;
    }
    
    return valid;
};