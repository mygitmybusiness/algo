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
var countNodes = function(root) {
    return BFStraverseCompleteBinaryTree(root);
};

var BFStraverseCompleteBinaryTree = (root) => {
    if (!root) return 0;

    const queue = [root];
    let counter = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (current) {
            queue.push(current.left);
            queue.push(current.right);

            counter++;
        }
    }

    return counter;
}
