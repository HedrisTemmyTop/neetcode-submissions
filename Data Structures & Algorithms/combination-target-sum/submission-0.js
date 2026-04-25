class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []

        function backtrack(index, remaining, path){
            if(remaining < 0) return
            if(index === nums.length){
                if(remaining === 0){
                    res.push([...path])
                }
                return
            }
            path.push(nums[index])
            backtrack(index, remaining - nums[index], path)
            path.pop()
            backtrack(index + 1, remaining, path)
        }
        backtrack(0, target, [])
        return res
    }
}
