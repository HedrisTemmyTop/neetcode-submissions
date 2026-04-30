class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let map = new Map()
        let visited = new Set()
        let count =0;

        for(let node =0; node < n; node++){
            map.set(node, [])
        }
        for(let [a, b] of edges){
            map.set(a,[...map.get(a), b])
            map.set(b,[...map.get(b), a])
        }

        function dfs(node){
            if(visited.has(node)) return
            visited.add(node)
            for(let nei of map.get(node)){
                dfs(nei)
            }
            return;
        }
        console.log(map)

        for(let node =0; node < n; node++){
            if(visited.has(node)) continue
            dfs(node)
            count++
        }

        return count;
    }
}
