class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map()
        this.head = new Node()
        this.tail = new Node()
        this.tail.prev = this.head;
        this.head.next = this.tail;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1
        let node = this.cache.get(key);
        this._removeNode(node)
        this._addToFront(node)
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            let node = this.cache.get(key)
            node.value = value
            this._removeNode(node)
            this._addToFront(node)
            return;
        }

        let newNode = new Node(key, value)
        this._addToFront(newNode)
        this.cache.set(key, newNode)
        if(this.cache.size > this.capacity){
            let lru = this.tail.prev;
            this.tail.prev = lru.prev;
            this._removeNode(lru)
            this.cache.delete(lru.key)
        }
    }

    _addToFront(node){
        let prevNextNodeToHead = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = prevNextNodeToHead;
        prevNextNodeToHead.prev = node;
    }
    _removeNode(node){
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

}




class Node{
    constructor(key=0, value=0){
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
