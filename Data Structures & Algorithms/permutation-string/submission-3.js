class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) return false
        
        let countS1 = new Array(26).fill(0)
        let countS2 = new Array(26).fill(0)

        for(let i =0; i < s1.length; i++){
            const idxS1 = s1[i].charCodeAt() - 97
            const idxS2 = s2[i].charCodeAt() - 97
            countS1[idxS1]++
            countS2[idxS2]++
        }

        let matches =0;


        for(let i =0; i < countS1.length; i++){
            if(countS1[i] === countS2[i]) matches++
        }

        let l =0;
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26) return true
            const idx = s2[r].charCodeAt() - 97
            const idxL = s2[l].charCodeAt() -97
            countS2[idx]++
           

            if(countS2[idx] === countS1[idx]){
                matches++
            }else if(countS2[idx] === countS1[idx] +1){
                matches--
            }

             countS2[idxL]--

             if(countS2[idxL] === countS1[idxL]){ 
                matches++
            }else if((countS2[idxL]+1) === countS1[idxL]){
                matches--
            }

            l++

        }

        return matches === 26

    }
}
