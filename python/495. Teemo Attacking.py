class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        timeStreak = 0
        poisonEnd = 0

        for n in timeSeries:
            timeStreak += duration
            
            if n < poisonEnd:
                timeStreak -= poisonEnd - n

            poisonEnd = n + duration

        return timeStreak
        