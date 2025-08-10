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
var postorderTraversal = function(root) {
    var res = new Array();

    dfs(root, res);

    return res;
};

var dfs = function (root, res) {
    if (root == null) return res;
        
    dfs(root.left, res);
    dfs(root.right, res);
    res.push(root.val);
}
