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

function sumListByRecursive(ll1, ll2, carry){
    if(ll1 == null && ll2 == null && !carry){
        return null;
    }
    let rev = (ll1 ? ll1.data : 0) + (ll2 ? ll2.data : 0) + (carry ? carry : 0);
    let data = (rev) % 10;
    let headNode = new LinkedNode(data);
    let nextCarry = Math.floor((rev)/10);

    headNode.next = sumListByRecursive(ll1 ? ll1.next : null, ll2 ? ll2.next : null, nextCarry);

    return headNode;
}

function sumListForward(ll1, ll2, carry){
    if(typeof ll1 == LinkedList || typeof ll2 == LinkedList){
        let length1 = ll1.length();
        let length2 = ll2.length();
        if(length1 < length2){
            ll1.padStart(length2 - length1, 0);
        } else if (length1 > length2){
            ll2.padStart(length1 - length2, 0);
        }
        ll1 = ll1.head;
        ll2 = ll2.head;
    }
    if(ll1 == null && ll2 == null){
        return 0;
    }
    
    // let rev = (ll1 ? ll1.data : 0) + (ll2 ? ll2.data : 0) + (carry ? carry : 0);
    let headNode = new LinkedNode();
    let runner = headNode;
    let nextCarry = sumListForward(ll1 ? ll1.next : null, ll2 ? ll2.next : null);
    let data = (ll1 ? ll1.data : 0 + ll2 ? ll2.data : 0 + nextCarry) % 10;
    runner.data = data;
    
    
    

    return headNode;
}

function checkLinkedListChange(aLinkedList){
    while(aLinkedList != null){
        //aLinkedList.data = 10;
        aLinkedList = aLinkedList.next;
    }
}

function sumListForwardEasyFirst(ll1, ll2){
    //let headNode = new LinkedNode();
    if(ll1 == null && ll2 == null){
        return {carry: 0, runner: null};
    }
    let currentSumData = (ll1 ? ll1.data : 0) + (ll2 ? ll2.data : 0);
    let recur = sumListForwardEasyFirst(ll1 ? ll1.next : null, ll2 ? ll2.next : null);
    let accumulatedSumData = currentSumData + recur.carry
    let data = accumulatedSumData % 10;
    let runner = new LinkedNode(data);
    runner.next = recur.runner;
    let carry = Math.floor(accumulatedSumData / 10);
    
    return {carry, runner};

    console.log(JSON.stringify(ll1));
    console.log(JSON.stringify(ll2));
    // if(ll1 == null && ll2 == null){
    //     return 0;
    // }
}

function sumListWrapper(ll1, ll2){
    let result = null;
    if(ll1 instanceof LinkedList || ll2 instanceof LinkedList){
        let length1 = ll1.length();
        let length2 = ll2.length();
        if(length1 < length2){
            ll1.padStart(length2 - length1, 0);
        } else if (length1 > length2){
            ll2.padStart(length1 - length2, 0);
        }
        ll1 = ll1.head;
        ll2 = ll2.head;
    }
    let {carry, runner} = sumListForwardEasyFirst(ll1, ll2);
    if(carry > 0){
        result = new LinkedNode(carry);
        result.next = runner;
    } else {
        result = runner;
    }
    console.log(JSON.stringify(result));
}

function convertArrayInRevrsOderToLinkedNodes(arr){
    let head = new LinkedNode;
    for(let i = 0; i < arr.length; i++){
        
    }
}

let no1 = new LinkedList();
no1.appendMultiple([9,9,9,6]);
let no2 = new LinkedList();
no2.appendMultiple([5,9,2]);
sumListWrapper(no1, no2);
//sumListByAddingEachElementCustomLength(no1, no2);
//console.log(JSON.stringify());


// FOLLOW UP 
// Suppose the digits are stored in forward order. Repeat the above problem. 
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295. 
// Output: 9 - > 1 -> 2. That is, 912