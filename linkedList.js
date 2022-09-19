import { Node } from "./linkedListNode.js"

class LinkedList {
    constructor(value) {
        this.list = {
                    value: value,
                    next: null,
                    tail: null,
                    }
    }
    append(value) {
        const nextNode = new Node(value)
        this.list.next = nextNode
        this.list.tail = nextNode
    }
    prepend(value) {

    }

    size() {

    }

    head() {
        
    }

    tail() {
        return this.list.tail
    }

    at(index) {

    }

    pop() {

    }

    contains(value) {

    }

    find(value) {

    }

    toString() {

    }

    insertAt(value, index) {

    }
    
    removeAt(index) {

    }
}




export {LinkedList}