class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freq = {}
        for(let i =0; i < strs.length; i++){
            const bucket = new Array(26).fill(0)
            for(const letter of strs[i]){
                const charCode = letter.charCodeAt() - 96
                bucket[charCode]++
            }

            const key = bucket.join("-")

           if(freq[key]) freq[key].push(strs[i])
           else freq[key]=[strs[i]]
         
        }


        return Object.values(freq)
    }
}
