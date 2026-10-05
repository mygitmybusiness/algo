const islands: number[][] = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 5, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
];

// find all islands (connected numbers)
// find all distinct numbers

const countAllIslands = (inputArray):number => {
    if (inputArray.length == 0) return 0;

    let numberOfIslands = 0;
    let visitedNodes = new Set<string>();
    let distinctNumbers = new Set<number>();

    const dfs = (row, col, expectedNumber):boolean => {
        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        if (row < 0 || row >= inputArray.length || col < 0 || col >= inputArray.length || inputArray[row][col] == -1 || inputArray[row][col] !== expectedNumber) return false;

        let tmp = inputArray[row][col];
        inputArray[row][col] = -1;
        visitedNodes.add(`${row}->${col}`);
        let res: boolean = false;

        for (let [x, y] of directions) {
            res = res || dfs(row + x, col + y, expectedNumber);
        }

        if (!res) numberOfIslands += 1;

        inputArray[row][col] = tmp;

        return true;
    }

    for (let row = 0; row < inputArray.length; row++) {
        for (let col = 0; col < inputArray[row].length; col++) {
            if (visitedNodes.has(`${row}->${col}`)) continue;
            if (!distinctNumbers.has(inputArray[row][col])) distinctNumbers.add(inputArray[row][col]);

            dfs(row, col, inputArray[row][col]);
        }
    }

    console.log(`Number of distinct numbers: ${[...distinctNumbers.values()].length}`);

    return numberOfIslands;
}

const main = ():void => {
    console.log(countAllIslands(islands));
}

main();
