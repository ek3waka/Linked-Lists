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
        checkNode(this.list)
        function checkNode(node) {
            if (node.next === null) {
                node.next = new Node(value)
            } else {
                checkNode(node.next)
            }
        }
    }
    prepend(value) {
        let firstNode = new Node(value)
        firstNode.next = this.list
        this.list = firstNode
        return this.list

    }

    size() {
        let size = 1
        count(this.list.next)
        function count(node) {
            if (node !== null) {
                size++
                count(node.next)
            }
        }
        return console.log(size)
    }

    head() {
        return console.log(`Value: ${this.list.value}`, `Next: ${this.list.next}`)
    }

    tail() {
        let tail
        findTail(this.list)
        function findTail(node) {
            if (node.next === null) {
                tail = node
            } else {
                findTail(node.next)
            }
        }
        return console.log(tail)
    }

    at(index) {
        let node = this.list.next
        if (index == 1) {
            return console.log(this.list)
        }
        for (let i=1; i<index; i++) {
            if (node) {
                if (i == index-1) {
                    return console.log(node)
                }
                else {
                    node = node.next
                }
            }        
            else {
               return console.log('Node does not exist')
            }
    }}

    pop() {
        if (this.list.next) {
            deleteTail(this.list)
            function deleteTail(node) {
                if (node.next.next === null) {
                    node.next = null
                } else {
                    deleteTail(node.next)
                }
            }
        } 
        
    }

    contains(value) {
        let result = false
        findNode(this.list)
        function findNode(node) {
            if (node) {
                if (node.value === value) {
                    return result = true
                }
                else {
                    findNode(node.next)
                }
            }
            
        }
        return console.log(result)
    
    }

    find(value) {
        let index = 0
        findNode(this.list)
        function findNode(node) {
                index++
                if (!node) {
                    return console.log('Not found')
                }
                if (node.value === value) {
                    return console.log(index)
                }
                else {
                    findNode(node.next)
                }
        }
        
    }

    toString() {
        let string = ''
        stringify(this.list)
        function stringify(node) {
            if (node.next !== null) {
                string += `( ${node.value} ) -> `
                stringify(node.next)
            }
            else {
                string += `( ${node.value} ) -> null`
            }
        }
        return console.log(string)
    }

    insertAt(value, index) {
        let node = this.list
        if (index == 1) {
            let firstNode = new Node(value)
            firstNode.next = this.list
            this.list = firstNode
            
        }
        for (let i=1; i<index; i++) {
            if (node) {
                if (i == index-1) {
                    let newNode = new Node(value)
                    newNode.next = node.next
                    node.next = newNode
                    return node
                }
                else {
                    node = node.next
                }
            }        
            else node.tail()
        }
    }
    
    removeAt(index) {
        let node = this.list
        if (index == 1) {
            this.list.value = this.list.next.value
            this.list.next = this.list.next.next
            
        }
        for (let i=1; i<index; i++) {
            if (node) {
                if (i == index-1) {
                    if (node.next) {
                        node.next = node.next.next
                    } else {
                        return console.log('Node does not exist')
                    }
                
                    
                }
                else {
                    node = node.next
                }
            } else  return console.log('Node does not exist')
            //return console.log('Node does not exist')
        }
    }
}




export {LinkedList}