class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        let idx = prefix.length-1
        
for(let i =0; i < strs.length; i++){
const str = strs[i]

        while(str.indexOf(prefix) === -1){
            if(prefix === "") return prefix
            prefix = prefix.slice(0,idx)
            idx --
        }
    }

    return prefix

    }
}
