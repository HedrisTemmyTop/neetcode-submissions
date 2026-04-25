class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {


        // start ur window at zero
        // for each i, check if it's the smallest you've seen, if it is, set smallest to i
        // else leave smallest
        // after getting i, ur window starts, look for max value to the right of i
        let l = 0,
            r = 1,
            maxP = 0;

            while(r < prices.length){
              maxP = Math.max(prices[r]-prices[l], maxP)
              if(prices[l] > prices[r]){
                l = r
              }  
                r++

            }
        return maxP
    
    }
}
