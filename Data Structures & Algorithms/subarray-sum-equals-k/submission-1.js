class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        const prefixSum = new Map()
        let sum =0;
        let count =0;

        prefixSum.set(0, 1)

        for(let i =0; i < nums.length; i++){
            sum += nums[i]
           const freq = prefixSum.get(sum -k) || 0
                count+= freq
            

            prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1)
        }


        return count;
        /* {
            2
            -1: 1,
            1: 2,
            2: 4

      }*/

    }
}
