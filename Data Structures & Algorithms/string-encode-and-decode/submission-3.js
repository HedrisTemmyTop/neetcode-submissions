class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        
        for(let str of strs){

            result += str.length + "#"+ str

        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //4#neet4#code
let output = [],
    i =0;

        while(i < str.length){
            const s = str[i]

                let j = i;
               

                while(str[j] !== "#"){
                    j++
                }
              let  length = Number(str.slice(i,j))

                output.push(str.slice(j+1, length + j + 1))
                i = length + j + 1

          }

        return output
    }
}
