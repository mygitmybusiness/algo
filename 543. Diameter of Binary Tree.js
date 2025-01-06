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
var diameterOfBinaryTree = function(root) {
    let arr = [0];

    dfs(root, arr);

    return arr[0];
};

var dfs = (root, diameter) => {
    if (root == null) return 0;

    let left = dfs(root.left, diameter);
    let right = dfs(root.right, diameter);

    diameter[0] = Math.max(diameter[0], left + right);

    return Math.max(left, right) + 1;
}
