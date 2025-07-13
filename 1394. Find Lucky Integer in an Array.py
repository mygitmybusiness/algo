class Solution:
    def findLucky(self, arr: List[int]) -> int:
        book = {}

        for i in range(len(arr)):
            if arr[i] in book:
                book[arr[i]] += 1
            else:
                book[arr[i]] = 1
        
        biggestNum = -1

        for key in book:
            if book[key] == key:
                biggestNum = max(biggestNum, book[key])
        
        return biggestNum
        