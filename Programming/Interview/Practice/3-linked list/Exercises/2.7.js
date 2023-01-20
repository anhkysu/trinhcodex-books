// Intersection: Given two (singly) linked lists, determine if the two lists intersect. 
// Return the intersecting node. 
// Note that the intersection is defined based on reference, not value. 
// That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
let {LinkedNode, LinkedList, oneNode} =  require("./common");


let one1 = new LinkedNode(1);
let one2 = new LinkedNode(2);
let one3 = new LinkedNode(2);
let one4 = new LinkedNode(1);
one1.next = one2;
one2.next = one3;
one3.next = one4;


let two1 = new LinkedNode(1);
let two2 = new LinkedNode(2);
//let two3 = new LinkedNode(2);
//let two4 = new LinkedNode(1);
two1.next = two2;
two2.next = one3;


function isIntersecting(headNode1, headNode2){
    // kth node of the list
    // exact same node (by reference)
    let runner1 = headNode1;
    let runner2 = null;
    let intersectingNode = null;
    outer_loop:
    while(runner1 != null){
        runner2 = headNode2;
        while(runner2 != null){
            if(runner1 == runner2){
                intersectingNode = runner1;
                break outer_loop;
            }
            runner2 = runner2.next;
        }
        runner1 = runner1.next;
    }
    
    console.log(JSON.stringify(intersectingNode));
    return intersectingNode ? true : false;
}

function isIntersectingFaster(head1, head2){
    let intersectingNode = null;
    function getSizeAndTail(headNode){
        let size = 0;
        let tail = null;
        let runner = headNode;
        while(runner!=null){
            size++;
            if(runner.next == null){
                tail = null;
            }
            runner = runner.next;
        }
        return ({size, tail})
    }
    function advanceHead(headNode, steps){
        while(steps > 0){
            headNode = headNode.next;
        }
    }
    let {size1, tail1} = getSizeAndTail(head1);
    let {size2, tail2} = getSizeAndTail(head2);

    if(tail1 != tail2){
        return {isIntersecting: false, intersectingNode: null}
    }

    let runner1 = head1;
    let runner2 = head2;
    if(size1 > size2){
        advanceHead(runner1, size1 - size2);
    } else if (size2 > size1){
        advanceHead(runner2, size2 - size1);
    }
    
    while(runner1 != null & runner2 != null){
        if(runner1 == runner2){
            intersectingNode = runner1;
            break;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    console.log(JSON.stringify(intersectingNode));
    return intersectingNode ? {isIntersecting: true, intersectingNode} : {isIntersecting: false, intersectingNode: null}
}

isIntersectingFaster(one1, two1) // should return true
