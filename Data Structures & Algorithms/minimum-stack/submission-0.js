class MinStack {
    constructor() {
        this.values =[];
        this.min = null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.min > val || this.min === null) this.min = val
        this.values.push(val)
    }

    /**
     * @return {void}
     */
    pop() {

      const val =   this.values.pop()
      if(this.min !== val) return val
      if(this.values.length ===0){
         this.min =null;
         return val
      }

     let min =Infinity;
     let r =0;


      while(r < this.values.length){
        if(min > this.values[r]) min = this.values[r]
        r++
      }
      this.min = min;
      return val
    }

    /**
     * @return {number}
     */
    top() {
        return this.values[this.values.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
