// Implement a function to check if a linked list is a palindrome
let {LinkedNode, LinkedList, oneNode} =  require("./common");

let one = new LinkedNode(1);
//
let one1 = new LinkedNode(3);
let one2 = new LinkedNode(3);
let one3 = new LinkedNode(1);
one.next = one1;
one1.next = one2;
one2.next = one3;

// 1->2->3->2->1
// 1->2->3->2->2->1
// 1->2->3->4->5->7

// Library
function reverseLinkedList(headNodeOfLinkedList){
    let runner = headNodeOfLinkedList;
    let newHead = null;
    let oldHHead = headNodeOfLinkedList;
    while(runner != null){
        newHead = new LinkedNode(runner.data);
        runner = runner.next;
        oldHead.next = runner;
        newHead.next = oldHead;
    }
    // lack of final entity
}
//

function checkPalidromeuUsingCompareingMethod(){
    // only need to compare half of linked list
    // 
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



let result = reverseLinkedList(one1);
console.log(result);

// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half
