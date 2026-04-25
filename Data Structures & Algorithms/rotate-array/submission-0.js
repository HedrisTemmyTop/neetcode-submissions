class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // pop of the last value and unshift it


       while(k !==0){
        nums.unshift(nums.pop())
        k--
       }
       return nums
    }
}
