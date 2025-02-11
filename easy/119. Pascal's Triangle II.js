function getRow(rowIndex: number): number[] {
    let arr:number[][] = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        arr.push([]);

        for (let j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
                arr[i].push(1);
            } else {
                arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j])
            }
        }
    }

    return arr[rowIndex];
};
