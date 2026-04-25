class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        let sum = matchsticks.reduce((acc, n)=> acc+n, 0)
        let len =Math.floor(sum/4)

        matchsticks.sort((a, b) => b-a)
        if( sum%4 !== 0 || matchsticks[0] > len) return false;
        let sides = [0,0,0,0]
        function backtrack(i=0){
            if(i === matchsticks.length)  {
                // for(let v of sides){
                //     if(v !== len) return false
                // }
                return true
           }


            for(let j=0; j < 4; j++){
                if(sides[j] + matchsticks[i] <= len){
                    sides[j] += matchsticks[i]
                    if(backtrack(i+1)) return true
                    sides[j] -= matchsticks[i]
                }
                if(sides[j] === 0) break
            }

            return false
        }
        return backtrack()

    }
}
