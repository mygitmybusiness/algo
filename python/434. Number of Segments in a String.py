class Solution:
    def countSegments(self, s: str) -> int:
        count = 0
        reset = False

        for char in s:
            if char != ' ':
                if not reset:
                    count += 1
                reset = True
            else:
                reset = False

        return count