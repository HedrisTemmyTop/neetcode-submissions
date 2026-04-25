class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack =[]
        for(let i =0; i < tokens.length; i++){
            if(Number.isFinite(+tokens[i])){
                stack.push(+tokens[i])
            }else{
                if(stack.length === 0) continue;
                const first = stack.pop()
                const second = stack.pop()
                const operation = tokens[i]
              if(operation === '+'){
                stack.push(second+first)
              }else if(operation === '*'){
                  stack.push(first*second)
              }else if(operation === '-'){
                  stack.push(second-first)
              }else{
                  stack.push(Math.trunc(second/first))
              }
            }
        }

        return stack.pop()
        

    }
}
