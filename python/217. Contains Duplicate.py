class Solution(object):
    def containsDuplicate(self, nums):
        uniques = set(nums);

        return len(uniques) != len(nums);
        """
        :type nums: List[int]
        :rtype: bool
        """
        