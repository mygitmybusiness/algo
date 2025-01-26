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
var goodNodes = function(root) {
    let counter = [0];

    let dfs = (root, biggest) => {
        if (!root) return;

        if (root.val >= biggest) {
            counter[0] = counter[0] + 1;
            biggest = root.val;
        }

        dfs(root.left, biggest);
        dfs(root.right, biggest);
    }

    dfs(root, root.val);

    return counter[0];
};
