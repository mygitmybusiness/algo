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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var closest = conditionalDFS(root, target, closest);

    return closest;
};

var conditionalDFS = (root, target, closest = root.val) => {
    if (null == root) return closest;

    if (Math.abs(closest - target) > Math.abs(root.val - target)) {
        closest = root.val;
    } else if (Math.abs(closest - target) == Math.abs(root.val - target)) {
        closest = Math.min(closest, root.val);
    }

    if (root.val < target) {
        return conditionalDFS(root.right, target, closest);
    } else {
        return conditionalDFS(root.left, target, closest);
    }

    return closest;
}
