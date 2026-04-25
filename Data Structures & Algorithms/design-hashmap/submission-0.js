class MyHashMap {
    constructor() {
        this.data =  new Array(10**6).fill(null)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.data[key] =[key, value]
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if(!this.data[key]) return -1
        return this.data[key][1] 
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.data[key] = null
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
