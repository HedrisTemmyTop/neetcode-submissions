class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const kMod = k%nums.length
        function  reverese( left, right){

        while(right > left){

            [nums[left], nums[right]] = [nums[right], nums[left]]

            right--
            left++
        }
    }

        reverese(0, nums.length -1)
        reverese(0, kMod -1 )
        reverese(  kMod, nums.length -1 )
       return nums

    }


  
}


// [1,2,3,4,5,6,7,8] --- > [5,6,7,8,1,2,3,4]
// [8,7,6,5,4,3,2,1]