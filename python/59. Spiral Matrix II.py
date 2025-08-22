class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0] * n for _ in range(n)] 
        left = 0
        right = n - 1
        top = 0
        bottom = n - 1

        count = 1

        while left <= right and top <= bottom:
            for col in range(left, right + 1):
                matrix[top][col] = count
                count += 1
            top += 1

            for row in range(top, bottom + 1):
                matrix[row][right] = count
                count += 1
            right -= 1

            for col in range(right, left - 1, -1):
                matrix[bottom][col] = count
                count += 1
            bottom -= 1

            for row in range(bottom, top - 1, -1):
                matrix[row][left] = count
                count += 1
            left += 1
        
        return matrix
