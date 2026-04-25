class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let l =0, 
            r =0;

       while(l < word.length && r < abbr.length){
        if(abbr[r] === word[l]){
            l++
            r++
        }else if(abbr[r] >= 'a' && abbr[r] <='z' ) return false
        else if(abbr[r] === '0') return false
        else{
            let len = 0;
            while(abbr[r] >= '0'  && abbr[r] <= '9' && r < abbr.length){
                len = len * 10 + Number(abbr[r])
                r++

            }

            l+= len
         
        }
       }

       return l === word.length && r === abbr.length
    }
}
