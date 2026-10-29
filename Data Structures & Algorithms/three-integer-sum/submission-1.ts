class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = new Set<string>();

        for (let i = 0; i < nums.length - 2; i++) {
            const map = new Map<number, number>();
            for (let j = i + 1; j < nums.length; j++) {
                const complement = -(nums[i] + nums[j]);
                if (map.has(nums[j])) {
                    const previousIndex = map.get(nums[j])!;
                    const triplet = [nums[i], nums[previousIndex], nums[j]].sort((a, b) => a - b);
                    result.add(JSON.stringify(triplet));
                }

                map.set(complement, j);
            }
        }
        return [...result].map((item) => JSON.parse(item));
    }
}
