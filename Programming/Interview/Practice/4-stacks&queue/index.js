class StackedNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(topNode){
        this.top = topNode;
    }

    peek(){
        // return top of stack
        if(this.top == null){
            throw new Error("Top is null, cannot peek");
        }
        return this.top.data;
    }

    isEmpty(){
        return this.top == null;
    }

    pop(){
        // remove first-in element
        if(this.top == null){
            throw new Error("Top is null, cannot pop");
        }
        this.top = this.top.next;
    }

    push(itemData){
        // add new first-in element
        let newTop = new StackedNode(itemData);
        newTop.next = this.top;
        this.top = newTop;
    }
}

// ******* Example Stacks ******
let nodeA = new StackedNode(1);
let nodeB = new StackedNode(2);
let nodeC = new StackedNode(3);
nodeA.next = nodeB;
nodeB.next = nodeC;

let stackA = new Stack(nodeA);
// *****************************

// ******* Test Cases **********
// console.log(JSON.stringify(stackA));
// stackA.pop();
// console.log(JSON.stringify(stackA));
// stackA.push(15);
// console.log(JSON.stringify(stackA));
// console.log(stackA.isEmpty());
// console.log(stackA.peek());
// console.log(JSON.stringify(stackA));
// stackA.pop();
// stackA.pop();
// stackA.pop();
// stackA.pop();
// console.log(JSON.stringify(stackA));
// console.log(stackA.isEmpty());
// stackA.push(35);
// console.log(JSON.stringify(stackA));
// *****************************


class QueueNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(firstNode, lastNode){
        this.top = firstNode;
        this.last = lastNode;
    }

    isEmpty(){
        return this.top == null;
    }

    peek(){ // returning the top of the queue
        if(this.top == null) {
            throw new Error("Queue is empty")
        }
        return this.top.data;
    }

    add(itemData){ // add an item the end of the queue
        let item = new QueueNode(itemData);
        if(this.last != null){
            this.last.next = item;
        }
        this.last = item;
        if(this.top == null){
            this.top = this.last;
        }
    }

    remove(){ //remove item at the top of the queue
        if(this.top == null) {
            throw new Error("Queue is empty")
        }
        let data = this.top.data;
        this.top = this.top.next;
        if(this.top == null){
            this.last = null;
        }
        return data;
    }
}

// ******* Example Queues ******
let qnodeA = new QueueNode(1);
let qnodeB = new QueueNode(2);
let qnodeC = new QueueNode(3);
qnodeA.next = qnodeB;
qnodeB.next = qnodeC;

let queueA = new Queue(qnodeA, qnodeC);
// *****************************

console.log(JSON.stringify(queueA.top));
queueA.remove();
console.log(JSON.stringify(queueA.top));
console.log(JSON.stringify(queueA.last));
queueA.add(15);
console.log(JSON.stringify(queueA.last));
console.log(queueA.isEmpty());
console.log(queueA.peek());
console.log(JSON.stringify(queueA.top));

