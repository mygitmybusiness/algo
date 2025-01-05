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
var invertTree = function(root) {
    let q = [root];

    while (q.length > 0) {
        const cur = q.shift();
        if (cur) {
            const save = cur.left;
            cur.left = cur.right;
            cur.right = save;

            q.push(cur.left);
            q.push(cur.right);
        }
    }

    return root;
};
