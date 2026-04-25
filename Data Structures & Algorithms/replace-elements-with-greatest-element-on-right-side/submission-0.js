class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let max = arr[arr.length-1]

        for(let i = arr.length -1; i >=0; i--){
            if(i === arr.length -1){
                arr[i] = -1
            }else{
                let oldMax = max
            max = Math.max(max, arr[i])
                arr[i] = oldMax
            }



        }
        /**
         * [5,5,3,2,2,-1]
         * [3,-1]
         * 
         */


        return arr;
    }
}
