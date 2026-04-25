class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
     
        let sum = nums.reduce((acc, n) => acc+n, 0)
        if(sum % k !== 0) return false
        let target = sum/k

        let subsets = new Array(k).fill(0)
        nums.sort((a, b) => b-a)
  

        function backtrack(i=0){
            if(i === nums.length){
            //     for(let num of subsets){
            //         if(num !== target) return false
            //     }
                return true
            }

            for(let j =0; j < subsets.length; j++){
                if(subsets[j] + nums[i] <= target){
                    subsets[j] += nums[i]
                    if(backtrack(i+1)) return true
                    subsets[j] -= nums[i]
                }
                if(subsets[j] ===0) break
            }

            return false
        }
        return backtrack()
    }
}
