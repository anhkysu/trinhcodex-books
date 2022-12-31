// Remove Dups: Write  code to  remove  duplicates from  an  unsorted  linked  list.
// FOLLOW UP
// How would  you  solve this problem  if a  temporary  buffer is  not  allowed?
var SinglyNode = /** @class */ (function () {
    function SinglyNode(data) {
        this.next = null;
        this.data = data;
    }
    return SinglyNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(headNode) {
        if (headNode === void 0) { headNode = null; }
        this.headNode = headNode;
    }
    return LinkedList;
}());
var firstSinglyNode = new SinglyNode(1);
var secondSinglyNode = new SinglyNode(2);
firstSinglyNode.next = secondSinglyNode;
var finalNode = new SinglyNode(3);
secondSinglyNode.next = finalNode;
var linkedList = new LinkedList(firstSinglyNode);
//console.log(JSON.stringify(linkedList));
var arrayOfNodes = [new SinglyNode(1), new SinglyNode(7), new SinglyNode(3), new SinglyNode(5), new SinglyNode(6)];
var newLinkedList = new LinkedList(arrayOfNodes[0]);
for (var i = 0; i < arrayOfNodes.length; i++) {
    if (i < arrayOfNodes.length - 1) {
        arrayOfNodes[i].next = arrayOfNodes[i + 1];
    }
}
function removeDuplicatesFromUnsortedLinkedList(unsortedLinkedList) {
    var linkedListItem = unsortedLinkedList.headNode;
    var countNumber = {};
    var previousNode = null;
    while (linkedListItem.next != null) {
        var currentData = linkedListItem.data;
        var nextNode = linkedListItem.next;
        var nextData = nextNode.data;
        if (countNumber[currentData] == undefined) {
            countNumber[currentData] = 0;
        }
        countNumber[currentData]++;
        previousNode = linkedListItem;
        linkedListItem = linkedListItem.next;
    }
}
//removeDuplicatesFromUnsortedLinkedList();
function removeDuplicates_1(headNode) {
    var countNumber = {};
    var linkedListItem = headNode;
    // traverse each data, if
}
function countDataElement(headNode) {
    var countNumber = {};
    var linkedListItem = headNode;
    while (linkedListItem.next != null) {
        if (countNumber[linkedListItem.data] == undefined) {
            countNumber[linkedListItem.data] = 0;
        }
        countNumber[linkedListItem.data]++;
        linkedListItem = linkedListItem.next;
    }
    if (countNumber[linkedListItem.data] == undefined) {
        countNumber[linkedListItem.data] = 0;
    }
    countNumber[linkedListItem.data]++;
    console.log(countNumber);
}
function removeSevenBySixElement(headNode) {
    // level 0: 
    // level 1: headNode.next
    // level 2: headNode.next.next
    // level 3: headNode.next.next.next
    // ...
    headNode.next = headNode.next.next.next.next.next;
    console.log(JSON.stringify(headNode));
}
function removeSevenByThreeElement(headNode) {
    headNode.next = headNode.next.next;
    console.log(JSON.stringify(headNode));
}
function printAllDataOfLinkedListWithoutHead(headNode) {
    // traverse each node and prints all value
    var linkedListItem = headNode;
    if (linkedListItem.next == null) {
        console.log(linkedListItem.data);
        return;
    }
    printAllDataOfLinkedListWithoutHead(linkedListItem.next);
    console.log(linkedListItem.data);
}
// retrieve previous node given current node
countDataElement(newLinkedList.headNode);
