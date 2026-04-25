class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        const p = people.sort((a, b) => a-b)

        let l =0;
        let r = people.length -1;
        let count =0;

        while(l <= r){
            const sum =  l !== r? p[l] + p[r] : p[l]
            if(sum > limit){
                count++
                r--
            }else{
                count++
                l++
                r--
            }
        }
        return count
    }
}
