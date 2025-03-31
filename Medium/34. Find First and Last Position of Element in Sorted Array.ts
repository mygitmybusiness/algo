function searchRange(nums: number[], target: number): number[] {
    function findBound(isFirst: boolean): number {
        let left = 0, right = nums.length - 1, index = -1; // Initialize binary search bounds and result variable

        while (left <= right) { // Continue searching while the left bound does not exceed the right
            const mid = left + Math.floor((right - left) / 2); // Compute the middle index to prevent overflow

            if (nums[mid] === target) { // If the middle element matches the target
                index = mid; // Store the found index
                if (isFirst) {
                    right = mid - 1; // Move left to find the first occurrence
                } else {
                    left = mid + 1;  // Move right to find the last occurrence
                }
            } else if (nums[mid] > target) { // If the middle element is greater than target
                right = mid - 1; // Shift right bound to the left (narrow search to smaller values)
            } else { // If the middle element is smaller than target
                left = mid + 1; // Shift left bound to the right (narrow search to larger values)
            }
        }

        return index; // Return the found index (or -1 if not found)
    }

    // Find the first and last occurrence of target using the helper function
    return [findBound(true), findBound(false)];
};
