class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []
        let set = []

        function backtrack(i){
            if(i === nums.length){
                res.push([...set])
                return;
            }
            backtrack(i+1)
            set.push(nums[i])
            backtrack(i+1)
            set.pop()
        }
        backtrack(0)
        return res
    }
}