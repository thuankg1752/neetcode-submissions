class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if(nums.length === 0){
            return false
        }
        const check = new Set<number>
        for(const num of nums){
            if(check.has(num)){
                return true
            }
            check.add(num)
        }
        return false
    }
}
