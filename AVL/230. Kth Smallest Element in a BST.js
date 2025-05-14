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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = [];

    function dfs(node) {
        if (!node) return;

        dfs(node.left);

        if (result.length < k) result.push(node.val);
        else return;

        dfs(node.right);
    }

    dfs(root);

    return result[result.length - 1];
};
