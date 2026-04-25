class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let bucket = new Array(26).fill(0)

        for(let i =0; i < s1.length; i++ ){
            const code = s1[i].charCodeAt() - 97
            bucket[code]++
        }
        bucket = bucket.join("-")
        let bucket2 = new Array(26).fill(0)
        let l =0;

        for(let r=0; r < s2.length; r++){
            let code = s2[r].charCodeAt() - 97
            bucket2[code]++
            if(r-l+1 === s1.length){
               if(bucket2.join("-") === bucket) return true
               code = s2[l].charCodeAt() - 97
               bucket2[code]--
               l++
            }
       
        }

        return false

    }
}


/// 