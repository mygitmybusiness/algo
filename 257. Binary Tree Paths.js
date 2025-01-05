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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var stack = new Array();
    var path = '';

    dfs(root, stack, path);

    return stack;
};

dfs = (root, stack, path) => {
    if (root != null) {
        path += root.val;

        if (null == root.left && null == root.right) {
            stack.push(path);
        } else {
            path += '->';

            dfs(root.left, stack, path);
            dfs(root.right, stack, path);
        }
    }    
}