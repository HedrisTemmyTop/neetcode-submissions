class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // 10:38

        if(nums1.length > nums2.length){
            [nums1, nums2] = [nums2, nums1]
        }
        let n = nums1.length + nums2.length
        let l = 0;
        let r = nums1.length -1
        let half = Math.floor(n/2)
        // [1, 7, 10] [1,2,3,4, 20]
        // [1,1,2,3,4,7,10, 20]
        
        while(true){
            let AIdx = l + Math.floor((r-l)/2)
            let BIdx = half - AIdx -2
            let A =  AIdx >= 0 ? nums1[AIdx] : -Infinity
            let B =  BIdx >= 0 ? nums2[BIdx] : -Infinity
            let Aright = AIdx + 1 < nums1.length ? nums1[AIdx +1] : Infinity 
            let Bright = BIdx + 1 < nums2.length ? nums2[BIdx +1] : Infinity 
            if(A <= Bright && B <= Aright){
                if(n % 2 === 0){
                    return (Math.max(A,B) + Math.min(Aright, Bright))/ 2
                }

                return Math.min(Aright, Bright)

            }else if(A > Bright) r = AIdx -1
            else l = AIdx +1
        }
    }
}
