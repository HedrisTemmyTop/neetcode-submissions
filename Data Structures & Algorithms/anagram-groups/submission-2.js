class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

    
      const count = {};
  for (const str of strs) {
    const asci = Array.from({ length: 26 }, () => 0);

    for (const char of str) {
      const charCode = char.charCodeAt(0) - 97;

      asci[charCode]++;
    }

    const key = asci.join("-");

    if (!count[key]) count[key] = [];

    count[key].push(str);
  }
  return Object.values(count);
}
}