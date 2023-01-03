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

function findkth(headNode, k){
    let order = 0;
    let iterateItem = headNode;
    while(iterateItem != null){
        if(k == order){
            console.log(JSON.stringify(iterateItem));
            return iterateItem;
        } else {
            iterateItem = iterateItem.next;
            order++;
        }
    }
}

function findkthtolastelement(headNode, k){
    if(headNode == null){
        return 0;
    }
    let index = findkthtolastelement(headNode.next, k) + 1;
    if(index == k){
        console.log(headNode.data);
        return;
    }
    return index;
}

function findkthtolastelementClever(headNode, k){
    let p1 = headNode;
    let p2 = headNode;
    for(let i = 0; i < k; i++){
        if(p2 == null) return;
        p2 = p2.next;
    }
    while(p2 != null){
        p2 = p2.next;
        p1 = p1.next;
    }
    console.log(p1.data);
    return p1.data;
}

//findkthtolastelement(oneNode, 3);
findkthtolastelementClever(oneNode, 3)