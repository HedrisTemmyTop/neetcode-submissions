class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length;
        let parent = Array.from({length: n+1}, (_, i) => i)
        let rank = new Array(n+1).fill(0)
/**
 * 
 * parent = [0,2,2,2,2]
 * rank = [0,0,1,0,0]
 */
        function union(n1, n2){
            let root1 = find(n1)
            let root2 = find(n2)
            if(root1 === root2) return false
                        
            if(rank[root1] < rank[root2]) parent[root1] = root2
            else if(rank[root2] < rank[root1]) parent[root2] = root1
            else{
                parent[root1] = root2
                rank[root2]++
            }

            return true

        }

        function find(node){
            if(parent[node] === node) return node
            
            parent[node] = find(parent[node])
            return find(parent[node])
        }

        for(let [a, b] of edges){
            if(!union(a, b)) return [a, b]
        }
    }
}
