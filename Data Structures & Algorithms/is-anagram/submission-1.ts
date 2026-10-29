class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const frequency: number[] = [];
        for (let i = 0; i < 26; i++) {
            frequency[i] = 0;
        }

        for(let i = 0; i < s.length; i ++){
            let sIndex = -1;
            let tIndex = -1;

            for (let j = 0; j < 26; j++) {
                if (s[i] === alphabet[j]) {
                    sIndex = j;
                }

                if (t[i] === alphabet[j]) {
                    tIndex = j;
                }
            }
            frequency[sIndex]++;
            frequency[tIndex]--;
        }
        for (let i = 0; i < 26; i++) {
            if (frequency[i] !== 0) {
                return false;
            }
        }

        return true;
    }
}
