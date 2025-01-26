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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let sums = new Map();
    let c = 0;

    let dfs = (root, val) => {
        if (!root) return;

        val = val + root.val;

        if (val == targetSum) c++;

        if (sums[val - targetSum]) c += sums[val - targetSum];

        if (sums[val]) sums[val]++;
        else sums[val] = 1;

        dfs(root.left, val);
        dfs(root.right, val);

        sums[val]--;
    }
    
    dfs(root, 0);

    return c;
};
