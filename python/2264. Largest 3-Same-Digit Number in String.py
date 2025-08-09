class Solution:
    def largestGoodInteger(self, num: str) -> str:
        largest = -1

        for s in range(0, len(num) - 2):
            if num[s] == num[s + 1] == num[s + 2]:
                if int(largest) < int(num[s:s+3]):
                    largest = num[s:s+3]

        if largest == -1:
            return ""
        return largest
