class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let idx = m + n -1; let p1 = m -1; let p2 = n -1;

        while(p2 >= 0){
            if(nums1[p1] > nums2[p2]){
                nums1[idx] = nums1[p1]
                // [nums1[p1], nums1[idx]] = [nums1[idx], nums1[p1]]
                p1--
            }else{
                nums1[idx] = nums2[p2]
                // [nums2[p2], nums1[idx]] = [nums1[idx], nums2[p2]]
                p2--

            }

            idx--
        }
    }
}

// [1,2,10,20,20,40]
// 