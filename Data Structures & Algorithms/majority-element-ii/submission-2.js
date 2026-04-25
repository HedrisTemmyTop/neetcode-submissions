class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let num1 = nums[0]
        let count1 = 0;
        let num2 = nums[0];
        let count2  =0;


        for(let num of nums){
            if(num === num1)count1++
            else if(num ===num2) count2++
            else if(count1 ===0){
                num1 = num
                count1 ++
            } else if(count2 ===0){
                num2 = num
                count2 ++
            }else{
                count1--
                count2--
            }


           
        }

        count1 =0;
        count2=0;

        for(let num of nums){
            if(num === num1) count1++
           else if(num === num2) count2++
        }


const result = []
if(count1 >Math.floor(nums.length/3)) result.push(num1)
if(count2 >Math.floor(nums.length/3)) result.push(num2)

return result

     
    }
}
