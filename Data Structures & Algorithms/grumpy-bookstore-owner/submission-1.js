class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let l = 0;
        let total = 0;
        let sum =0;
        let mSum =0;

        for(let r =0; r < customers.length; r++){
           if(!grumpy[r]) total += customers[r]
            if(grumpy[r]) mSum += customers[r]
           if((r-l + 1) === minutes){
            sum = Math.max(sum, mSum)
            if(grumpy[l]) mSum -= customers[l]
            l++
           }
         
        }

        return total + sum;



        
    }
}
// 0, 2,1,5