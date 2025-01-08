/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let q = [cloned];

    while (q.length > 0) {
        let currentNode = q.shift();

        if (currentNode) {
            if (currentNode.val == target.val) return currentNode;
            if (currentNode.left && currentNode.left.val == target.val) return currentNode.left;
            if (currentNode.right && currentNode.right.val == target.val) return currentNode.right;

            q.push(currentNode.left, currentNode.right);
        }
    }
};
