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
var maxDepth = function(root) {
    var acc = 0;
    var resultsArr = [];

    recursiveDeep(root, acc, resultsArr);

    return Math.max(...resultsArr);
};

var recursiveDeep = function (node, acc, resultsArr) {
    if (node != null) {
        acc += 1;
    } else {
        return resultsArr.push(acc);
    }

    recursiveDeep(node.left, acc, resultsArr);
    recursiveDeep(node.right, acc, resultsArr);
}
