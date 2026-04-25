class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let res = []
        let map = {
            "2": 'abc',
            "3": 'def',
            "4": 'ghi',
            "5": 'jkl',
            "6": 'mno',
            "7": 'pqrs',
            "8": 'tuv',
            "9": 'wxyz',
        }
        function backtrack(i =0, currStr = ""){
            if(currStr.length === digits.length){
               if(currStr) res.push(currStr)
                return;
            }

            for(let j =0; j < map[digits[i]].length; j++){
                currStr += map[digits[i]][j]
                backtrack(i+1, currStr)
                currStr = currStr.slice(0,-1)
            }


        }
        backtrack()
        return res

    }
}
