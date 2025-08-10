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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root || !subRoot) return false;

    const queueRoot = [root];

    while (queueRoot.length > 0) {
        var curr = queueRoot.shift();

        if (curr != null) {
            if (curr.val == subRoot.val) {
                if (JSON.stringify(curr) == JSON.stringify(subRoot)) return true;
            }

            queueRoot.push(curr.left, curr.right);
        }
    }

    return false;
};
