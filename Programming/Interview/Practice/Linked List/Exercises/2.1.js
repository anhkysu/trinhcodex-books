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
console.log(JSON.stringify(newLinkedList));
