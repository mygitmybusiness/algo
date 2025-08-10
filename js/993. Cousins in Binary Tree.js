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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const res = [];

    var  dfs = (root, level, prev, x, y) =>{
        if(!root) return false;

        if (root.val === x) res.push([level, level === 0 ? null : prev.val]);
        if (root.val === y) res.push([level, level === 0 ? null : prev.val]);

        if (res.length === 2){
            if (res[0][0] === res[1][0] && 
                res[0][1] !== res[1][1]
            ) {
                return true;
            }

            return false;
        }
            
        return dfs(root.left, level + 1, root, x, y) || dfs(root.right, level + 1, root, x, y);
    }

    return dfs(root, 0, null, x, y);
};
