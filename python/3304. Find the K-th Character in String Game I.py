class Solution:
    def kthCharacter(self, k: int) -> str:
        alphabet = 'abcdefghijklmnopqrstuvwxyz'
        
        word = 'a'

        while len(word) < k:
            newStr = ''
            for char in word:
                index = alphabet.find(char)
                if index + 1 >= len(alphabet):
                    index -= len(alphabet)
                newStr += alphabet[index + 1]
            word += newStr

        return word[k - 1]