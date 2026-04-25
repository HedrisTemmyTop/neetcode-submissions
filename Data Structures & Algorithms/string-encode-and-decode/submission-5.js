class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(let str of strs){
            result += `${str.length}#${str}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = []
        let i =0;
        // 4#neet4#code
        /**
         * i =0;
         * j =2;
         * 4+1+1=6
         */
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++
            }
            let length = Number(str.slice(i, j))
            let word =str.slice(j+1, length +j+ 1)
            output.push(word)
            i =  length +j+ 1

        }

        return output 
    }
}
