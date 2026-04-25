class FreqStack {
    constructor() {
        this.values = []
        this.freq = {}
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.values.push(val)
        this.freq[val] = (this.freq[val] || 0) +1
    }

    /**
     * @return {number}
     */
    pop() {
   

        let mostFreq = Math.max(...Object.values(this.freq));
        let i = this.values.length -1

        while(this.freq[this.values[i]] !== mostFreq){
            i--
        }

        const val = this.values.splice(i, 1)[0]

        this.freq[val]--
        return val


    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
