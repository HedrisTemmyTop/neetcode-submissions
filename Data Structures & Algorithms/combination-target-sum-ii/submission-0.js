class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        candidates.sort((a, b)=>a-b)
        let res = []

        function backtrack(i, remaining, subset){
            if(remaining < 0) return
            if(i === candidates.length){
                if(remaining === 0){
                    res.push([...subset])
                }
                return
            }

            subset.push(candidates[i])
            backtrack(i+1, remaining-candidates[i], subset)
            let idx = i+1;
            while(idx < candidates.length && candidates[idx] === candidates[i]){
                 idx++
            }
 
            subset.pop()
            backtrack(idx, remaining, subset)
        }
        backtrack(0, target, [])
        return res
    }
}

