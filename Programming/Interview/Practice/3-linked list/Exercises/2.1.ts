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

function removeDuplicatesFromUnsortedLinkedList(unsortedLinkedList?: LinkedList){
    let linkedListItem = unsortedLinkedList.headNode;
    let countNumber = {};
    let previousNode = null;
    while(linkedListItem.next != null){
        let currentData = linkedListItem.data;
        
        let nextNode = linkedListItem.next;
        let nextData = nextNode.data;
        if(countNumber[currentData] == undefined){
            countNumber[currentData] = 0;
        }
        countNumber[currentData]++;

        previousNode = linkedListItem;
        linkedListItem =  linkedListItem.next;
    }
}
//removeDuplicatesFromUnsortedLinkedList();

function removeDuplicates_1(headNode?: SinglyNode){
    let countNumber = {};
    let previousLinkedItem = null;
    let linkedListItem = headNode;
    while(linkedListItem.next != null){
        if(countNumber[linkedListItem.data] == undefined){
            countNumber[linkedListItem.data] = 0;
        }
        countNumber[linkedListItem.data]++;
        if(countNumber[linkedListItem.data] > 1){
            
        }
        previousLinkedItem = linkedListItem;
        linkedListItem = linkedListItem.next;
    }
    if(countNumber[linkedListItem.data] == undefined){
        countNumber[linkedListItem.data] = 0;
    }
    countNumber[linkedListItem.data]++;
    console.log(countNumber);
}

function countDataElement(headNode?: SinglyNode){
    let countNumber = {};
    let linkedListItem = headNode;
    while(linkedListItem.next != null){
        if(countNumber[linkedListItem.data] == undefined){
            countNumber[linkedListItem.data] = 0;
        }
        countNumber[linkedListItem.data]++;
        linkedListItem = linkedListItem.next;
    }
    if(countNumber[linkedListItem.data] == undefined){
        countNumber[linkedListItem.data] = 0;
    }
    countNumber[linkedListItem.data]++;
    console.log(countNumber);
}

function removeSevenBySixElement(headNode?: SinglyNode){
    // level 0: 
    // level 1: headNode.next
    // level 2: headNode.next.next
    // level 3: headNode.next.next.next
    // ...
    headNode.next = headNode.next.next.next.next.next;
    console.log(JSON.stringify(headNode));
}

function removeSevenByThreeElement(headNode?: SinglyNode){
    headNode.next = headNode.next.next;
    console.log(JSON.stringify(headNode));
}

function printAllDataOfLinkedListWithoutHead(headNode?: SinglyNode){
    // traverse each node and prints all value
    let linkedListItem = headNode;
    if(linkedListItem.next == null){
        console.log(linkedListItem.data)
        return;
    }
    printAllDataOfLinkedListWithoutHead(linkedListItem.next);
    console.log(linkedListItem.data);
}

// retrieve previous node given current node

countDataElement(newLinkedList.headNode);