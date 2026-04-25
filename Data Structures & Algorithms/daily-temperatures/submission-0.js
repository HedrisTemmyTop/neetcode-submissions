class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []

        for(let i =0; i < temperatures.length; i++){
            const temp = temperatures[i]
            
            while(stack.length > 0 && stack[stack.length-1][1] < temp){
                const [idx, tempVal] = stack.pop()
                result[idx] = i - idx
            }

            stack.push([i, temp])
        }

        return result;
//  [30,38,30,36,35,40,28]
    }
}
