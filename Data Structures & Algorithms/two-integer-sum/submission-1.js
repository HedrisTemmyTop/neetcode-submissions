class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const freq ={}

        for(let i =0; i < nums.length; i++ ){
            const num = nums[i]
            const diff = target - num
            if(freq[diff] !== undefined) return [freq[diff], i];
            freq[num] = i

        }
    }
}
