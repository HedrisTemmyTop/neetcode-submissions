class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let result = ""



        for(let i =0; i < strs[0].length; i++){

            for(const str of strs){
                if(i ===str.length || str[i] !== strs[0][i]){
                    return result
                }

             
            }
               result+= strs[0][i]
        }

        return result
    }
}
