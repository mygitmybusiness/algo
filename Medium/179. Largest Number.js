/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let numStrings = nums.map((el) => String(el));

    // Sort strings based on concatenated values
    numStrings.sort((a, b) => (b + a) - (a + b));

    // Handle the case where the largest number is zero
    if (numStrings[0] === "0") return "0";

    // Concatenate sorted strings to form the largest number
    let largestNum = numStrings.reduce((acc, val) => acc + val, '');

    return largestNum;
};
