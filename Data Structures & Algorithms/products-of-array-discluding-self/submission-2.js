class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = []
        let m =1;

        for(let i =0; i < nums.length; i++ ){

            prefix[i] = m * nums[i]
            m *= nums[i]
        }

       m = 1;
        for(let i =nums.length -1; i >=0; i--){
            prefix[i] = i > 0 ? prefix[i-1] * m : m
             m *= nums[i] // 6,

        }

        return prefix
    }
}




// [-1,0,1,2,3]
//-1 0, 0, 0, 0
// 0

// 48,24,12,8






// 48,48,24,6
