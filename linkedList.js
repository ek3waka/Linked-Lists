import { Node } from "./linkedListNode.js"

class LinkedList {
    constructor() {
        this.list = {

                    }
    }
    createFirstNode(value) {
        if (!this.list.value) {
            this.list.value = value
            this.list.next = null
        }
    }
    append(value) {
        check(this.list.next)
        
        function check(next) {
            
            if (next === null) {
                next = new Node(value)
                
                ///next не относится к листу
                return next
            }
            else {
                check(next.next) 
            }
            
        }
        //рекурсия работает, но как прицепить новый узел

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