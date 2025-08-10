/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var flatten = function (root) {
    if (!root) return;

    let node = root;

    while (node != null) {
        if (node.left) {
            let last = node.left;

            while (last.right) last = last.right;
            var tmp = node.right;
            node.right = node.left;
            last.right = tmp;
            node.left = null;
        }
        node = node.right;
    }

    return root;
};
