// Initiate A Node
class LinkedNode {
    constructor(data){
        this.data = data;
        this.next = null;
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

// Function to remove one node in a Linked List, returning new LinkedList with one node removed
function removeNode(nodeData, headNodeOfLinkedList){
    let head = headNodeOfLinkedList
    // if nodeData == data of headerNodeOfLinkedList => change head to the next node
    if(nodeData == headNodeOfLinkedList.data){
        head = head.next; // move head
        return head;
    }
    // if nodeData != data of headerNodeOfLinkedList => traverse to consecutive nodes while node.next != null
    while(headNodeOfLinkedList.next != null){
        // // if node.next.data == nodeData => replace the old node with next node: node.next = node.next.next, return
        // // if node.next.data != nodeData => continue
        if(headNodeOfLinkedList.next.data == nodeData){
            headNodeOfLinkedList.next = headNodeOfLinkedList.next.next; // move sub node
            return head;
        }
        headNodeOfLinkedList = headNodeOfLinkedList.next;
    }
    return head;
    // // return node at the beginning if nothing returned till this point
}

function removeNodeMultiple(nodeData, headNodeOfLinkedList, times){
    let head = headNodeOfLinkedList;
    while(times != 0){
        removeNode(nodeData, head);
        times--;
    }
    return head;
}

// Initiate A Linked List
class LinkedList {
    constructor(headNode){
        this.head = headNode;
        //this.data = this.head.data;
        //this.next = headNode.next;
    }

    removeNode(nodeData){
        // let iterateItem = JSON.parse(JSON.stringify(this.head));
        let iterateItem = this.head; 
        // if nodeData == data of headerNodeOfLinkedList => change head to the next node
        if(nodeData == iterateItem.data){
            // head = head.next; // move head
            this.head = iterateItem.next;
            return;
        }

        // if nodeData != data of headerNodeOfLinkedList => traverse to consecutive nodes while node.next != null
        while(iterateItem.next != null){
            if(iterateItem.next.data == nodeData){
                iterateItem.next = iterateItem.next.next
                // head not changed
                return;
            }
            iterateItem = iterateItem.next;
        }
    }

    removeNodeMultiple(nodeData, times){
        while(times != 0){
            this.removeNode(nodeData);
            times--;
        }
    }

    removeDups(){
        let countItems = {};
        let linkedListDetached = JSON.parse(JSON.stringify(this.head));
        while(linkedListDetached != null){
            if(countItems[linkedListDetached.data] == undefined){
                countItems[linkedListDetached.data] = 0;
            }
            countItems[linkedListDetached.data]++;
            linkedListDetached = linkedListDetached.next;
        }
        console.log(countItems);
        Object.keys(countItems).forEach(item => {
            if(countItems[item] > 1){
                this.removeNodeMultiple(item, countItems[item] - 1);
            }
        })
    }

    removeDupsWithoutBuff(){
        // Sort before removing dups
        let current = this.head;
        while(current != null){
            let runner = current;
            while(runner.next != null){
                if(runner.next.data == current.data){
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next
                }
            }
            current = current.next;
        }
    }
}

// Run Test removeNodeMultiple
let oneLinkedList = new LinkedList(oneNode);
oneLinkedList.removeDupsWithoutBuff();
console.log(JSON.stringify(oneLinkedList));
// console.log(JSON.stringify(oneLinkedList.removeNodeMultiple(3, 3)));

