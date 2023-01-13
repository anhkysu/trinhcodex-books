// Three In One
// Describe how you could use single array to implement three stacks
// [1,2,3]

var {StackedNode, Stack, nodeA} = require('./index');

var sampleArray = [1,2,3,4,5,6];
let stack1 = new Stack();
let stack2 = new Stack();
let stack3 = new Stack();

// First method : Fixed size; 3 stacks, each stack has length of n/3 as n is the array length
// Second method: Flexible size: we set initial size for the stack, when the size is exceeded , we grow the size and shift the elements.


// The below method applies the second methodology
function threeInOne(arrayInput){
    let stackIndex = 1;
    arrayInput.forEach(item => {
        mapStackIndex(stackIndex).push(item);
        stackIndex++;
        if(stackIndex > 3){
            stackIndex = 1;
        }
    })
}

function mapStackIndex(index){
    if(index == 1){
        return stack1;
    } else if(index == 2){
        return stack2;
    } else {
        return stack3;
    }
}

// **************************************************

threeInOne(sampleArray);
console.log(JSON.stringify(stack1.top));
console.log(JSON.stringify(stack2.top));
console.log(JSON.stringify(stack3.top));