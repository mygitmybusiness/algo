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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let layers = [];

    let dfs = (root, level = 0) => {
        if (!root) return;

        layers[level] ? layers[level].push(root.val) : layers.push([root.val]);

        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    };

    dfs(root);

    let res = layers.map((val) => val.at(-1));
    
    return res;
};