class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums, left =0, right = nums.length -1) {
        if(left < right){
        const mid = Math.floor((left + right) /2)
        this.sortArray(nums, left, mid)
        this.sortArray(nums, mid+1, right)
        this.merge(nums, left, mid, right)
        return nums


        }

        return nums
    }


    merge(arr,start, mid, end){
        let l =start, 
            r = mid + 1,
            sortedArr = [];

            while(l <= mid && r <= end){
                if(arr[l] < arr[r]){
                    sortedArr.push(arr[l]);
                    l++
                }else{
                    sortedArr.push(arr[r])
                    r++
                }
            }
            while(l <= mid){
                sortedArr.push(arr[l])
                l++
            }
            while(r <= end){
                sortedArr.push(arr[r])
                r++
            }

            for(let i =0; i < sortedArr.length; i++){
                arr[i+start] = sortedArr[i]

            }
             
    }
}
// [1,2,10,4,5,6]

//1,2,4,5,6,10