class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        visited = 0

        for f in range(0, len(fruits)):
            for b in range(0, len(baskets)):
                if baskets[b] >= fruits[f]:
                    baskets[b] = -1
                    visited += 1
                    break
        
        return len(fruits) - visited
    