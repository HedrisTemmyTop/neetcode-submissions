class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /**
         * [3,4,5,6,1,2]
         */

        let l =0;
        let r = nums.length -1;

        while(l <= r){
            const mid = l + Math.floor((r-l)/2)
            if(nums[mid] === target) return mid;
            if(nums[mid] >= nums[l]){
                if(nums[l] <= target && target <= nums[mid]){
                    r = mid -1
                }else l = mid +1
                
            }else{
                if(target <= nums[r] && nums[mid] <= target){
                    l = mid +1
                }else r = mid -1
                
            }

        }

        return -1;
    }
}
