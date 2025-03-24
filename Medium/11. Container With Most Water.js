function maxArea(height: number[]): number {
    let max = 0;

    let i = 0, j = height.length - 1;
    while (i < j) {
        let size = Math.min(height[j], height[i]) * (j - i);
        max = Math.max(size, max);

        if (height[i] >= height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return max;
};
