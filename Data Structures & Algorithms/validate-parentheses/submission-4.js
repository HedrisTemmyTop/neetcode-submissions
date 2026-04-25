class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        const stack =[]

        for(let i =0; i < s.length; i++){
            if(map[s[i]]){
                if(stack.length > 0){
                    const val = stack.pop()
                    if(val !== map[s[i]]) return false
                }else{
                    return false
                }


            }else{
                stack.push(s[i])
            }
        }

        return stack.length ===0
    }
}
