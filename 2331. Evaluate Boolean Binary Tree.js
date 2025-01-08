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
var evaluateTree = function(root) {
    return dfs(root);
};

var dfs = (root) => {
    if (!root) return;

    if (root.val == 2) {
        return dfs(root.left) || dfs(root.right);
    } else if (root.val == 3) {
        return dfs(root.left) && dfs(root.right);
    } else {
        return root.val == 1 ? true : false;
    }
}
