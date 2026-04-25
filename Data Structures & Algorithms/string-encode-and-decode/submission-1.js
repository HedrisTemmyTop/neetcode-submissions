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

            // if(!isNaN(Number(s))){
                let start = i +1;
                let length = s

                while(str[start] !== "#"){
                    length += str[start]
                    start++
                }
                length = Number(length)

                output.push(str.slice(start+1, length + start + 1))
                i = length + start + 1

            // }
        }

        return output
    }
}
