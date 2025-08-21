class Solution:
    def numSubmat(self, mat: List[List[int]]) -> int:
        from typing import List

class Solution:
    def numSubmat(self, mat: List[List[int]]) -> int:
        if not mat or not mat[0]:
            return 0

        m, n = len(mat), len(mat[0])
        heights = [0] * n
        ans = 0

        for i in range(m):
            for j in range(n):
                heights[j] = heights[j] + 1 if mat[i][j] == 1 else 0

            stack = []  # (height, count)
            cur = 0
            for h in heights:
                cnt = 1
                while stack and stack[-1][0] >= h:
                    ph, pc = stack.pop()
                    cur -= ph * pc
                    cnt += pc
                stack.append((h, cnt))
                cur += h * cnt
                ans += cur

        return ans
    