class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        # maximize outcome by comparing x & y x = 'ab', y = 'ba' ?
        # i = 0
        # n = len(s) - 2
        # a = 'ab' if x > y else 'ba'
        # b = 'ab' if x < y else 'ba'
        count = 0
        stack = []
        if x > y:
            a = 'ab'
            b = 'ba'
            aX = x
            bY = y
        else:
            a = 'ba'
            b = 'ab'
            aX = y
            bY = x

        # print(a, b)

        for char in s:
            stack.append(char)
            # print(stack)
            result = ''.join(stack[-2:])
            if result == a:
                count += aX
                del stack[-2:]

        newStr = ''.join(stack[0:])
        newStack = []

        for char in newStr:
            newStack.append(char)
            # print(newStack)
            result = ''.join(newStack[-2:])
            if result == b:
                count += bY
                del newStack[-2:]
            
        return count

