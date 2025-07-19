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
 */
var FindElements = function(root) {
    this.set = new Set();

    let dfs = (node, prevVal) => {
        if (!node) return;

        if (prevVal >= 0) node.val = prevVal;

        this.set.add(node.val);

        let leftVal = 2 * node.val + 1;
        let rightVal = 2 * node.val + 2;

        dfs(node.left, leftVal);
        dfs(node.right, rightVal);
    }

    dfs(root, 0);

    return this;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.set.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
