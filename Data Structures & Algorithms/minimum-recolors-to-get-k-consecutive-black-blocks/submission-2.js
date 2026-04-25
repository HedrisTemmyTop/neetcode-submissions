class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        const freq = {};

        for(let i =0; i < k; i++){
            freq[blocks[i]] = (freq[blocks[i]] || 0) + 1
        }
        

        if(!freq['W']) return 0

        let min = freq['W'] 

        let l =0;
        let r = k;

        while(r < blocks.length){
            freq[blocks[l]]--
            freq[blocks[r]]++
            l++
            r++
            min = Math.min(freq['W'], min)
        }

        return min
    }
}
