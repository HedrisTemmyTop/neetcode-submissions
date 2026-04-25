class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        function helper(arr){
            if(!arr.length) return [[]]
           let perms = helper(arr.slice(1))    
           let newArr = []
           for(let p of perms){
            for(let i=0; i <= p.length; i++){
                let p_copy = [...p]
                p_copy.splice(i, 0, arr[0])
                newArr.push(p_copy)
            }
           }
           return newArr
        }
        return helper(nums)
    }
}

// [3]