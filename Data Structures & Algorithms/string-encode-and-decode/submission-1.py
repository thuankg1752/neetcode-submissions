class Solution:
    def encode(self, strs: List[str]) -> str:
        result = ""
        for strv in strs:
            result += str(len(strv)) + "#" + strv
        return result

    def decode(self, s: str) -> List[str]:
        result = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1

            start = j + 1
            max_length = int(s[i:j])
            end = start + max_length
            result.append(s[start:end])
            i = end
        return result
