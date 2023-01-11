// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater
// than or equal to x. lf x is contained within the list, the values of x only need to be after the elements less than x
// (see below).The partition element x can appear anywhere in the "right partition"; it does not need to appear between
// the left and right partitions.
// Example:
// Input: 3 -> 5 -> 8 -> 5 ->10 -> 2 -> 1 [partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

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
let three2Node = new LinkedNode(5);
let three3Node = new LinkedNode(3);
let three1Node = new LinkedNode(1);
oneNode.next = twoNode;
twoNode.next = threeNode;
threeNode.next = three2Node;
three2Node.next = three3Node;
three3Node.next = three1Node;

// Create smaller element linked list
// Create greater element linked list
// Merge two linked lists

function partitionLinkedList(headNode, partition){
    let smaller = null;
    let greater = null;
    while(headNode != null){
        if(headNode.data < partition){
            smaller.data = headNode.data;
            smaller.next = null;
            smaller = smaller.next;
        } else {
            greater.data = headNode.data;
            greater.next= null;
            greater = greater.next;
        }
        headNode = headNode.next;
    }
    console.log(smaller);
    console.log(greater);
}

function addElement(headNode, element){
    let _headNode = JSON.parse(JSON.stringify(headNode));
    let _element = JSON.parse(JSON.stringify(element));
    let runner = _headNode;
    if(_headNode == null){
        _headNode = _element;
        //console.log(JSON.stringify(headNode));
        return _headNode;
    } else {
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = _element;
    }
    return _headNode;
}

function partitionDivide(headNode, partition){
    var smaller = null;
    var greater = null;
    let element = {};
    let runner = headNode;
    while(runner != null){
        element.data = runner.data;
        element.next = null;
        if(runner.data < partition){
            // Add an element to the linked list
            smaller = addElement(smaller, element);
        } else {
            greater = addElement(greater, element);
        }
        runner = runner.next;
    }
    runner = smaller;
    while(runner.next != null){
        runner = runner.next;
    }
    runner.next = greater;
    console.log(JSON.stringify(smaller));
}

function partitionCleaner(head, partition) {
    var left;
    var middle;
    var right;
    var currLeft = null;
    var currMiddle = null;
    var currRight = null;

    var node = head;
    while (node !== null) {
      if (node.data < partition) {
        if (currLeft === null) {
          left = node;
          currLeft = left;
        } else {
          currLeft.next = node;
          currLeft = currLeft.next;
        }
      } else if (node.data === partition) {
        if (currMiddle === null) {
          middle = node;
          currMiddle = middle;
        } else {
          currMiddle.next = node;
          currMiddle = currMiddle.next;
        }
      } else {
        if (currRight === null) {
          right = node;
          currRight = right;
        } else {
          currRight.next = node;
          currRight = currRight.next;
        }
      }
      node = node.next;
    }
    currRight.next = null;
    // connect the left values with those matching the partition value
    currLeft.next = middle;
    // connect the middle with the right partitions
    currMiddle.next = right;
    console.log(JSON.stringify(left));
    return left; // return head of new linkedList
};

function partitionRegenerate(headNode, partition){
    let leftHead = null;
    let currentLeft = null;
    let rightHead = null;
    let currentRight = null;
    let runner = headNode;
    while(runner != null){
        if(runner.data < partition){
            if(leftHead == null){
                leftHead = runner;
                currentLeft = leftHead;
            } else {
                currentLeft.next = runner;
                currentLeft = currentLeft.next;
            }
        } else {
            if(rightHead == null){
                rightHead = runner;
                currentRight = rightHead;
            } else {
                currentRight.next = runner;
                currentRight = currentRight.next;
            }
        }
        runner = runner.next;
    }
    currentRight.next = null;
    currentLeft.next = rightHead;
    console.log(JSON.stringify(leftHead));
}

function addElementCleaner(headNode, element){
    if(headNode == null){
        headNode = element;
    } else {
        headNode.next = element;
    }
}

 
partitionRegenerate(oneNode, 3);