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
   
          if(row1 > 0 && col1> 0){
             result += this.matrix[row1-1][col1-1] 
          }
        if(row1>0){

           
            result -= this.matrix[row1-1][col2]

        }

        if(col1 > 0){
            result -= this.matrix[row2][col1 -1]
        }

      

        return result;
    }

    buildPrefix(){
        for(let i =0; i < this.matrix.length; i++){
            for(let j =0; j< this.matrix[0].length; j++){
                this.matrix[i][j]+= this.matrix[i][j-1] ||0
            }
        }

         for(let i =0; i < this.matrix.length; i++){
            for(let j =0; j< this.matrix[0].length; j++){
                this.matrix[i][j]+= this.matrix[i-1]? this.matrix[i -1][j] :0
            }
        }
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
