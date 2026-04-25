class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {

        const p = people.sort((a, b) => a-b)

        let l =0,
            r =p.length -1,
            count = 0;

            while(l <= r){
                if(p[l] + p[r] <= limit){
                    l++
                    r--
                }else{
                    r --

                }

                count++
            }



return count 
    }
}


//  [5,1,4,2] ===> [1,2,4,5]
// [1,3,2,3,2], ===> [1,2,2,3,3]