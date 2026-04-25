class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let stack = []
    let res = []
    function backtrack(open, close){
        if(open === n && close ===n){
            let out = [...stack].join("")
            res.push(out)
            return;
        }
        if(open < n){
            stack.push("(")
            backtrack(open+1, close)
            stack.pop()
        }

        if(close < open){
            stack.push(")")
            backtrack(open, close+1)
            stack.pop()
        }
    }
    backtrack(0,0)
    return res
    }
}
