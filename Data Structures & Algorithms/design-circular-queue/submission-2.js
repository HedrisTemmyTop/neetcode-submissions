class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.expectedSize =k;
        this.size =0;
        this.tail = null;
        this.head = null;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.size === this.expectedSize) return false
        const newNode = new Node(value)
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode 
        }
        this.tail.next = this.head
        this.size++

        return true;

    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(!this.head)return false;
        if(this.size === 1){
            this.head = null;
            this.tail = null
        }else{
        let currHead = this.head;
        let newHead = this.head.next;
        this.tail.next = newHead;
        this.head = newHead
        currHead.next  = null;
        }
        this.size--
        return true

    }


    /**
     * @return {number}
     */
    Front() {
        return this.head ? this.head.val : -1
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.head ? this.tail.val : -1
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size ===0
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.expectedSize
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
