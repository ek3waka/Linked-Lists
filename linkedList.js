import { Node } from "./linkedListNode.js"

class LinkedList {
    constructor(value) {
        this.list = {
                    value: value,
                    next: null,
                    //tail: null,
                    }
    }
    append(value) {
        check(this.list.next)
        //должно работать, но не работает
        function check(next) {
            if (next == null) {
                const node = new Node(value)
                //здесь не видит list
                next = node
            }
            else check(next.next)
        }
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