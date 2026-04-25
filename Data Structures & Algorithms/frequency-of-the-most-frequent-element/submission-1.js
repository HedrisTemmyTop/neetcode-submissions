class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a,b)=> a-b)
        let l =0, r= 0, sum =0, count = 0;


        while(r < nums.length){
             sum += nums[r]
            while(nums[r] * (r-l +1) > sum +k){
                sum -=  nums[l]
                l++
            }
         
            count = Math.max(count, r-l+1)
            r++
        }


        return count;
    }
}

// 1,4, 8, 13, 
// nums[r] * (r-l +1) > total + k