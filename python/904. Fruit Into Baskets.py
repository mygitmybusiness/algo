class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        types = {}
        l = 0

        for r, f in enumerate(fruits):
            types[f] = types.get(f, 0) + 1

            if len(types) > 2:
                types[fruits[l]] -= 1

                if types[fruits[l]] == 0:
                    del types[fruits[l]]
                l += 1
        
        return r - l + 1
        