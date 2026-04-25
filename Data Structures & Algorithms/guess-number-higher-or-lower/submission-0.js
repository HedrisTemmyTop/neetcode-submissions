/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1, r = n

 while(l <= r){
    const mid = l + Math.floor((r-l)/2)
    const result = guess(mid)
    if(result === 0) return mid;
    if(result === -1) r = mid -1
    else l = mid +1
 } 

    }
}
