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
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function(root, key) {
    // Predecessor is rightest node in the left subtree
    var findPre = function(node) {
        let root = node.left;
        while (root.right) root = root.right;
        return root.val;
    }
    // Successor is the leftest node in the right subtree
    var findSuc = function(node) {
        let root = node.right;
        while (root.left) root = root.left
        return root.val;
    }

    var remove = function(val, node=root) {    
        if (!node) return node;
        if (val > node.val) {
            // search in right subtree and update the linkage
            node.right = remove(val, node.right);
        } else if (val < node.val){
            // search in left subtree and update the linkage
            node.left = remove(val, node.left);
        } else {
            if (!node.left && !node.right) {
                // remove leaf node
                node = null;
            } else if (!node.left) { 
                // find successor in the right subtree
                node.val = findSuc(node);
                // search the successor in the right subtree and update the linkage
                node.right = remove(node.val, node.right);
            } else { 
                // find predecessor in the left subtree
                node.val = findPre(node);
                // search the predecessor in the left subtree and update the linkage
                node.left = remove(node.val, node.left);
            }
        }
        return node;
    }
    return remove(key);
};
