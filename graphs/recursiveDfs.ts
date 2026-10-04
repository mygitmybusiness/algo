const recursiveDfs = (x: number, y: number, visited: Set<string>): Boolean => {
    if (x < 0 || y < 0 || x > array.length || y > array[0].length || 
        array[x][y] || 
        visited.has(`${x} -> ${y}`)
    ) return false;

    visited.add(`${x} -> ${y}`);

    console.log(`${x} -> ${y}`);
    console.log(`Path: ${[...visited.values()]}`);

    if (x == find[0] && y == find[1]) return true;

    const res = (
        recursiveDfs(x - 1, y, visited) ||
        recursiveDfs(x, y + 1, visited) ||
        recursiveDfs(x + 1, y, visited) ||
        recursiveDfs(x, y - 1, visited)
    );

    visited.delete(`${x} -> ${y}`);

    return res;
}

const array = [
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1],
];

const start = [0, 1];
const find = [4, 3];

const check = (res: Boolean) => {
    return res === true ? console.info("Done") : console.error("Broken")
}

check(recursiveDfs(start[0], start[1], new Set()));
