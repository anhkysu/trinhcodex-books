// Sum List: You have two numbers represented by a linked list, where each node contains a single digit. 
// The digits are stored in reverse order, such that the 1 's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list. 
// EXAMPLE 
// lnput:(7->1->6) + (5->9->2). That is, 617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
let {LinkedNode, LinkedList, oneNode} =  require("./common");

let one = new LinkedNode(1);
let one1 = new LinkedNode(3);
let one2 = new LinkedNode(4);
let one3 = new LinkedNode(5);
one.next = one1;
one1.next = one2;
one2.next = one3;

function turnLinkedListToNumber(linkedList){
    let headNode = linkedList.head;
    let listNumberArray = [];
    while(headNode != null){
        listNumberArray.push(headNode.data);
        headNode = headNode.next;
    }
    for(let i = 0; i < listNumberArray.length; i++){
        listNumberArray.unshift(listNumberArray.splice(i, 1)[0]);
    }    
    return Number(listNumberArray.join(""));
}

function turnNumberToLinkedList(number){
    let splittedNumber = number.toString().split("");
    for(let i = 0; i < splittedNumber.length; i++){
        splittedNumber.unshift(splittedNumber.splice(i, 1)[0]);
    }
    let headNode = null;
    let current = headNode;
    splittedNumber.forEach(item => {
        if(headNode == null){
            headNode = new LinkedNode(item);
            current = headNode;
        } else {
            current.next = new LinkedNode(item);
            current = current.next;
        }
    })
    return headNode;
}

function sumListBruteForce(linkedListNo1, linkedListNo2){
    let no1 = turnLinkedListToNumber(linkedListNo1); // O(N1)
    let no2 = turnLinkedListToNumber(linkedListNo2); // O(N2)
    let sum = no1 + no2;
    let linkedList = new LinkedList(turnNumberToLinkedList(sum)); // O(N1+N2)
    return linkedList;
}

function sumListByAddingEachElementSameLength(ll1, ll2){
    let carries = 0;
    ll1 = ll1.head;
    ll2 = ll2.head;
    let combinedLinkedList = new LinkedList();
    while(ll1 != null && ll2 != null){
        let data1 = ll1.data;
        let data2 = ll2.data;
        let sum = data1 + data2;
        let remainder = (sum + carries) % 10;
        carries = Math.floor((sum + carries) / 10);
        combinedLinkedList.append(remainder)
        ll1 = ll1.next;
        ll2 = ll2.next;
    }
    if(carries > 0){
        combinedLinkedList.append(carries);
    }
    return combinedLinkedList;
}

function sumListByAddingEachElementCustomLength(ll1, ll2){
    let carries = 0;
    let length1 = ll1.length();
    let length2 = ll2.length();
    if(length1 < length2){
        ll1.padStart(length2 - length1, 0);
    } else if (length1 > length2){
        ll2.padStart(length1 - length2, 0);
    }
    ll1 = ll1.head;
    ll2 = ll2.head;
    let combinedLinkedList = new LinkedList();
    while(ll1 != null && ll2 != null){
        let data1 = ll1.data;
        let data2 = ll2.data;
        let sum = data1 + data2;
        let remainder = (sum + carries) % 10;
        carries = Math.floor((sum + carries) / 10);
        combinedLinkedList.append(remainder)
        ll1 = ll1.next;
        ll2 = ll2.next;
    }
    if(carries > 0){
        combinedLinkedList.append(carries);
    }
    console.log(JSON.stringify(combinedLinkedList));
    return combinedLinkedList;
}

function sumListByRecursive(ll1, ll2){
    
}

function checkLinkedListChange(aLinkedList){
    while(aLinkedList != null){
        //aLinkedList.data = 10;
        aLinkedList = aLinkedList.next;
    }
}

let no1 = new LinkedList();
no1.appendMultiple([7,1,9,6]);
let no2 = new LinkedList();
no2.appendMultiple([5,9,2]);
sumListByAddingEachElementCustomLength(no1, no2);
//console.log(JSON.stringify());


// FOLLOW UP 
// Suppose the digits are stored in forward order. Repeat the above problem. 
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295. 
// Output: 9 - > 1 -> 2. That is, 912