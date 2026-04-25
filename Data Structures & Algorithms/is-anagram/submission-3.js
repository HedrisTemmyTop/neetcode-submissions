class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const freq = {}

        for(let str of s){
            freq[str] = (freq[str] || 0) + 1
        }

        for(let str of t){
            if(!freq[str]) return false
             freq[str]--
        }

        return true
    }
}
