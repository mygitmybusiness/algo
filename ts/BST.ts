console.clear();

type ThreeNode = {
    left: ThreeNode | null,
    right: ThreeNode | null,
    val: number,
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let visited = new Set();

// find pivot point first
const addNode = (
    arr: number[], 
    left: number, 
    right: number
): ThreeNode | null => {
    let pivot: number = Math.floor((left + right) / 2);

    if (
        left > right || 
        !arr[pivot] || 
        visited.has(arr[pivot]) || 
        pivot < 0 || 
        pivot >= arr.length
    ) return null;

    visited.add(arr[pivot]);

    return {
        left: addNode(arr, left, pivot - 1),
        right: addNode(arr, pivot + 1, right),
        val: arr[pivot]
    } as ThreeNode;
}

console.clear();

let three = addNode(arr, 0, arr.length - 1);

console.log(three);

let result: number[] = [];

const dfs = (root: ThreeNode | null):void => {
    if (!root) return;

    result.push(root.val);
    
    dfs(root.left);
    dfs(root.right);
}

dfs(three);

console.log(result);