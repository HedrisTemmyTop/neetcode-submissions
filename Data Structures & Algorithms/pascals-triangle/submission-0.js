class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {

        let output = Array.from({length: numRows}, ()=> []);

        for(let i =0;  i < numRows; i ++){
            if(i === 0) {
               output[i].push(1)
               continue
              }
            for(let j =0; j <= i; j++){
             
                if(j === 0 || j ===i){
                    output[i].push(1)
                }else{

                output[i].push(output[i -1][j] + output[i-1][j-1])
                }
            }
        }

        return output
    }
}
