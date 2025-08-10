/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let paths = [];

    let dfs = (node, sum, path) => {
        if (!node) return;

        sum += node.val;
        path.push(node.val);

        if (!node.left && !node.right && sum === targetSum) {
            paths.push([...path]); // Make a copy of the current path
        }

        dfs(node.left, sum, path);
        dfs(node.right, sum, path);

        path.pop();
    }

    dfs(root, 0, []);

    return paths;
};
