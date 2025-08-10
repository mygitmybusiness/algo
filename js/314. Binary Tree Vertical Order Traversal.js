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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    const map = {}
      function dfs(node, col, lvl) {
        if (!node) return
    
        // ensure column list exists:
        map[col] = map[col] ?? []
    
        // track value for column, including the
        // depth at which we found the value:
        map[col].push({
          val: node.val,
          lvl
        })
    
        // continue to traverse, keeping 
        // track of column and depth:
        dfs(node.left, col - 1, lvl + 1)
        dfs(node.right, col + 1, lvl + 1)
      }
    
      dfs(root, 0, 0)
    
      return Object.keys(map)
        // extract columns in order:
        .sort((a, b) => a - b)
        .map(k => map[k])
        // extract and sort values 
        // within each column:
        .map((list) => {
          list.sort((a, b) => a.lvl - b.lvl)
          return list.map(i => i.val)
        })
    };
    