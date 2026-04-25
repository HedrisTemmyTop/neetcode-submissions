class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    const output = [];
    let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i]
  }
 // [4,3,2,1,2]

 //  1,4, 48
 let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
     output[j] = postfix * output[j]
     postfix *= nums[j]

  }

  return output;
    }
}
