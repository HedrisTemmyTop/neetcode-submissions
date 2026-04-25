class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let l =0;
        let count =0;
        let r = 0;
        let freq = {}
        


        while(r < s.length){
            freq[s[r]] = (freq[s[r]] || 0) + 1
            if(Object.keys(freq).length > 2){
                 count = Math.max(count, r-l )
            }else{
                 count = Math.max(count, r-l + 1)

            }
           

            while(Object.keys(freq).length > 2){
                freq[s[l]]--
                if(freq[s[l]] ===0) delete freq[s[l]]
                l++
            }
            r++

        }

        return count
    }
}
