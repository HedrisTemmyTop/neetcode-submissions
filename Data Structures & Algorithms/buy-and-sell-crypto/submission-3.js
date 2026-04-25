class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // 6: 14
    maxProfit(prices) {

        let j = 0;
        let i =1;
        let max = 0;

        while(i < prices.length){
            if(prices[j] > prices[i]) j = i
            else{
                max = Math.max(max, prices[i] - prices[j])
            }
                i++

        }

        return max

    }
}


// 