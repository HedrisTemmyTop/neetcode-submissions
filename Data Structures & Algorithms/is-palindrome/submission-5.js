class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
      let p1 = 0;
  let p2 = str.length - 1;

  while (p2 > p1) {
    const str1SmallCap = str[p1].toLowerCase();
    const str2SmallCap = str[p2].toLowerCase();
    if (!this.isAlphanumeric(str1SmallCap)) p1++;
    else if (!this.isAlphanumeric(str2SmallCap)) p2--;
    else if (str1SmallCap === str2SmallCap) {
      p1++;
      p2--;
    } else  return false;
    
  }

  return true }


    isAlphanumeric(s){
        const str = s.charCodeAt() 
        return (str - 96 > 0 && str - 96 <= 26) || (str - 48 >= 0 && str - 48 <= 9);
    }
}
