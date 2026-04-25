class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        const freq = {}

        let l =0;
        let r=0;
        let max =0;
        let length = 0;

        while(r < s.length){
            if(freq[s[r]] === undefined) length++
            freq[s[r]] = (freq[s[r]] || 0) +1

            while(length > 2){
                freq[s[l]]--
                if(freq[s[l]] === 0){
                    length--
                    delete freq[s[l]]
                }
                l++
            }

            max = Math.max(r-l+1, max)
            r++
        }
        return max;
    }
}
