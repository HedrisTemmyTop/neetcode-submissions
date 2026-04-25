class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let freq = {}

        for(let num of nums){
            freq[num] = num
        }

        let result = 0;


        for(let num of nums){
            if(freq[num -1] === undefined){
                let i = num;
                let count = 0;

                while(freq[i] !== undefined){
                    i++
                    count++
                }

                result = Math.max(count, result)

            }
        }

        return result


    }
}
