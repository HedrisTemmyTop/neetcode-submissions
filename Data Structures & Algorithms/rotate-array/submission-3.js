class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const modK = k % nums.length



        function helper( start, end){

            let l =start,
                r = end;

                while(l < r){
                    [nums[l], nums[r]] = [nums[r], nums[l]]
                    l++
                    r--
                }


               

        }

        helper(0, nums.length -1)
        helper(0, modK -1)
        helper(modK, nums.length -1)




return nums;
    }


    
}
// [7,8,1,2,3,4,5,6]
// 8, 7, 6, 5, 4, 3, 2, 1