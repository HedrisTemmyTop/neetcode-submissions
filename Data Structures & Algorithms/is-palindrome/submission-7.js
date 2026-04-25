class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l =0;
        let r =s.length -1;

        while(l <= r){
            if(s[l].toLowerCase() === s[r].toLowerCase()){
                l++
                r--
            }else if(!this.isAlphanumeric(s[l].toLowerCase()) || s[l] === ' '){
                l++
            }else if(!this.isAlphanumeric(s[r].toLowerCase()) || s[r] === ' '){
                r--
            }else{
                return false
            }

        }

        return true
    }


    isAlphanumeric(s){

        return s >= 'a' && s <= 'z' || s >= '0' && s <= '9'
    }
}
