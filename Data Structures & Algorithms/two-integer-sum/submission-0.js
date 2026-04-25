class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
const frequency = {}


for(let i = 0; i < nums.length; i++){
if(frequency[nums[i]] !== undefined) return [ frequency[nums[i]], i]

    const difference = target - nums[i]

    frequency[difference] = i
}

        
    }
}
