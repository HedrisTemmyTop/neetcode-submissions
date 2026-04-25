class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */

    partition(s) {
        let res = []
             function  isPali(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
        function dfs(i=0, path =[]){
            if(i === s.length){
                res.push([...path])
                return
            }

            for(let j = i; j < s.length; j++){
                if(isPali(s, i, j)){
                    path.push(s.substring(i, j+1))
                    dfs(j+1, path)
                    path.pop()
                }
            }
      
        }
        dfs()
        return res
    }


}

