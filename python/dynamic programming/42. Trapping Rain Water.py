class Solution:
    def trap(self, height: List[int]) -> int:
        i = 0
        k = len(height) - 1

        leftMax = 0
        rightMax = 0

        water = 0

        while (i < len(height) and k >= 0) and (i < k):
            leftMax = max(leftMax, height[i])
            rightMax = max(rightMax, height[k])

            if leftMax < rightMax:
                i += 1
                if height[i] < leftMax:
                    water += leftMax - height[i]
            else:
                if height[k] < rightMax:
                    water += rightMax - height[k]
                k -= 1

            print(leftMax, rightMax)

        return water
