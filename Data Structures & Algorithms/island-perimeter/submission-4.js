class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let visit = new Set()
        let n = grid.length
        let cols = grid[0].length

            function dfs(i, j){
                if(i < 0 || j < 0 || i ==n || j == cols || !grid[i][j]) return 1
                let key = `${i}-${j}`
                if(visit.has(key)) return 0

                visit.add(key)
                let perimeter = dfs(i, j+1)
                perimeter += dfs(i+1, j)
                perimeter += dfs(i, j-1)
                perimeter += dfs(i-1, j)

                return perimeter

            }
            for(let i =0; i < n; i++){
                for(let j =0; j < cols; j++){
                    if(grid[i][j]) return dfs(i, j)
                }
            }
            return 0
        
    }
}
