class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        nums.sort((a, b) => a-b)
        function  backtrack(i, path){
            if(i === nums.length){
                res.push([...path])
                return;
            }
            path.push(nums[i])
            backtrack(i+1, path)
            path.pop()
            let idx = i+1;
            while(nums[i] === nums[idx] && idx < nums.length) idx++
            backtrack(idx, path)

        }
        backtrack(0, [])
        return res
    }
}
