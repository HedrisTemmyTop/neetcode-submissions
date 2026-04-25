class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
const frequencyCount = {}

for(let i = 0; i < nums.length; i++){
    if(frequencyCount[nums[i]]) return true

    frequencyCount[nums[i]] = true
}


return false

    }
}
