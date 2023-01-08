import { LinkedList } from "./linkedList.js"
import { Node } from "./linkedListNode.js"

const linkedList = new LinkedList()
linkedList.createFirstNode(123)
linkedList.list.next = new Node(34232423423)
linkedList.list.next.next = new Node('qdsads')
linkedList.list.next.next.next = new Node('58')
linkedList.append(4566)
console.log(linkedList)
/* list.append(12)
list.append(5435435)
list.append('dfsdfdsf') */
/* list.tail() */






/* console.log(list.tail()) */
