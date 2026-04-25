class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        const freq = {}

        let l =0; 
        let r =0;
        let count =0;

        while(r < fruits.length){
            freq[fruits[r]] =(freq[fruits[r]] || 0) + 1

            while(Object.values(freq).length > 2){
                freq[fruits[l]]--
                if(freq[fruits[l]] ===0) delete freq[fruits[l]]
                l++
            }

            count = Math.max(r-l+1, count)
            r++

        }
        return count
    }
}
