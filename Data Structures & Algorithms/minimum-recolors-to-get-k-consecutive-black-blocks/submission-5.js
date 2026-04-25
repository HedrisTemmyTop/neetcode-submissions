class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        const freq = {
            'W': 0,
            'B': 0
        }
        /**
         * w: 0
         * b:1
         */

        let l =0;
        let min = Infinity;
        for(let r =0; r < blocks.length; r++){
            freq[blocks[r]]++
            if((r-l +1) === k){
                min = Math.min(min, freq['W'])
                freq[blocks[l]]--
                l++
            }
            

            }

        return min === Infinity ? freq['W'] : min
    }
}
