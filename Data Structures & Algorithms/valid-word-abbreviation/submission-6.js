class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
 let l = 0,
    r = 0;

  while (r < abbr.length && l < word.length) {
    console.log(l, r);
    if (word[l] === abbr[r]) {
      l++;
      r++;
    } else {
      let length = abbr[r];
      console.log(length);
        if (length === "0") return false;


      r++;
      while (this.isNumber(Number(abbr[r]))) {
        length += abbr[r];
        r++;
      }
      length = Number(length);
      console.log(length);

      if (!this.isNumber(length)) return false;
      l += length;
    }
  }
  if (l > word.length || r < abbr.length) return false;

  return true;

    }

    isNumber(value) {
         return typeof value === 'number' && !isNaN(value);
    }
}
