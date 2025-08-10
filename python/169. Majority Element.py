class Solution(object):
    def majorityElement(self, nums):
        majority = collections.Counter(nums)
        target = max(majority.keys(), key = majority.get)

        return target
        """
        :type nums: List[int]
        :rtype: int
        """
        