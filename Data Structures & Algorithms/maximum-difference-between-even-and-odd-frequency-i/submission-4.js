class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = {}

        for(let letter of s){
            freq[letter] = (freq[letter] || 0) +1
        }

        let maxOdd =0;
        let minEven = 0;

        for(let key in freq){
            if(freq[key] % 2 === 0){
                minEven = minEven === 0 ? freq[key] : Math.min(freq[key], minEven)
            }else{
                maxOdd = Math.max(maxOdd, freq[key])
            }
        }


        return maxOdd - minEven
    }
}
