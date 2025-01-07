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
var averageOfLevels = function(root) {
    var q = [root];
    var levels = [[]];
    var res = [];

    dfs(root, levels, 0);

    for (var level of levels) {
        res.push(level.reduce((accum, val) => accum + val, 0) / level.length);
    }

    return res;
};

var dfs = (node, levels, counter) => {
    if (!node) return 0;

    if (levels[counter]) {
        levels[counter].push(node.val);
    } else {
        levels.push([node.val]);
    }

    counter++;

    dfs(node.left, levels, counter);
    dfs(node.right, levels, counter);
}
