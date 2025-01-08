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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let stack = new Array();
    let path = '';
    dfs(root, stack, path);

    let res = 0;

    for (var num of stack) {
        res += parseInt(num, 2 );
    }

    return res;
};

dfs = (root, stack, path) => {
    if (root != null) {
        path += root.val;

        if (null == root.left && null == root.right) {
            stack.push(path);
        } else {
            dfs(root.left, stack, path);
            dfs(root.right, stack, path);
        }
    }    
}