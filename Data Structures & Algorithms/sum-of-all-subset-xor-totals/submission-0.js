class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let sol = 0
        let set = []
       function backtrack(i){
        if(i === nums.length){
            let xor = 0
            for(let sub of set){
              xor =  xor ^ sub
            }
            sol += xor
            return;
        }
        backtrack(i+1)
        set.push(nums[i])
        backtrack(i+1)
        set.pop()
       }
       
       backtrack(0)
       return sol
    }
}



