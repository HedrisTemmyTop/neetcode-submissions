class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let str of strs){
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 4#neet4#code3you
        // i =0; j = 2; len = 4
        // i = 6; j = 8; len = 4

        let i =0;
        let output = []

        while(i < str.length){
            let j = i; 
            let len = ""

            while(str[j] !== "#"){
                len += str[j]
                j++
            }
            j++
            len = Number(len)
         
            let word = str.slice(j, j + len)
            output.push(word)
            i = j + len 
 
        }

        return output
    }
}
