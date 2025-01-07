/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let output = [];

    dfs(root, output);

    return output;
};

const dfs = (root, output) => {
    if (!root) return 0;

    output.push(root.val);

    if (root.children.length > 0) {
        for (let child of root.children) {
            dfs(child, output);
        }
    }
}
