class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l =0;
        for(let r =1; r < nums.length; r++){
            if(nums[r] !== nums[r-1]){
                l++
                nums[l] = nums[r]
            }
        }

        return l+1
    }
}


// [1,1,3,4,3,4]
//1,2,2,2,3,4
//1,2,3,4,3,4

 // [1,1,2,2,3,4]