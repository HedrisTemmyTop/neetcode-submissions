class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const freq = {}

        let j =0;




        for(let i =0; i< nums.length; i++){

            if(Math.abs(i -j) > k){
                freq[nums[j]] = false
                j++
            }

                if(freq[nums[i]]) return true
                freq[nums[i]] = true
            

        }



        return false
    }
}
