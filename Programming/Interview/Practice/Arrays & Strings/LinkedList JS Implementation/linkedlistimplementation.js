// In JS, a linkedlist object looks like the below linkedListObject:

let linkedListObject = {
    head: {
        value: 6,
        next: {
            value: 12,
            next: {
                value : 1,
                next: {
                    value : 100,
                    next: null
                }
            }
        }
    }
}

class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
}

// Generate A Linked List:
var listNode1 = new ListNode(1);
var listNode2 = new ListNode(4);
listNode1.next = listNode2;
var newLinkedList = new LinkedList(listNode1);