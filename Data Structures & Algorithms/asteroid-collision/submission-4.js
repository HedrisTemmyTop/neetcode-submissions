class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack  = []
        // [2,4,]
        // 4, [2]

        for(let a of asteroids){
            if(stack.length === 0){
                stack.push(a)
          
            }else{
            const last  = stack.pop()
            if((last > 0 && a > 0) || (last < 0 )){
                stack.push(last)
                stack.push(a)
            }else{
            
            stack.push(last)
            let curr = stack.length -1
            let destroyed = false
            while(stack[curr] <= Math.abs(a) && !destroyed && curr >=0 && stack[curr] > 0){
                if(stack[curr] < Math.abs(a)){
                    stack.pop()
                    curr = stack.length -1
                }else if(stack[curr] === Math.abs(a)){
                    stack.pop()
                    destroyed = true
                }
            }

            if((stack.length === 0 && !destroyed) || stack[curr] < 0){
                stack.push(a)
            }
            }

            }



           
        }

        return stack
    }
}
