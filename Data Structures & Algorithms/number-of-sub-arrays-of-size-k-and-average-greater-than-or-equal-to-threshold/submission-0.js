class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let tempSum = 0;
        let count =0;

        for(let i =0; i < k; i++){
            tempSum+= arr[i]
        }
       if(tempSum / k >= threshold) count++

       let l =0;

       for(let i =k; i < arr.length; i++){
        tempSum -= arr[l]
        tempSum+= arr[i]
        if(tempSum / k >= threshold) count++
        l++
       }


       return count
    }
}
