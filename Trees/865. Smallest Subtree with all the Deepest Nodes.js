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
var subtreeWithAllDeepest = function(root) {
    let answer = null;
    let maxDepth = 0;

    let dfs = (node, depth) => {
        if (!node) {
            maxDepth = Math.max(maxDepth, depth);
            return depth;
        }

        const left = dfs(node.left, depth + 1);
        const right = dfs(node.right, depth + 1);

        if (left === right && right === maxDepth) {
            answer = node;
        }

        return Math.max(left, right);
    }

    dfs(root, 0);
    return answer;
};
