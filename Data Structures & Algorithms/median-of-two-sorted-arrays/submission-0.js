class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        let n = A.length + B.length;
        let half =  Math.floor(n/2)
        if(A.length > B.length){
            A = nums2;
            B = nums1
        }
        let l =0;
        let r = A.length -1;


        while(true){
            let AleftIdx =  l + Math.floor((r-l)/2)
            let BleftIdx = half - AleftIdx - 2;

            let Aleft =AleftIdx >= 0  ? A[AleftIdx] : -Infinity;
            let Bleft =BleftIdx >= 0 ? B[BleftIdx] : -Infinity;
            let Aright = AleftIdx +1 < A.length ? A[AleftIdx+1] : Infinity;
            let Bright = BleftIdx +1 < B.length ? B[BleftIdx+1] : Infinity;
            if(Aleft <= Bright && Bleft <= Aright){
                if(n % 2 === 1) return  Math.min(Bright, Aright)
                return (Math.min(Bright, Aright) + Math.max(Aleft, Bleft))/2
            }else if(Bleft > Aleft) l = AleftIdx +1
            else r = AleftIdx -1;

        }
   

    
    }
}
