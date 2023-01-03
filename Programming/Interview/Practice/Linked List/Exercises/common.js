class LinkedNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(headNode){
        this.head = headNode || null;
    }

    appendMultiple(itemArrays){
        let current = null;
        itemArrays.forEach((element) => {
            if(!this.head){
                this.head = new LinkedNode(element);
                current = this.head;
            } else {
                current.next = new LinkedNode(element);
                current = current.next;
            }
        })
        return this.head;
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

module.exports = {LinkedNode, LinkedList, oneNode}