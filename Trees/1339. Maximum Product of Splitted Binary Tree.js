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
var maxProduct = function(root) {
    const MOD = 1000000007n;

    let dfsPost = (node) => {
        if (!node) return 0n;

        return BigInt(node.val) + dfsPost(node.left) + dfsPost(node.right);
    }

    let totalSum = dfsPost(root, 0);
    let max = 0n;

    let searchFor = (node) => {
        if (!node) return 0n;

        let localSum = BigInt(node.val) + searchFor(node.left) + searchFor(node.right);
        if (max < ((totalSum - localSum) * localSum)) max = (totalSum - localSum) * localSum;

        return localSum;
    }

    searchFor(root, 0);

    return Number(max % MOD);
};