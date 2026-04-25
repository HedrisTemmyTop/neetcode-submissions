class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b)=> a-b)

        let l = 0, r =0, min =Infinity;
        while(r < nums.length){
            if(r-l+1 ===k){
                min = Math.min(min, nums[r]-nums[l])
                l++
            }

            r++
        }

        return min

        //1,2,3,3,5,6
        //1, 4, 7, 9
    }
}
