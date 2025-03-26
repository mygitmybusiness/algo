function sortedSquares(nums: number[]): number[] {
    let squares = [];

    for (let i = 0; i < nums.length; i++) {
        squares.push(nums[i] * nums[i]);
    }

    squares.sort((a, b) => a - b);

    return squares;
};
