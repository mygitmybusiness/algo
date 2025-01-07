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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let q = [root];
    let arr = [];

    while (q.length > 0) {
        let curr = q.shift();

        if (curr) {
            arr.push(curr.val);

            q.push(curr.left, curr.right);
        }
    }

    arr = arr.sort((a, b) => b - a);

    var last = null;

    for (var val of arr) {
        var curr = new TreeNode(val, null, last);
        last = curr;
    }

    return last;
};