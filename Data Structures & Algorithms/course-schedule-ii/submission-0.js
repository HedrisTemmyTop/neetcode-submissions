class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let res = [];
  let map = new Map();
  let visited = new Set();
  let completed = new Set();

  for (let course = 0; course < numCourses; course++) {
    map.set(course, []);
  }
  for (let [a, b] of prerequisites) {
    let v = map.get(a);
    v.push(b);
    map.set(a, v);
  }

  function dfs(course) {
    if (visited.has(course)) return false;
    if (!map.get(course).length) {
      if (!completed.has(course)) {
        res.push(course);
        completed.add(course);
      }
      return true;
    }

    visited.add(course);
    let pre = map.get(course);
    for (let crs of pre) {
      if (completed.has(crs)) continue;
      if (!dfs(crs)) return false;
    }
    visited.delete(course);
    map.set(course, []);
    if (!completed.has(course)) {
      res.push(course);
      completed.add(course);
    }

    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return [];
  }

  return res;
    }
}
