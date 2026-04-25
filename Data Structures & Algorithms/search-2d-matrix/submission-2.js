class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows =matrix.length;
        let cols =matrix[0].length;

        let l =0;
        let r = rows * cols -1

        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            let row = Math.floor(mid/cols)
            let col = mid%cols
            if(matrix[row][col] < target) l = mid+1
            else if(matrix[row][col] > target) r= mid-1
            else return true

        }

        return false
    }
}


/**
 * [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
 */