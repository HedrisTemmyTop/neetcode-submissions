class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = []

        for(let c of s){
            if(c === ']'){
                let str = ''
                while(stack[stack.length -1] !== '['){
                 str  =   stack.pop() + str
                }
                stack.pop()
                let n = ''
                while(stack.length > 0 &&Number.isFinite(+stack[stack.length -1])){
                    n = stack.pop() + n
                }
                str =str.repeat(Number(n))
            stack.push(str)
            }else{
                stack.push(c)
            }
        }

        return stack.join("")
    }
}
