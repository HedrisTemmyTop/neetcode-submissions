class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {

        let freq = {}

        for(let num of arr){
            freq[num] = (freq[num] || 0) + 1
         }

         let largest = -1;


         for(let key in freq){
            if(+key === freq[key]){
                largest = Math.max(largest, +key)
            }

         }

         return largest
    }
}
