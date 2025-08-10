class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        MOD = 10**9 + 7
        count = 0
        prefixSum = 0
        odd = 0
        even = 1

        for num in arr:
            prefixSum += num
            if prefixSum % 2 == 0:
                count += odd
                even += 1
            else:
                count += even
                odd += 1
        
        return count % MOD
        