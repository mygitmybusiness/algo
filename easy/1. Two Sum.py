class Solution(object):
    def twoSum(self, nums, target):
        hashmap = {}

        for i in range(len(nums)):
            complement = target - nums[i]

            if complement in hashmap:
                return [i, hashmap[complement]]

            hashmap[nums[i]] = i

        return []
        
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        