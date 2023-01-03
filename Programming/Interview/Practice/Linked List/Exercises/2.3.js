// Return Kth to Last: Find the kth to last element of a singly linked list

class LinkedNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(headNode){
        this.head = headNode;
    }
}

let oneNode = new LinkedNode(1);
let twoNode = new LinkedNode(2);
let threeNode = new LinkedNode(3);
let three2Node = new LinkedNode(3);
let three3Node = new LinkedNode(3);
let three1Node = new LinkedNode(1);
oneNode.next = twoNode;
twoNode.next = threeNode;
threeNode.next = three2Node;
three2Node.next = three3Node;
three3Node.next = three1Node;

function deleteAMiddleNode(headNode){
    
}

deleteAMiddleNode(oneNode)