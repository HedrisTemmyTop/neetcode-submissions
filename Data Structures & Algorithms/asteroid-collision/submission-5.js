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
            let destroyed = false
            while(stack.length > 0 && stack[stack.length - 1] > 0 && a < 0 && !destroyed){
                const last = stack[stack.length -1]
                if(last < (-1 * a)){
                    stack.pop()
                    continue;
                }
                if(last === (-1 * a)){
                    stack.pop()
                }
                
                destroyed = true
            }

            if(!destroyed){
                stack.push(a)
            }
            

            



           
        }

        return stack
    }
}
