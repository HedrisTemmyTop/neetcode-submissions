class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
if(s.length !== t.length) return false
        const frequencyCount1 ={}
        const frequencyCount2 ={}


        for(let i = 0; i< s.length; i++){
         frequencyCount1[s[i]] =  (frequencyCount1[s[i]] || 0) + 1
         
           frequencyCount2[t[i]] = (frequencyCount2[t[i]] || 0) + 1
        
        }

        for(const key in frequencyCount1){
            if(frequencyCount1[key] !== frequencyCount2[key]) return false
        }


        return true
    }
}
