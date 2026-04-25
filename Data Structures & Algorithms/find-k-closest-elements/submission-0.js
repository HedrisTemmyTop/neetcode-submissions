class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l =0, r = arr.length - k;

        while(l !== r){
            const mid = Math.floor((l +r)/2)
            if(x-arr[mid]  <= arr[mid+k] - x){
                r= mid
            }else{
                l = mid +1
            }
        }

        return arr.slice(l, l+k)

    }
}
