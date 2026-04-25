class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a-b)
        let l = 0;
        let result = Infinity
        for(let r = k -1; r < nums.length; r++){
            result = Math.min(nums[r] - nums[l], result)
            l++
        }

        return result
    }
}
