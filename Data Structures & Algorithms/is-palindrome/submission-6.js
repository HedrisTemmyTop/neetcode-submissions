class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0,
           r = s.length -1;


           while(l < r){

            if(!this.isAlphanumeric(s[l]) || s[l] === ''){
                l++
            }else if(!this.isAlphanumeric(s[r]) || s[r]===''){
            r--
            
           }else if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false

           }else{
   l++
           r--
           }

        
    }

    return true
    }

    isAlphanumeric(s){
        return (s >= "a" && s <="z") ||  (s >= "A" && s <="Z") || (s >= "0" && s <="9")
    }
}
