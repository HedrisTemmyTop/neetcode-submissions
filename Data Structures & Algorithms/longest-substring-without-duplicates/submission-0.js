class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l =0,
            r =0,
            freq ={},
            max =0;


            while(r < s.length){
                if(freq[s[r]] !== undefined && freq[s[r]] >= l){
                    l = freq[s[r]] +1
                  
                }
                max = Math.max(r-l+1, max)
                freq[s[r]] = r
                r++
            }

            return max
    }
}
