class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        output = []
        batch = ''

        for char in reversed(s):
            if (char == '-'):
                continue
            batch += char.upper()
            
            if len(batch) == k:
                output.append(batch)
                batch = ''

        if len(batch) > 0:
            output.append(batch)

        res = "-".join(output)[::-1]
        
        return res
            