class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {

        const p = people.sort((a, b) => a -b)
        

        let l = 0;
        let r = p.length -1
        let count =0;

        while(l <= r){
            let sum = p[l] + p[r]
            if(sum <= limit){
                l++;
                r--


            }else{
                r--
            }

            count++
        }

        return count
    }
}




// 1,1,1 1,1,2,3,3

