class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq ={}

        for(let num of nums){
            if(freq[num]) return true
            freq[num] = true
        }

        return false
    }
}
