class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let p1 =0, p2 =0, result = '';

        while(p1 < word1.length && p2<word2.length){
            if(p1 === p2){
                result += word1[p1]
                p1++
            }else{
                result += word2[p2]
                p2++
            }
        }

        while(p1 < word1.length){
        result += word1[p1]
        p1++      
        }
        while(p2 < word2.length){
        result += word2[p2]
        p2++      
        }

        return result 
    }
}
