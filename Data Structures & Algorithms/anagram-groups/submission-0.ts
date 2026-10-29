class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join(""); //"atc" -> ['a','c','t']-> "act"
            if(!map.has(key)){
                map.set(key, [])
            }
            map.get(key).push(strs[i]);
        }
        return Array.from(map.values())
    }
}
