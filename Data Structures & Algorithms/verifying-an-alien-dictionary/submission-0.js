class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
            let map = {}
    for(let i =0; i < order.length; i++){
        let char = order[i]
        map[char] = i 
    }

    for(let i =0; i < words.length -1; i++){
        let word1 = words[i]
        let word2 = words[i+1]
        for(let j =0; j < word1.length; j++){
            if(j === word2.length) return false
            let char1 = word1[j]
            let char2 = word2[j]
            if(map[char2] < map[char1]) return false
            else if(map[char1] < map[char2]) break
        }
    }
    return true
    }
}
