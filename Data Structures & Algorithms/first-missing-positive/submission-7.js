class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // modify all negative nums to be zero
        let n = nums.length;
        for(let i =0; i < n; i++){
            if(nums[i] < 0)  nums[i] =0;
        }
        // do negative marking by using the values in the array to mark their presence
        for(let i =0; i < n; i++){
            let abs = Math.abs(nums[i])
           
            if(abs >0 && nums[i] <= n){
             if(nums[abs -1] > 0)   nums[abs -1] = -1*nums[abs -1] 
             else if(nums[abs-1] === 0) nums[abs -1] = -1 * (n +1)
            }
        }
        // iterate from till end and return number that is +ve at their index
        for(let i =1; i <= n; i++){
            if(nums[i-1] >= 0) return i
        }

        return n +1
    }
}
