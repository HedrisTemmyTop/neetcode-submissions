class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = []
        function backtrack(i, path){
            if(i === n+1){
                if(path.length === k){
                    res.push([...path])
                }
                return
            }
            path.push(i)
            backtrack(i+1, path)
            path.pop()
            backtrack(i+1, path)

        }
        backtrack(1, [])
        return res
    }
}
