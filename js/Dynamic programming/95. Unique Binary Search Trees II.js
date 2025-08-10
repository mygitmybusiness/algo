/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (!n) return [];

    let build = (start, end) => {
        const tree = [];

        if (start > end) {
            tree.push(null);
            return tree;
        }

        for (let i = start; i <= end; i++) {
            let left = build(start, i - 1);
            let right = build(i + 1, end);

            for (let l of left) {
                for (let r of right) {
                    let node = new TreeNode(i);

                    node.left = l;
                    node.right = r;

                    tree.push(node);
                }
            }
        }

        return tree;
    }

    return build(1, n);
};
