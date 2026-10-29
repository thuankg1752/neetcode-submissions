class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let result: string = '';
    for (const str of strs) {
      result += str.length + '#' + str;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
      let check = i;
      while (str[check] !== '#') {
        check++;
      }
      const start = check + 1;
      const maxLength = Number(str.slice(i, check)) || 0;
      const end = start + maxLength;
      result.push(str.slice(start, end));

      i = end;
    }

    return result;
  }
}
