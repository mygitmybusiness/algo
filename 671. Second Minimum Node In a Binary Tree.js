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
var findSecondMinimumValue = function(root) {
    let set = new Set();

    const q = [root];

    while (q.length > 0) {
        let current = q.shift();

        if (current) {
            set.add(current.val);
            q.push(current.left, current.right);
        }
    }

    let arr = [...set].sort((a,b) => a - b);

    return arr.length >= 2 ? arr[1] : -1;
};
