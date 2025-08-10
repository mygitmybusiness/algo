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
var inorderTraversal = function(root) {
    let res = [];
    
    recursiveTraverse(root, res);

    return res;
};

var recursiveTraverse = (root, res) => {
    if (null != root) {
        recursiveTraverse(root.left, res);
        res.push(root.val);
        recursiveTraverse(root.right, res);
    }
}
