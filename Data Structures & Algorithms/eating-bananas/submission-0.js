class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let l =0;
        let r = Math.max(...piles)
        let min =0;

        while(l <=r){
            const mid = l + Math.floor((r-l)/2)
            let total = 0;

            for(let i =0; i < piles.length; i++){
                total += Math.ceil(piles[i]/mid)

            }
            if(total  > h) l = mid +1
            else{
                min = mid
                r = mid -1
            }
        }

        return min
    }
}

// 1,2,3,4

// x = 1/9, 2/9, 3/9 => 1/3, 4/9
// 