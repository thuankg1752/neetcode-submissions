class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        if len(nums) == 0:
            return False
        check = dict()
        for num in nums:
            if num in check: 
                return True
            check[num] = num
        return False