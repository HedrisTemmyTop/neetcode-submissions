class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let max = -1

        for(let i = arr.length -1; i >=0; i--){
         
                let oldMax = max
            max = Math.max(max, arr[i])
                arr[i] = oldMax
            



        }
        /**
         * [5,5,3,2,2,-1]
         * [3,-1]
         * 
         */


        return arr;
    }
}
