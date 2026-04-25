class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let idx = 0;

        for(let i =0; i < nums.length; i++){
            if(nums[i] !== val){
                [nums[idx], nums[i]] = [nums[i], nums[idx]]
                idx++
            }




        }


        return idx

    }
}


// [0,1,3,0,4,2,2,2]
// 1,1,2,3,4
// 2,3,4,1,1