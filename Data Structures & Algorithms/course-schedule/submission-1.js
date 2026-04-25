class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
     let map = {}
    let v = new Set()

    for (let [a, b] of prerequisites) {
        if (!map[a]) map[a] = []
        map[a].push(b)
    }

    function dfs(key) {
        if (v.has(key)) return false;
        if (!map[key] || map[key].length === 0) return true
        v.add(key)
        let nei = map[key]
        for (let n of nei) {
            if (!dfs(n)) return false
        }
        v.delete(key)
        map[key] = []
        return true
    }

    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) return false
    }
    return true
}
}
