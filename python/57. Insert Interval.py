class Solution(object):
    def insert(self, intervals, newInterval):
        n = len(intervals)
        i = 0
        res = []

        # Case 1: intervals not overlapping and before newInterval
        while i < n and intervals[i][1] < newInterval[0]:
            res.append(intervals[i])
            i += 1

        # Case 2: intervals overlapping with newInterval
        while i < n and newInterval[1] >= intervals[i][0]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1

        # After merging all overlaps, add the merged newInterval
        res.append(newInterval)

        # Case 3: remaining intervals (those come after newInterval)
        while i < n:
            res.append(intervals[i])
            i += 1

        return res

        """
        :type intervals: List[List[int]]
        :type newInterval: List[int]
        :rtype: List[List[int]]
        """