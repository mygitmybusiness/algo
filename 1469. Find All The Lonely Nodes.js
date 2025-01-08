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
var getLonelyNodes = function(root) {
    let arr = new Array();

    var dfs = (root, noSiblings, arr) => {
        if (root) {
            if (noSiblings) arr.push(root.val);
            noSiblings = !root.left || !root.right;

            dfs(root.left, noSiblings, arr);
            dfs(root.right, noSiblings, arr);
        }
    }

    dfs(root, false, arr);

    return arr;
};
