class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pac = new Set()
        const atl = new Set()
        let rows = heights.length;
        let cols = heights[0].length;

        function dfs(r, c, v, prevHeight){
            let key = `${r}-${c}`
            if(r < 0 || r == rows || c < 0 || c == cols || v.has(key) || heights[r][c] < prevHeight) return;

            v.add(key)
            dfs(r+1, c, v, heights[r][c])
            dfs(r-1, c, v, heights[r][c])
            dfs(r, c-1, v, heights[r][c])
            dfs(r, c+1, v, heights[r][c])
        }

        for(let c = 0; c < cols; c++){
            dfs(0, c, pac, heights[0][c])
            dfs(rows-1, c, atl, heights[rows-1][c])
        }
        for(let r = 0; r < rows; r++){
            dfs(r, 0, pac, heights[r][0])
            dfs(r, cols-1, atl, heights[r][cols-1])
        }

        let res = []

        for(let r =0; r < rows; r++){
            for(let c =0; c < cols; c++){
                let key = `${r}-${c}`
                if(pac.has(key) && atl.has(key)) res.push([r, c]) 
            }
        }
        return res
    }
}
  