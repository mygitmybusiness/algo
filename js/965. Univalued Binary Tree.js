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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let q = [root];
    let target = root.val;

    while (q.length > 0) {
        let curr = q.shift();

        if (curr) {
            if (curr.val != target) return false;
            q.push(curr.left, curr.right);
        }
    }

    return true;
};
