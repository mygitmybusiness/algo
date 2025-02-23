/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    var preIndex = 0,
        postIndex = 0;

    var reconstructor = (preorder, postorder) => {
        var root = new TreeNode(preorder[preIndex++]);

        if (root.val != postorder[postIndex]) root.left = reconstructor(preorder, postorder);

        if (root.val != postorder[postIndex]) root.right = reconstructor(preorder, postorder);

        postIndex += 1;

        return root;
    }   

    return reconstructor(preorder, postorder);
};
