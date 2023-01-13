// Stack Min
// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?
// push, pop and min should operate in O(1) time.

class XStackedNode {
    constructor(data){
        this.data = data;
        this.next = null;
        this.minAtNode = null;
    }
}

class XStack {
    constructor(topNode){
        this.top = topNode;
        this.min = null;
        this.findMinAtEachNode();
    }
    
    findMinAtEachNode(){
        let currentHead = this.top;
        let runner = currentHead;
        while(currentHead != null){
            let minValue = currentHead.data;
            while(runner != null){
                if(runner.data < minValue){
                    minValue = runner.data;
                }
                runner = runner.next
            }
            currentHead.minAtNode = minValue;
            currentHead = currentHead.next;
        }
        if(this.top == null){
            this.min = null;
            return;
        }
        this.min = this.top.minAtNode;
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
        this.min = this.top.minAtNode;
    }

    push(itemData){
        // add new first-in element
        let newTop = new XStackedNode(itemData);
        if(itemData < this.top.minAtNode){
            newTop.minAtNode = itemData;
            this.min = itemData;
        } else {
            newTop.minAtNode = this.top.minAtNode;
        }
        newTop.next = this.top;
        this.top = newTop;
    }

}

// ******* Example Stacks ******
let nodeA = new XStackedNode(3);
let nodeB = new XStackedNode(2);
let nodeC = new XStackedNode(1);
let nodeD = new XStackedNode(5);
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

let stackA = new XStack(nodeA);
console.log(JSON.stringify(stackA));
console.log(stackA.min);
stackA.pop();
stackA.pop();
stackA.pop();
console.log(stackA.min);
stackA.push(1);
console.log(JSON.stringify(stackA));
console.log(stackA.min);
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
