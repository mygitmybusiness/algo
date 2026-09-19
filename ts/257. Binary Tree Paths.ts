/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
    const res:string[] = [];
    
    const backtracking = (path, node) => {
      if (!node) return;
      if (!node.left && !node.right) {
        res.push([...path, node.val].join('->'));
        return;
      }

      if (node.left) backtracking([...path, node.val], node.left);
      if (node.right) backtracking([...path, node.val], node.right);

      path.pop();
    }

    backtracking([], root);

    return res;
};