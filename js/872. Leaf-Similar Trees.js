/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    console.log(helper(root1));
    console.log(helper(root2));
    return helper(root1) === helper(root2);
};

var helper = (root, res = '') => {
    if (!root) return '';

    if (!root.left && !root.right) {
        res += '-' + root.val;
    }

    return res += helper(root.left, res) + helper(root.right, res);
}
