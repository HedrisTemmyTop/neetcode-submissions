class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
    
    let p1 = 0;
    let p2 = s.length - 1;

    while (p2 > p1) {
        if(s[p1] !== s[p2]) return this.isPalindrome(s, p1 +1, p2) || this.isPalindrome(s, p1, p2-1)
        p1++
        p2--
   
    }

    return true;
  }


isPalindrome(s, l, r){

    while(r > l){
        if(s[l] !== s[r]) return false
        l++
        r--

    }


    return true
}
}
