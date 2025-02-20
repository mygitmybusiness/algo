/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let hashSet = new Set(nums);

    const N = nums[0].length;

    let permutations = getBinaryArrays(N);

    for (let i = 0; i < permutations.length; i++) {
        if (!hashSet.has(permutations[i])) return permutations[i];
    }
};

let getBinaryArrays = (n) => {
  const result = [];
  const total = 1 << n; // same as Math.pow(2, n)

  for (let i = 0; i < total; i++) {
    const binArray = [];
    for (let bit = 0; bit < n; bit++) {
      // Extract the bit at position `bit` from `i`
      // (i >> bit) & 1 gives us either 0 or 1
      binArray.unshift((i >> bit) & 1);
    }

    result.push(binArray.join(''));
  }

  return result;
}
