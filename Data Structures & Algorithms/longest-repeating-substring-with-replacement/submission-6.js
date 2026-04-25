class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let l = 0;
        let r = 0;
        let freq = {}
        let max =0;
        let maxOccured =0;
        

        while(r < s.length){
            freq[s[r]] = (freq[s[r]] || 0) +1   
             maxOccured = Math.max(maxOccured, freq[s[r]])
           while((r-l +1) - maxOccured > k){
            freq[s[l]]--
            l++
           }
            max = Math.max(r-l +1, max)
            r++

        }

        return max;
    }
}



/**
 * {
 * a:4
 * b:1
 * 
 * }
 * 
 */