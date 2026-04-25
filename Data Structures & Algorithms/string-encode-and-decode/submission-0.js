class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for(let i =0; i < strs.length; i++){
            result=  result + strs[i].length + "#"+ strs[i]
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
          // "4#neet4#code4#love3#you"
          let strs =[]

          let i =0;

         while(i < str.length){

            let j = i;

            while(str[j] !== "#"){
                j++
            }

            const length = Number(str.slice(i, j))

            const word = str.slice(j+1, length+j+1)

            strs.push(word)
            i = j + length + 1
         }
        


      


          return strs
          


    }
}
