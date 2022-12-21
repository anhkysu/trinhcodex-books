// Remove Dups: Write  code to  remove  duplicates from  an  unsorted  linked  list.
// FOLLOW UP
// How would  you  solve this problem  if a  temporary  buffer is  not  allowed?

class SinglyNode {
    next: SinglyNode;
    data: number;

    constructor(data: number){
        this.next = null;
        this.data = data;
    }
}

class LinkedList {
    headNode: SinglyNode;

    constructor(headNode: SinglyNode = null){
        this.headNode = headNode;
    }
}

let firstSinglyNode = new SinglyNode(1);
let secondSinglyNode = new SinglyNode(2);
firstSinglyNode.next = secondSinglyNode;
let finalNode = new SinglyNode(3);
secondSinglyNode.next = finalNode;
let linkedList = new LinkedList(firstSinglyNode);
//console.log(JSON.stringify(linkedList));

let arrayOfNodes : Array<SinglyNode> = [new SinglyNode(1), new SinglyNode(7), new SinglyNode(3), new SinglyNode(5), new SinglyNode(6)];
let newLinkedList = new LinkedList(arrayOfNodes[0]);
for(let i:number = 0; i < arrayOfNodes.length; i++){
    if(i < arrayOfNodes.length - 1){
        arrayOfNodes[i].next = arrayOfNodes[i+1];
    }
}

function removeDuplicatesFromUnsortedLinkedList(unsortedLinkedList: LinkedList){
    console.log("AYAYA");
}

// now we need to sort the newLinkedList




