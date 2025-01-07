/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    var output = [];

    dfs(root, output);

    return output;
};

var dfs = (root, arr) => {
    if (!root) return 0;

    if (root.children.length > 0) {
        for (var child of root.children) {
            dfs(child, arr);
        }
    }

    arr.push(root.val);
}
