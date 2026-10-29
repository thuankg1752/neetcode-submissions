class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length-1;
    while (left < right) {
      let total = numbers[left] + numbers[right];
      if (total === target) {
        return [left + 1, right + 1];
      } else if (target > total) {
        left++;
      } else {
        right--;
      }
    }
    return [-1, -1]
  }
}
