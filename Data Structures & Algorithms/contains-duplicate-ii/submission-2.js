class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    // 6:06
    containsNearbyDuplicate(nums, k) {
        const freq = {}

        let j  =0;

        for(let i =0; i < nums.length; i++){
            if(i - j > k){
                freq[nums[j]] = false
                j++

            }
             if(freq[nums[i]]) return true
             freq[nums[i]] = true
            
        }

        return false

    }
}
