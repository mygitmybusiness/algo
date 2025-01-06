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
var getMinimumDifference = function(root) {
    var arr = [];
    var minGap = Number.MAX_SAFE_INTEGER;

    dfs(root, arr);

    arr.sort((a, b) => a - b);

    for (var i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i+1]);

        if (diff < minGap) {
            minGap = diff;
        }
    }

    return minGap;
};

var dfs = (root, arr) => {
    if (null == root) return;

    arr.push(root.val);

    dfs(root.left, arr);
    dfs(root.right, arr);
}
