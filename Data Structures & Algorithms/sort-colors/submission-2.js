class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const frequencyArr = [0,0,0]

        for(let i = 0; i < nums.length; i++){
            frequencyArr[nums[i]]++
        }
        

       let id =0;

        for(let i =0; i <= 2; i++){
            while(frequencyArr[i] >0){
                nums[id] = i
                id++
                frequencyArr[i]--
            }
        }

        return nums;
    }
}
