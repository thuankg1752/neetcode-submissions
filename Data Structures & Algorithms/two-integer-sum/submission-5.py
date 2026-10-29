class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i, num in enumerate(nums):
            result = target - num
            if result in hash_map:
                return [hash_map[result], i]
            
            hash_map[num] = i
        return []
