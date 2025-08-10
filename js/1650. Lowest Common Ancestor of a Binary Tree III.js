/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let set = new Set();
    let node = p;

    while (node != null) {
        set.add(node.val);
        node = node.parent;
    }

    let search = q;

    while (search != null) {
        if (set.has(search.val)) {
            return search;
        }

        search = search.parent;
    }  

    return false;
};
