class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i)=> [p, speed[i]])
        pair.sort((a, b) => a[0]-b[0])
        const stack = []
        

        for(let i =pair.length -1; i >=0; i--){
            const time =(target - pair[i][0])/pair[i][1]
        
            if(stack.length ===0) stack.push(time)
            else{
                if(stack[stack.length-1] < time) stack.push(time)
            }
        }

        return stack.length
    }
}
