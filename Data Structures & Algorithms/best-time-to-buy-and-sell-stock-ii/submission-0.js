class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 1;
         let maxProfit  =0;

        for(let i =0; i < prices.length; i ++){
            const pnl = prices[i+1] - prices[i]
            if(pnl > 0){
                maxProfit += pnl
                
            }
        }

        return maxProfit


    }
}
