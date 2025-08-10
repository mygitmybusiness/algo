class Solution:
    def arrangeCoins(self, n: int) -> int:
        # step = 1
        # count = 0

        # while n >= 0: #
        #     n -= step
        #     step += 1
        #     if n >= 0:
        #         count += 1
                
        # return count

        return int((math.sqrt(8 * n + 1) - 1) // 2)