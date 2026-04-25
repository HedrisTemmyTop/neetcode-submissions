class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {

        let l =0;
        let r =0;
        let minLength = Infinity;
        let sum = 0;


        while(r < nums.length){
            sum+= nums[r]



            while(sum >= target){
                minLength = Math.min(r-l +1, minLength)
                sum-= nums[l]
                l++
            }
                r++
            

            
            
        }


        return minLength === Infinity ? 0 : minLength
    }
}
