class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = undefined;
        let count = 0;


        for(let num of nums){
            if(count === 0){
                majority = num
                count++
            }else if(num === majority){
                count++
            }else{
                count--
            }
        }

        return majority;
    }
}
