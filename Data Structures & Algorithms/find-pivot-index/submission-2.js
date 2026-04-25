class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        // const prefix = Array.from({length: nums.length}, ()=> 0)
        let sum =0;

        for(let i=0; i < nums.length; i++){
            sum += nums[i]
            // prefix[i] = sum
        }

       let leftSum =0
     

        for(let i =0; i <= nums.length -1; i++){
            let rightSum = sum - leftSum - nums[i]

            if(rightSum === leftSum){
                return i
            }

            leftSum+= nums[i]

        }


        return -1
    }
}
