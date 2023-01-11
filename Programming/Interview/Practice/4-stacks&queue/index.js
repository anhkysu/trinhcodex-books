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
        if(this.top == null){
            
        }
    }

    peek(){ // returning the top of the queue
        if(this.top == null) {
            throw new Error("Queue is empty")
        }
        return this.top.data;
    }

    add(itemData){ // add an item the end of the queue
        let new
    }

    remove(){ //remove item at the top of the queue
        
    }
}



console.log(JSON.stringify(stackA));
stackA.pop();
console.log(JSON.stringify(stackA));
stackA.push(15);
console.log(JSON.stringify(stackA));
console.log(stackA.isEmpty());
console.log(stackA.peek());
console.log(JSON.stringify(stackA));
stackA.pop();
stackA.pop();
stackA.pop();
stackA.pop();
console.log(JSON.stringify(stackA));
console.log(stackA.isEmpty());
stackA.push(35);
console.log(JSON.stringify(stackA));

