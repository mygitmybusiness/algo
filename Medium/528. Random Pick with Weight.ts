class Solution {
    w: number[];
    sum: number;

    constructor(w: number[]) {
        this.sum = w.reduce((p, c) => p + c, 0);
        this.w = w;
    }

    pickIndex(): number {
        let prev = 0;
        const p = Math.random();

        for (let i = 0; i < this.w.length; i++) {
            prev = prev + (this.w[i] / this.sum)
            if (p < prev) {
                return i;
            } else {
                continue;
            }
        }

        return 0;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
