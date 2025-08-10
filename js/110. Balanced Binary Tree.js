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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null) return true;

    return (Math.abs(helper(root.left) - helper(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right));
};

var helper = (node) => {
    if (node == null) return -1;

    return 1 + Math.max(helper(node.left), helper(node.right));
}
