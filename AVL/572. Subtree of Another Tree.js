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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let target = subRoot.val;
    let start = [];

    let bfs = (node) => {
        let q = [node];

        while (q.length) {
            let curr = q.shift();
            if (!curr) continue;

            if (curr.val == target) {
                start.push(curr);
            }
            q.push(curr.left, curr.right);
        }
    }

    bfs(root);

    let dfs = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        let left = dfs(node1.left, node2.left);
        let right = dfs(node1.right, node2.right);

        return left && right;
    }

    while (start.length) {
        let curr = start.pop();

        if (dfs(curr, subRoot)) return true;
    }

    return false;
};
