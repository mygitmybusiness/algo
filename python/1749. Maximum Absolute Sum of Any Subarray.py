class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        maxSum = 0
        minSum = 0
        runningSum = 0

        for num in nums:
            runningSum += num
            maxSum = max(maxSum, runningSum)
            minSum = min(minSum, runningSum)

        return abs(maxSum - minSum)