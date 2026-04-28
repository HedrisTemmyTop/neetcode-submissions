class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
 checkIfPrerequisite(numCourses, prerequisites, queries) {
    let map = new Map()

    let res = []
    for (let c = 0; c < numCourses; c++) {
        map.set(c, new Set())
    }

    for (let [a, b] of prerequisites) {
        let crs = map.get(b)
        crs.add(a)
        map.set(b, crs)
    }

    let allPreReq = new Map()
    
    function dfs(course){
        if(allPreReq.get(course)) return allPreReq.get(course);

        let result = new Set()
        for(let crs of [...map.get(course)]){
            result.add(crs)
            let preReq = dfs(crs)
            for(let c of preReq){
                    result.add(c)
            }
        }
        allPreReq.set(course, result)
        return result
    }
    
    for(let c =0; c < numCourses; c++){
        dfs(c)
    }

    for(let [a, b] of queries){
        res.push(allPreReq.get(b).has(a))
    }
    return res

 }


}

// 0: [1]
// 1: [2]
// 2: [3]
