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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var traversed = new Array();

    const q = [root];

    while (q.length > 0) {
        let current = q.shift();

        if (current) {
            if (traversed.indexOf(k - current.val) != -1) {
                return true
            };

            traversed.push(current.val);
            q.push(current.left, current.right);
        }
    }

    return false;
};
