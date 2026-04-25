class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
       let count = 0;
       let num = null

       for(let i =0; i < nums.length; i++){
        if(count === 0){
         num = nums[i]

        }
count += (num === nums[i]) ? 1:-1



        


       }



        
     

        return num
    }
}
