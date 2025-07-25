class Solution:
    def maxSum(self, nums: List[int]) -> int:
        hashSet = set()
        sum = 0
        negative = float('-inf')

        for i in range(len(nums)):
            if nums[i] > 0:
                hashSet.add(nums[i])
            else:
                negative = max(negative, nums[i])
        for element in hashSet:
            sum += element
        if len(hashSet) > 0:
            return sum
        else:
            return negative

        return sum
    