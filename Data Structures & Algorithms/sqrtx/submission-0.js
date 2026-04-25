class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {

        let l = 0; 
        let r =x;
        let result =0;
        

        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            let squared = mid**2
            if(squared > x) r = mid -1
            else if(squared < x){
                l = mid +1
                result = mid
            }
            else return mid
        

        }

        return result
        
    }
}
/**
 * 4
 */