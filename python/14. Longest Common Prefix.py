class Solution(object):
    def longestCommonPrefix(self, strs):
        pref = list(strs[0])

        for s in strs:
            if (s != pref) :
                while not s.startswith(''.join(pref)) and len(pref) > 0:
                    pref.pop()
        
        return ''.join(pref)
        """
        :type strs: List[str]
        :rtype: str
        """
        