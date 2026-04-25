class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let visited = new Set()
        let rows = grid.length;
        let cols = grid[0].length;
        let c = false
        let islands = 0;

        function dfs(i, j){
            if(i < 0 || j < 0 || i==rows|| j ==cols || grid[i][j] == "0")return;

            let key = `${i}-#-${j}`
            if(visited.has(key)) return
            visited.add(key)
            dfs(i, j+1)
            dfs(i, j-1)
            dfs(i+1, j)
            dfs(i-1, j)
            c = true
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === '1'){
                dfs(i, j)
                if(c) {
                    islands++
                    c = false
                }
            }
        }
    }
    return islands
    }
}
