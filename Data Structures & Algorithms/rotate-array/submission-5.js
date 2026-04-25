class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
      let  kMod = k%nums.length
        function helper(start, end){
            let l = start;
            let r =end;
            while(l < r){
                [nums[l], nums[r]] = [nums[r], nums[l]]
                l++
                r--
            }
        }
        helper(0, nums.length -1)
        helper(0, kMod-1)
        helper(kMod, nums.length-1)
        return nums;
    }

}
