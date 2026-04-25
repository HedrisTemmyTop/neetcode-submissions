class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const freq = {}
        let l =0;
        let max = 0;

        for(let r = 0; r < s.length; r++){
        if(freq[s[r]] !== undefined && freq[s[r]] >= l){
            l= freq[s[r]]+1
        }
        freq[s[r]] = r
        max = Math.max(max,  r-l+1)
        }

        return max
    }
}
