class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums, left =0, right = nums.length -1) {
        if(left >= right) return nums
        // if(left < right){
            const mid = Math.floor((left + right)/2)

          this.sortArray(nums,left, mid)
          this.sortArray(nums,mid+1, right)
          this.merge(nums,left, mid, right)

          return nums

        // }

        // return nums

    }


    merge(arr, start , mid, end){

        let left = start;
        let right = mid +1;
        const sortedArr =[]

        while(left <= mid && right <= end){
            if(arr[left] <= arr[right]){
                sortedArr.push(arr[left])
                left++
            }else{
                sortedArr.push(arr[right])
                right++
            }

        }


        while(left <= mid){
       sortedArr.push(arr[left])
                left++
        }

           while(right <= end){
       sortedArr.push(arr[right])
                right++
        }


        for(let i =0; i < sortedArr.length; i++){
            arr[start+i] = sortedArr[i]
        }
        
       
    }
}
