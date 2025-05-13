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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let map = {};

    let dfs = (node, level) => {
        if (!node) return;

        if (map[level]) {
            map[level].push(node.val);
        } else {
            map[level] = [node.val];
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);

        level--;
    }

    dfs(root, 0)

    return [...Object.values(map)];
};
