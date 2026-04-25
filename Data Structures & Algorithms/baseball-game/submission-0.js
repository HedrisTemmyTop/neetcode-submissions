class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = []

        for(let i =0; i < operations.length; i ++){
            if(operations[i] === '+'){
                const firstNum = stack.pop()
                const secondNum = stack.pop()
                const sum = firstNum + secondNum
                stack.push(secondNum)
                stack.push(firstNum)
                stack.push(sum)

            }else if(operations[i] === 'D'){
                const prev = stack.pop()
                const newScore = prev * 2;
                stack.push(prev)
                stack.push(newScore)

            }else if(operations[i] === 'C'){
                stack.pop()

            }else{
                stack.push(Number(operations[i]))
            }
        }

        let sum =0;
        for(let i =0; i < stack.length; i++){
            sum += stack[i]
        }

        return sum
    }
}
