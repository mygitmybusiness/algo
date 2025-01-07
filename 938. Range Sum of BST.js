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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let q = [root];
    let sum = 0;

    while (q.length > 0) {
        let curr = q.shift();

        if (curr) {
            if (curr.val >= low && curr.val <= high) {
                sum += curr.val;
                q.push(curr.left, curr.right);
            }

            if (curr.val < low) {
                q.push(curr.right);
            }

            if (curr.val > high) {
                q.push(curr.left);
            }
        }
    }

    return sum;
};
