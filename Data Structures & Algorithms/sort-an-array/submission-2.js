class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // merge(arr, start, mid, end){
    //     let left = start;
    //     let right = mid + 1;
    //     let sortedArr = []

    //     while(left <= mid && right <= end ){
    //         if(arr[left] <= arr[right]){
    //             sortedArr.push(arr[left])
    //             left++
    //         }else{
    //             sortedArr.push(arr[right])
    //             right++
    //         }
    //     }

    //     while(left <= mid ){
    //           sortedArr.push(arr[left])
    //           left++
    //     }

    //     while(right <= end ){
    //           sortedArr.push(arr[right])
    //           right++
    //     }

    //     for(let i =0; i < sortedArr.length; i++){
           
    //         arr[start + i] =  sortedArr[i] 
    //     }
         
    

    // }
    // sortArray(nums, start =0, end = nums.length -1) {

    //     if(start >= end) return nums;

    //     const middle = Math.floor((start + end)/2)

    //     this.sortArray(nums, start, middle)
    //     this.sortArray(nums, middle+1, end)

    //     this.merge(nums, start, middle, end)

    //     return nums;



    // }
    getPivotIdx(arr, start, end){
        let pivot = arr[start];
        let swapIdx = start;

        for(let i = start +1; i <= end; i++ ){
            if(arr[i] <= pivot){
                swapIdx++
                [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]
            }
        }


        [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]

        return swapIdx
    }

      sortArray(nums, left =0, right = nums.length -1) {
        if(left < right){

     const pivot = this.getPivotIdx(nums, left, right)
     this.sortArray(nums, left, pivot-1)
     this.sortArray(nums, pivot+1, right)
        }

        return nums

     





    }
}
