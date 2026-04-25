class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let count = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        let max  = 0;
        
        function dfs(i, j){
            if(i < 0 || i == rows || j < 0 || j == cols || !grid[i][j]) return;

            grid[i][j] = 0;
            count++
            dfs(i, j+1)
            dfs(i, j-1)
            dfs(i+1, j)
            dfs(i-1, j)
        }

        for(let i =0; i < rows; i++){
            for(let j =0; j < cols; j++){
                if(grid[i][j]){
                    dfs(i, j)
                    max = Math.max(max, count)
                    count = 0
                }
            }
        }

        return max
    }
}
