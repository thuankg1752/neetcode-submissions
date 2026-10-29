class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = dict()
        for strV in strs:
            chars = "".join(sorted(strV))
            if chars not in hash_map:
                hash_map[chars] = []
            hash_map[chars].append(strV)
        return list(hash_map.values())