class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const freq = {}

        for(let i =0; i <  nums.length; i++){
            // if(nums[i] <= 0) nums[i] =0

            freq[nums[i]] = nums[i]
        }


        let i = 1;

        while(freq[i]){
            i++
        }


        return i
    }
}
