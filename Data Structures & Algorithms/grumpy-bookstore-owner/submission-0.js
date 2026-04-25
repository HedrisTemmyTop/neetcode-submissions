class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let satisfied =0, max =0, window =0, l =0;

        for(let r =0; r < customers.length; r++){
            if(!grumpy[r]){
                satisfied += customers[r]
            }else{
                window += customers[r]
            }


            if(r -l + 1 > minutes){
                if(grumpy[l]) window -= customers[l]
                l++
            }

            max = Math.max(window, max)
        }



        return satisfied + max
    }
}
/**
 * 
 * l =0; w = 0; s = 2
 * l =0; w = 12; s = 2 max = 12
 * l =1; w = 21; s = 2 max = 12
 * customers = [2, 6, 6, 9]
   grumpy    = [0, 1, 1, 1]
   minutes   = 2

 */