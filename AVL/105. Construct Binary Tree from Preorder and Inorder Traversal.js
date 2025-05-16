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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;
    let inorderIndexMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    let arrayToTree = (left, right) => {
        if (left > right) return null;
        
        let rootValue = preorder[preorderIndex++];
        let root = new TreeNode(rootValue);
        
        root.left = arrayToTree(left, inorderIndexMap.get(rootValue) - 1);
        root.right = arrayToTree(inorderIndexMap.get(rootValue) + 1, right);

        return root;
    }

    return arrayToTree(0, preorder.length - 1);
};
