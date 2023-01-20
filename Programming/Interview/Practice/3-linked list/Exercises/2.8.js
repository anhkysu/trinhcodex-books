// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION
/// Circular linked list: A(corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
let {LinkedNode, LinkedList, oneNode} =  require("./common");


let one1 = new LinkedNode(1);
let one2 = new LinkedNode(2);
let one3 = new LinkedNode(2);
let one4 = new LinkedNode(1);
one1.next = one2;
one2.next = one3;
one3.next = one4;
//one4.next = one1;

function isLooped(headNode){
    let mainRunner = headNode;
    let loopCheckRunner = null;
    outer_loop:
    while(mainRunner != null){
        loopCheckRunner = headNode;
        inner_loop:
        while(loopCheckRunner != null){
            if(mainRunner.next == loopCheckRunner){
                return true;
            }
            if(loopCheckRunner == mainRunner){
                break inner_loop;
            }
            loopCheckRunner = loopCheckRunner.next;
        }

        mainRunner = mainRunner.next;
    }
    return false;
}

function isLoopedUsingFastAndSlowRunner(headNode){
    
}

let result = isLooped(one1);
console.log(result);