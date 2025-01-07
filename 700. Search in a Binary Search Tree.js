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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return dfs(root, val);
};

var dfs = (root, val) => {
    if (!root) return root;

    if (root.val == val) {
        return root;
    } else if (root.val > val) {
        return dfs(root.left, val);
    } else if (root.val < val) {
        return dfs(root.right, val)
    }
}
