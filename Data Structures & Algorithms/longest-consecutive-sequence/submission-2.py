class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        hash_map = set(nums)
        max_count = 0
        for num in nums:
            if (num - 1) not in hash_map:
                count = 1
                current = num
                while (current := current + 1) in hash_map:
                    count += 1
                    if max_count < count:
                        max_count = count
                max_count = max(max_count, count)

        return max_count
