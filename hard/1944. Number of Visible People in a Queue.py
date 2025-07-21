class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        answer = [0] * n
        stack = []

        for i in range(n):
            while stack and heights[i] > heights[stack[-1]]:
                idx = stack.pop()
                answer[idx] += 1  # Person at idx can see person i
            if stack:
                answer[stack[-1]] += 1  # Person at top sees this taller/equal person
            stack.append(i)
        
        return answer
                


# Iterate through heights from left to right.
# While the current person (heights[i]) is taller than the one on top of the stack:
# Pop from the stack because they can see heights[i] before being blocked.
# Increment their count in answer.
# After the loop, if the stack isn’t empty, the person at the top can see the current person (heights[i]) because the view isn’t completely blocked (equal or taller person at the front).
# Push the current index onto the stack.
    