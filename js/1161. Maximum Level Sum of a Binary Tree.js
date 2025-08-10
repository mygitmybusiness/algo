/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let levels = [];

    let dfs = (root, level) => {
        if (!root) return;

        levels[level] ? levels[level] += root.val : levels[level] = root.val;

        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }

    dfs(root, 0);

    return levels.indexOf(Math.max(...levels)) + 1;
};