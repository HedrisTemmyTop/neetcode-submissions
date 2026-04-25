class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {

        let p2 = s.length -1
        let p1 = 0;
        while(p2 > p1){
            [s[p2] ,s[p1]] =   [s[p1] ,s[p2]]
            p2--
            p1++

        }

return s
        // t, 2,1
        //te, 1, 2
        //tee, 0,3
        //teen -1, 4


        

    
    }
}
