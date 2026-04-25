class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l =0;
        let r = nums.length -1;
     

        while(l < r){
            const mid = l + Math.floor((r-l)/2)
            
            if(nums[mid] > nums[r]) l = mid +1
            else  r= mid
        }

        let p1 =0;
        let p2 = l-1;
        
        let p3 = l;
        let p4 = nums.length -1;

        while(p1 <= p2){
            const mid = p1 + Math.floor((p2-p1)/2)
            if(nums[mid] === target) return mid
            else if(nums[mid] > target) p2 = mid -1;
            else p1 = mid +1

        }
        while(p3 <= p4){
            const mid = p3 + Math.floor((p4-p3)/2)
            if(nums[mid] === target) return mid
            else if(nums[mid] > target) p4 = mid -1;
            else p3 = mid +1

        }

        return -1;
    }
}
