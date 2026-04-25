class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {

        let freq = {}

        for(let i =0; i < s.length; i++){
            // if(freq[s])
            if(freq[s[i]] !== undefined && freq[s[i]] !== t[i]) return false

            freq[s[i]] = t[i]
        }

freq = {}
        for(let i =0; i < t.length; i++){
            // if(freq[s])
            if(freq[t[i]] !== undefined && freq[t[i]] !== s[i]) return false

            freq[t[i]] = s[i]
        }


        return true
    }
}
