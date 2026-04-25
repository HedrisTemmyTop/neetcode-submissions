class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        for(let s of strs){
            result+= s.length + "#" + s
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i =0;
        let output = []

        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++
            }

            let length = Number(str.slice(i, j))
            output.push(str.slice(j+1, length + j +1))
            i = length + j + 1

        }

        return output
    }
}
