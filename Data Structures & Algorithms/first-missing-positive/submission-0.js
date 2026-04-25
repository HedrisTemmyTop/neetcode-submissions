class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for(let i =0; i < nums.length; i++){
         while(nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] -1] !== nums[i]){
            let idx = nums[i] -1;
            [nums[i], nums[idx]] = [nums[idx], nums[i]]
         }
        }

      

        for(let i =0; i < nums.length; i ++){
            if(nums[i] !== i+1){
               return i+1

            }
        }

        return nums.length + 1
    }
}


// 1, 2, 4
// 2, 1, 4

// -2, -1, 0
// -2, -1, 0
// 0, -1, -2