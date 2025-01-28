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
var longestZigZag = function(root) {
    let globalCount = [0];

    var dfs = (root, left, count) => {
        if (!root) {
            return;
        };

        globalCount[0] = Math.max(globalCount[0], count);

        if (left) {
            dfs(root.left, false, count += 1);
            dfs(root.right, true, 1);
        } else {
            dfs(root.left, false, 1);
            dfs(root.right, true, count += 1);
        }
    }

    dfs(root, null, 0);

    return globalCount[0];
};
