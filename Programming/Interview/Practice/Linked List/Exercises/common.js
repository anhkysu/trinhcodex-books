class LinkedNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(headNode){
        this.head = headNode || null;
    }

    length(){
        let length = 0;
        let runner = this.head;
        while(runner != null){
            runner = runner.next;
            length++;
        }
        return length;
    }

    appendMultiple(itemArrays){
        let current = null;
        itemArrays.forEach((element) => {
            if(!this.head){
                this.head = new LinkedNode(element);
                current = this.head;
            } else {
                current.next = new LinkedNode(element);
                current = current.next;
            }
        })
        return this.head;
    }

    append(value){
        let iterateItem = this.head;
        if(iterateItem == null){
            this.head = new LinkedNode(value);
            return this.head;
        }
        while(iterateItem.next != null){
            iterateItem = iterateItem.next;
        }
        iterateItem.next = new LinkedNode(value);
        return this.head;
    }

    padStart(number, padItem){
        if(number <= 0) return;
        let newHead = null;
        let runner = null;
        while(number > 0){
            if(newHead == null){
                newHead = new LinkedNode(padItem);
                runner = newHead;
            } else {
                runner.next = new LinkedNode(padItem);
                runner = runner.next;
            }
            number--;
        }
        runner.next = JSON.parse(JSON.stringify(this.head));
        this.head = newHead;
    }
}

let oneNode = new LinkedNode(1);
let twoNode = new LinkedNode(2);
let threeNode = new LinkedNode(3);
let three2Node = new LinkedNode(3);
let three3Node = new LinkedNode(3);
let three1Node = new LinkedNode(1);
oneNode.next = twoNode;
twoNode.next = threeNode;
threeNode.next = three2Node;
three2Node.next = three3Node;
three3Node.next = three1Node;

module.exports = {LinkedNode, LinkedList, oneNode}