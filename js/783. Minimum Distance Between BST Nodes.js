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
var minDiffInBST = function(root) {
    let arr = new Array();

    const q = [root];

    while (q.length > 0) {
        let curr = q.shift();

        if (curr) {
            arr.push(curr.val);

            q.push(curr.left, curr.right);
        }
    }

    arr = arr.sort((a, b) => b - a);

    min = arr[0] - arr[1];

    for (var i = 0; i < arr.length - 1; i++) {
        min = Math.min(arr[i] - arr[i+1], min);
    }

    return min;
}
