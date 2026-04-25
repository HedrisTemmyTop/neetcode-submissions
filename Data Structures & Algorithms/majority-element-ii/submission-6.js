class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let candidate1 = null,
            candidate2 = null,
            count1  = 0,
            count2  = 0;


            for(let num of nums){
                if(count1 === 0){
                    count1 = 1;
                    candidate1 = num
                }else if(num === candidate1){
                    count1++
                    // count2--
                }else if(count2 === 0){
                    count2 = 1;
                    candidate2 = num
                }else if(num === candidate2){
                    count2++
                    // count1 --
                }else{
                    count1--
                    count2--
                }

            }

    count1 =0;
        count2=0;

        for(let num of nums){
            if(num === candidate1) count1++
           else if(num === candidate2) count2++
        }


const result = []
if(count1 >Math.floor(nums.length/3)) result.push(candidate1)
if(count2 >Math.floor(nums.length/3)) result.push(candidate2)

return result
    }
}
