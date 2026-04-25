class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {

        let l =0;
        let r = nums.length -1;

        while(l <= r){
            const mid = l + Math.floor((r-l)/2)
            if(nums[mid] === target) return true;
            /**
             * [2,2,2,1,2,2]
             */

            if(nums[mid] === nums[l]){
                l++
            }else if(nums[mid] > nums[l]){
                if(nums[l] <= target && target < nums[mid]) r = mid -1
                else l = mid +1
            }else{
                if(target > nums[mid] && nums[r] > target)l = mid +1
                else r = mid -1
            }

        }

        return false

    }
}
