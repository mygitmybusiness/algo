# A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

# For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
# Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        if len(s) > 12:
            return []

        res = []

        def backtrack(segments, i, currStr):
            if segments > 4:
                return
            if segments == 4 and i == len(s):
                res.append(currStr[:-1])
                return

            for k in range(i, min(i + 3, len(s))):
                if (i == k or s[i] != '0') and int(s[i:k+1]) <= 255:
                    backtrack(segments + 1, k + 1, currStr + s[i:k+1] + ".")


        backtrack(0, 0, "")
        return res