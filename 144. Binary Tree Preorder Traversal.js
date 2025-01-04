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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var arr = [];

    return dfs(root, arr);
};

var dfs = (root, arr) => {
    if (null != root) {
        arr.push(root.val);

        dfs(root.left, arr);
        dfs(root.right, arr);
    }

    return arr;
}
