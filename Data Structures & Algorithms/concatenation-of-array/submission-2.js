class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const output = []

        for(let i =0; i < 2; i++){
            for(let num of nums){
                output.push(num)
            }
        }

        return output
    }
}
