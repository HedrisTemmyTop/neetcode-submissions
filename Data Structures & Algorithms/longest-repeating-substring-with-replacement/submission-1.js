class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let l =0;
        let freq = {};
        let result =0;


        for(let r =0; r < s.length; r++){

            freq[s[r]] = (freq[s[r]] || 0 ) +1

            while((r-l+1) -Math.max(...Object.values(freq)) > k){
                freq[s[l]]--
                l++
            }

/**
"AABABBA"

 *
 * {
 * A: 1
 * B: 2
 * } 
 */


            result = Math.max(r-l +1, result)

            

        }

        return result
            
    }
}



// AAABBBB