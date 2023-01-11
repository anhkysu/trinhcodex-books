// Implement a function to check if a linked list is a palindrome
let {LinkedNode, LinkedList, oneNode} =  require("./common");

let one = new LinkedNode(1);
//
let one1 = new LinkedNode(1);
let one2 = new LinkedNode(2);
let one3 = new LinkedNode(2);
let one4 = new LinkedNode(1);
one1.next = one2;
one2.next = one3;
one3.next = one4;

// 1->2->3->2->1
// 1->2->3->2->2->1
// 1->2->3->4->5->7

// Library
function reverseLinkedList(headNodeOfLinkedList){
    let runner = headNodeOfLinkedList;
    let currentHead = headNodeOfLinkedList;
    let newHead = null;
    let pivotPoint = null;
    while(runner != null){
        if(pivotPoint == null){
            pivotPoint = headNodeOfLinkedList;
        } else {
            newHead = new LinkedNode(runner.data);
            newHead.next = currentHead;
            currentHead = newHead;
            pivotPoint.next = runner.next;
        }

        runner = runner.next;
    }
    console.log(JSON.stringify(newHead));
    // lack of final entity
}
//

function reverseLinkedListBetter(headNodeOfLinkedList){
    // The way to solve is to add new item into the linked list
    let runner = JSON.parse(JSON.stringify(headNodeOfLinkedList));
    let currentHead = null; // Important
    let newHead = null; 
    while(runner != null){
        newHead = new LinkedNode(runner.data);
        newHead.next = currentHead;
        currentHead = newHead;

        runner = runner.next;
    }
    return newHead;
    console.log(JSON.stringify(newHead));
    // lack of final entity
}


function reverseAndClone(node) { 
    let head= null; 
    while (node != null) { 
        n = new LinkedlistNode(node.data); // Clone 
        n.next = head; 
        head= n; 
        node= node.next; 
    } 
    return head;
}

function checkPalidromeuUsingCompareingMethod(headNodeOfLinkedList){
    let reversedLinkedList = reverseLinkedListBetter(headNodeOfLinkedList);
    // compare headNodeOfLinkedList vs reversedLinkedList
    while(headNodeOfLinkedList != null && reversedLinkedList != null){
        if(headNodeOfLinkedList.data != reversedLinkedList.data){
            return false;
        }
        headNodeOfLinkedList = headNodeOfLinkedList.next;
        reversedLinkedList = reversedLinkedList.next;
    }
    return true;
}

function checkPalindromeBruteforce(headNode){
    let countItems = {};
    let runner = headNode;
    let conditionCount = 0;
    while(runner != null){
        if(countItems[runner.data] == undefined){
            countItems[runner.data] = 0;
        }
        countItems[runner.data]++;
        runner = runner.next;
    }
    Object.keys(countItems).forEach(item => {
        if(countItems[item]%2 == 1){
            conditionCount++;
        }
    });
    return (conditionCount > 1 ? false : true);
}



function checkPalindromeUsingReverseMethod(headNode){

}



let result = checkPalidromeuUsingCompareingMethod(one1);
console.log(result);

// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half
