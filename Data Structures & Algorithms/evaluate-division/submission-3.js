class Solution {
  /**
   * @param {string[][]} equations
   * @param {number[]} values
   * @param {string[][]} queries
   * @return {number[]}
   */
  calcEquation(equations, values, queries) {
    let map = new Map();

    for (let i = 0; i < equations.length; i++) {
      let [a, b] = equations[i];
      let val = values[i];
      let val1 = map.get(a) || [];
      let val2 = map.get(b) || [];

      val1.push([b, val]);
      map.set(a, val1);

      val2.push([a, 1 / val]);
      map.set(b, val2);
    }


    function dfs(numerator, denominator, visited, value) {
      // if(visited.has(numerator)) return;
      if (numerator === denominator) return value;

      visited.add(numerator);
      for (let nei of map.get(numerator)) {
        let [a, val] = nei;
        if (visited.has(a)) continue;
        let newValue = value * val;
        let result = dfs(a, denominator, visited, newValue);
        if (result !== -1) return result;
      }

      return -1;
    }

    let res = [];
    for (let [a, b] of queries) {
      if (map.has(a) && map.has(b)) {
        res.push(dfs(a, b, new Set(), 1));
      } else {
        res.push(-1);
      }
    }

    return res
  }
}
