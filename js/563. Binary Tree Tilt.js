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
var findTilt = function(root) {
    let arr = [0];

    sumOfAllNodes(root, arr);

    return arr[0];
};

var sumOfAllNodes = (root, total) => {
    if (!root) return 0;

    let left = sumOfAllNodes(root.left, total);
    let right = sumOfAllNodes(root.right, total);

    total[0] += Math.abs(left - right);

    return root.val + left + right;
}
