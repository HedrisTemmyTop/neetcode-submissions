class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let freq = {}, l =0, count =0, r =0;


        while(r < fruits.length){
            freq[fruits[r]] = (freq[fruits[r]] || 0) + 1
        
                while(Object.keys(freq).length > 2){
                    freq[fruits[l]]--
                    if(freq[fruits[l]] === 0) delete freq[fruits[l]]
                    l++ 
                    }
            count = Math.max(r-l +1, count)
            r++
        }


        return count


    }
}
