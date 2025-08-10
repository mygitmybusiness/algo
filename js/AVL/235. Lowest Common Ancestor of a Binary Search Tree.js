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
    let map = {}
    let a = dfs(root, [], p.val);
    let b = dfs(root, [], q.val);

    while (a.at(-1) != b.at(-1)) {
        if (a.length > b.length) {
            a.pop();
        } else {
            b.pop();
        }
    }

    let last = a.at(-1);
    let queue = [root];

    while (queue.length) {
        let curr = queue.shift();

        if (curr) {
            if (curr.val == last) return curr;

            queue.push(curr.left, curr.right);
        }
    }
};

let dfs = (node, path, target) => {
    if (!node) return path;

    path.push(node.val);
    if (node.val == target) return path; 
    
    if (node.val > target) {
        return dfs(node.left, path, target);
    } else {
        return dfs(node.right, path, target);
    }

    path.pop();
}
