function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let l = i + 1;
        let r = numbers.length - 1;
        let localTarget = target - numbers[i];

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (numbers[mid] > localTarget) {
                r = mid - 1;
            } else if ((numbers[mid] < localTarget)) {
                l = mid + 1;
            } else {
                return [i + 1, mid + 1]
            }
        }
    }
};
