class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count =0;
        let seen = {}


        for(let i =0; i < nums.length; i++){
          seen[nums[i]] = nums[i]

        }

  
      

        for(let i =0; i < nums.length; i++){
            if(!seen[nums[i]-1]){

           
              let length =1;
              let curr = nums[i]
              while(seen[curr+1] !== undefined){
                length++
                curr ++
              }
              count = Math.max(count, length)
            }
        }


        return count
    }
}
