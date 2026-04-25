class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let oldCount =0;
        let count =0;

        for(let i =0; i < nums.length; i++){
            if(nums[i] === 1){
                count ++
            }else{
                oldCount = Math.max(oldCount, count)
                count = 0
            }

        }


        return Math.max(oldCount, count)
    }
}
