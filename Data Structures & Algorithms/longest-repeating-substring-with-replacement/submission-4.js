class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        const freq = {}
        let l =0;
        let count = 0;


        for(let i =0; i < s.length;  i++){
                 freq[s[i]] = (freq[s[i]] ||0) + 1
            const max = Math.max(...Object.values(freq), 0)



        
            while((i - l + 1) - max > k &&  l < s.length){
                freq[s[l]] --
                l++
                
            }

            // if(l === s.length) return count
        

       

            count = Math.max(count,  i-l+1)

        }

        return count;
    }
}
