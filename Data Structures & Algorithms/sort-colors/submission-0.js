class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    getPivot(arr, start, end){
        let pivot = arr[start];
        let swapIdx = start;

        for(let i = start +1; i <= end; i++){
            if(arr[i]< pivot){
                swapIdx++
                [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]

            }

        }

        [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]

        return swapIdx
    }
    sortColors(nums, left =0, right = nums.length -1) {
        if(left < right){
            const pivotIdx = this.getPivot(nums, left, right)
            this.sortColors(nums, left, pivotIdx -1)
            this.sortColors(nums, pivotIdx+1, right)
        }

        return nums
    }
}
