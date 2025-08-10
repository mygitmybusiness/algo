/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 && root2) return root2;

    const q1 = [root1];
    const q2 = [root2];

    while (q1.length || q2.length) {
        let currentQ1 = q1.shift();
        let currentQ2 = q2.shift();

        if (currentQ1 && currentQ2) {
            currentQ1.val += currentQ2.val;

            if (!currentQ1.left && currentQ2.left) currentQ1.left = new TreeNode(0, null, null);
            if (!currentQ1.right && currentQ2.right) currentQ1.right = new TreeNode(0, null, null);

            if (currentQ1) {
                q1.push(currentQ1.left, currentQ1.right);
            }

            if (currentQ2) {
                q2.push(currentQ2.left, currentQ2.right);
            }
        }
    }

    return root1;
};
