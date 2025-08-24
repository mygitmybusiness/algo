class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        top = float('inf')
        left = float('inf')
        right = -float('inf')
        bottom = -float('inf')

        for i in range(0, len(grid)):
            for j in range(0, len(grid[i])):
                if grid[i][j] == 1:
                    top = min(top, i)
                    left = min(left, j)
                    right = max(right, j)
                    bottom = max(bottom, i)

        return (bottom - top + 1) * (right - left + 1)

