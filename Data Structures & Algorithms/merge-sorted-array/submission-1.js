class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let p1 = m -1;
        let p2 = n -1;
        let idx = m + n -1

        while(p2 >=0){
            if(nums1[p1] > nums2[p2]){
                nums1[idx] = nums1[p1]
                p1--
            }else{
                   nums1[idx] = nums2[p2]
                p2--
            }

            idx--
        }
   


// [10,20,20,40,0,0] [1,2].      3, 1.  5
// [10,20,20,40,0,40] [1,2]      2, 1 4
// [10,20,20,40,20,40] [1,2].      1, 1. 3
// [10,20,20,20,20,40] [1,2].      0, 1. 2
// [10,20, 10,20,20,40] [1,2].      0, 1. 1
// [10,20, 10,20,20,40] [1,2].      -1, 1. 1
    }
}
