class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.buildPrefix()
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let result = this.matrix[row2][col2]
        if(row1 > 0){
            result -= this.matrix[row1-1][col2]
        }
        if(col1 > 0){
            result -= this.matrix[row2][col1-1]
        }
        if(col1 > 0 && row1 > 0){
            result += this.matrix[row1-1][col1-1]
        }

        return result
    }
    buildPrefix(){
        let m = this.matrix.length;
        let n = this.matrix[0].length
        for(let i =0; i< m; i++){
            for(let j =1; j < n; j++){
                this.matrix[i][j] += this.matrix[i][j -1]
       
            }

        }



        for(let i =0; i < n; i++){
            for(let j =1; j < m; j++){
                this.matrix[j][i] +=  this.matrix[j -1][i] 
                // prefix += this.matrix[j][i]

            }
        }
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 * Input: ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
 *  1 2 3 10
 *   4 5 6 11
 *    7 8 9  12
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]

Output: [null, 8, 11, 12]

 */
