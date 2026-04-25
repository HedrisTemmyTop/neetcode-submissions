class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {

            nums.sort((a, b) => a - b)
    let l = 0, r = 0, total = 0, count = 0;

    while (r < nums.length) {
          total += nums[r]
        while (nums[r] * (r-l +1) > total + k) {
            total -= nums[l]
            l++
        }
      
        count = Math.max(count, r - l + 1)
        r++
    }

    return count
    }
}
