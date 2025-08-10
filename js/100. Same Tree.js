/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var resP = [];
    var resQ = [];

    recursive(p, resP);
    recursive(q, resQ);

    return JSON.stringify(resP) == JSON.stringify(resQ);
};

var recursive = (node, arr) => {
    if (null == node) return arr.push(null);

    arr.push(node.val);

    recursive(node.left, arr);
    recursive(node.right, arr);
}
