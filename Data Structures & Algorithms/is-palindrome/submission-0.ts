class Solution {
  /**
   * @param {any} char
   * @return {boolean}
   */
  isValueCharacter(char: any): boolean {
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(char);
  }

  /**
   * @param {string} s
   * @return {boolean}
   */

  isPalindrome(s: string): boolean {
    const strTrans = s.toLocaleLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (!this.isValueCharacter(strTrans[left])) {
        left++;
        continue;
      }
      if (!this.isValueCharacter(strTrans[right])) {
        right--;
        continue;
      }
      if (strTrans[left] !== strTrans[right]) {
        return false;
      } else {
        left++;
        right--;
      }

    }
    return true;
  }
}