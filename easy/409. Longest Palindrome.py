class Solution(object):
    def longestPalindrome(self, s):
        chars = set()
        res = 0

        for idx in s:
            if idx in chars:
                chars.remove(idx)
                res += 2
            else:
                chars.add(idx)

        if chars:
            res += 1

        return res
        
        """
        :type s: str
        :rtype: int
        """
        