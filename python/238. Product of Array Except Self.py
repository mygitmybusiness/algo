class Solution(object):
    def productExceptSelf(self, nums):
        ans = [1]

        for i in range(1, len(nums)):
            ans.append(nums[i - 1] * ans[i - 1])

        j = len(nums) - 1
        X = 1

        while(j >= 0):
            ans[j] = ans[j] * X
            X *= nums[j]
            j-=1

        return ans
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        