class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = []
        let sum =0;

        for(let i =0; i < operations.length; i ++){
            if(operations[i] === '+'){
                const firstNum = stack.pop()
                const secondNum = stack.pop()
                stack.push(secondNum)
                stack.push(firstNum)
                stack.push(firstNum + secondNum)
                sum += firstNum + secondNum

            }else if(operations[i] === 'D'){
                const prev = stack.pop()
                const newScore = prev * 2;
                stack.push(prev)
                stack.push(newScore)
                sum += newScore

            }else if(operations[i] === 'C'){
             const val =   stack.pop()
             sum -= val


            }else{
                stack.push(Number(operations[i]))
                sum +=  Number(operations[i])
            }
        }


        return sum


    }
}
