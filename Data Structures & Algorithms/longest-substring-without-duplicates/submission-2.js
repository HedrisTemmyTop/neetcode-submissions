class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // 6: 20
    lengthOfLongestSubstring(s) {
        const freq = {}
        let max = 0; 
        let j =0;

        for(let i =0; i < s.length; i++){
           
            if(freq[s[i]]  !== undefined && freq[s[i]] >= j){
                j = freq[s[i]] + 1
            }

            freq[s[i]] = i
             max = Math.max(max, i - j + 1)
            
        }

        return max
    }
}
