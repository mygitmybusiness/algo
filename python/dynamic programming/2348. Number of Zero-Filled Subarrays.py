class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        subs = 0
        ars = []
        curr = 0

        for i in range(0, len(nums)):
            if nums[i] == 0:
                curr += 1
            elif curr > 0:
                ars.append(curr)
                curr = 0
        
        if curr > 0:
            ars.append(curr)

        if len(ars) == 0:
            return 0
        
        for n in ars:
            subs += n * (n + 1) // 2            

        return subs
