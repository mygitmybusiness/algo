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
var findMode = function(root) {
    var map = new Map();
    var maxValue = Number.MIN_SAFE_INTEGER;
    var maxKey = [];

    dfs(root, map);

    for (const [key, value] of map.entries()) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = [];
            maxKey.push(key);
        } else if (value == maxValue) {
            maxKey.push(key);
        }
    }

    return maxKey;
};

var dfs = (root, map) => {
    if (root == null) return map;

    if (map.has(root.val)) {
        map.set(root.val, map.get(root.val) + 1);
    } else {
        map.set(root.val, 1);
    }

    dfs(root.left, map);
    dfs(root.right, map);
}
