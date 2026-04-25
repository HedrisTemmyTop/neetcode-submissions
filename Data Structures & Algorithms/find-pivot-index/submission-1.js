class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefix = Array.from({length: nums.length}, ()=> 0)
        let sum =0;

        for(let i=0; i < nums.length; i++){
            sum += nums[i]
            prefix[i] = sum
        }

        sum =0;

        let k = -1;


        for(let i =nums.length -1; i >= 0; i--){

            sum+= nums[i]
            if(prefix[i] === sum){
                k =i
            }


        }


        return k
    }
}
