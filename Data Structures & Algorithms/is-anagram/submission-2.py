class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        alphabet = "abcdefghijklmnopqrstuvwxyz"
        frequency = []
        for i in range(26):
            frequency.append(0)

        for i in range(len(s)):
            s_index = -1
            t_index = -1

            for j in range(26):
                if s[i] in alphabet[j]:
                    s_index = j
                if t[i] in alphabet[j]:
                    t_index = j

                frequency[s_index] += 1
                frequency[t_index] -= 1

        for i in range(26):
            if frequency[i] != 0:
                return False
        return True
