class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let sum =0;
        let l =0;
        let r =0;
        let count =0;

        while(r < arr.length){
            if(r-l  === k){
               let avg = sum / k
               if(avg >= threshold) count++
                sum-= arr[l]
                l++
            }
            sum+= arr[r]
            r++
        }

       
        if(sum/k >= threshold) count++

        return count
    }
}
