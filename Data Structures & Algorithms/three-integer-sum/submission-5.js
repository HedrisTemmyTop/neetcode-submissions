class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b)
        const result =[];
        let digits =[]
// [-1,]
       function helper(k, target, start){
            if(k !== 2){

                for(let i =start; i < nums.length; i++){
                    if(nums[i] === nums[i-1] && i > start) continue;
                    digits.push(nums[i])
                    helper(k-1, target - nums[i], i+1)
                    digits.pop()
                }

                return;

            }
                let l =start;
                let r =nums.length -1

                while(l < r){
                  const sum = nums[l] + nums[r]
                  if(sum > target) r--
                  else if(sum < target) l++
                  else {
                    result.push([...digits,nums[l], nums[r] ])
                    l++
                    r--
                     while(nums[l] === nums[l-1] && l < r) l++
                   }
                }
            
        }

        helper(3, 0, 0)

        return result
    }
}
