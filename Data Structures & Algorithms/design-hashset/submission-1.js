class MyHashSet {
    constructor() {
        this.keyMap = {}
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.keyMap[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.keyMap[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {

        return !!this.keyMap[key]

    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
