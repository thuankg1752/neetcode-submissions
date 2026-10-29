class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }
        const setDup = new Set(nums);
        let count,
            current,
            longestSequence = 0;
        for (const num of nums) {
            if (!setDup.has(num - 1)) {
                current = num;
                count = 1;
                while (setDup.has((current += 1))) {
                    count += 1;
                    if (longestSequence < count) {
                        longestSequence = count;
                    }
                }
            }
        }
        return Math.max(count, longestSequence);
    }
}
