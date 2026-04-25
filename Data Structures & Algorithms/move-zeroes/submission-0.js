class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0,
            r = 0;


            while(r < nums.length){

                // if the left is zero and the right is zero, shift the right
                // if the left is not zero, shift the left and the right
                if(nums[l] === 0 && nums[r] === 0){
                    r++

                }else if(nums[l] === 0 && nums[r] !== 0 ){
                    [nums[l], nums[r]] = [nums[r], nums[l]]
                    l++ 
                    r++
                }else{
                      l++ 
                    r++  
                }
            }


            return nums
    }
}


//[1,2,0,0,0,5]
//[1,2,0,0,0,5]

// [0, 1,0]
// [0, 1,0]