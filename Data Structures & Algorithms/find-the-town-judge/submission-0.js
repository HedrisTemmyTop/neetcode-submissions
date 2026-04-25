class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let inw = {}
        let out = {}

        for(let t of trust){
            let [a, b] = t
            out[a] = (out[a] || 0 ) +1
            inw[b] = (inw[b] || 0) + 1
        }

        for(let inc in inw){

            if(inw[inc] === n-1 && !out[inc]) return +inc 
        }
        return -1
    }
}
