// In JS, a linkedlist object looks like the below linkedListObject:

// Generate A Linked List:
const { performance } = require("perf_hooks");

let inputArray = ["a", "b", "c", "d", "e", "f"];
let inputArray2 = ["c", "a", "c", "d", "f", "e"];

function concatString(input){

    return 
}

function joinString(input){
    console.log("joinString function started");
    //console.time("aka");
    let pfmStart = performance.now();
    let result = "";
    result = input.join("");
    console.log(performance.now() - pfmStart);
    //console.timeEnd("aka");
    console.log(result);
    return result;
}

function plusString(input){
    console.log("plusString function started");
    //console.time("ak");
    let pfmStart = performance.now();
    let result = "";
    for(let i = 0; i < input.length; i++){
        result += input[i];
    }
    console.log(performance.now() - pfmStart);
    //console.timeEnd("ak");
    console.log(result);
    return result;
}

var functionDrawer = {
    concatString: (input) => concatString(input),
    joinString: (input) => joinString(input),
    plusString: (input) => plusString(input),
}

function stringMetricMeatureStart(){    
    //concatString(inputArray);
    ['concatString', 'joinString','plusString'].forEach((item, index) => {
        setTimeout(() => {
            functionDrawer[item](inputArray);
        }, 1000 * (index+1));
    })
    //plusString(inputArray2);
    //joinString(inputArray);
}


plusString(inputArray);
joinString(inputArray);
