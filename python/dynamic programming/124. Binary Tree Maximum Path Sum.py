# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        maxSum = -float('inf')

        def dfs(node):
            nonlocal maxSum

            if not node:
                return 0
            
            left = max(0, dfs(node.left))
            right = max(0, dfs(node.right))

            maxSum = max(maxSum, node.val + left + right)

            return max(left + node.val, right + node.val)

        dfs(root)

        return maxSum
            