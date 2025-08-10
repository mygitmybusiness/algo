/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function(root, k) {
    console.log(dfs(root, '', k));
    return dfs(root, '')[k - 1];
};

let dfs = (root, str, k) => {
    if (!root || str.length > k) return '';

    if (!root.left && !root.right) { // is leaf?
        return str += root.val;
    }

    return str + dfs(root.left, str, k) + dfs(root.right, str, k);
}
