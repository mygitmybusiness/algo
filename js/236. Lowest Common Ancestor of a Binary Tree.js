/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var dfs = (root, p, q) => {
        if (!root || root == p || root == q) return root;

        let l = dfs(root.left, p, q);
        let r = dfs(root.right, p, q);

        if (l && r) return root;

        return l || r;
    }

    return dfs(root, p, q);
};
