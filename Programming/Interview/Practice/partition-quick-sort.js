let input = [10, 20, 50, 40, 30, 20, 100, 1, 5]

// [10, 20, 50, 40, 30, 20, 100, 1, 5] 30
// [10,20,50,40] 40 ; [20,100,1,5] 5;
// [10,20] 20; [50] ; [1]; [20, 100] 100
// [10] [20] ; [20] [100]


function partitionArray_v1(inputArray, low, high){
    let pivotItem = inputArray[high];
    let output = inputArray;
    let j = 0;
    for(let i = low; i <= high - j; i++){
        if(output[i] > pivotItem){
            j++;
            let removed = output.splice(i, 1);
            output.splice(high, 0, removed[0]);
            i--;
        }
    }
    return output;
}

function partitionArray_v2(inputArray, low, high){
    // pivot (Element to be placed at right position)
    let pivot = inputArray[high]; 
    let output = inputArray;

    let i = low - 1; // Index of smaller element and indicates the  right position of pivot found so far

    for (let j = low; j <= high- 1; j++){

        // If current element is smaller than the pivot
        if (output[j] < pivot){
            i++;    // increment index of smaller element
            let temp = output[i];
            output[i] = output[j];
            output[j] = temp;
        }
    }

    // Move the pivot item
    let temp2 = output[i + 1];
    output[i + 1] = output[high];
    output[high] = temp2;
    return output;
}


let anotherInput = [10, 20, 50, 40, 30, 20, 100, 1, 35]

// Input: [10, 20, 50, 40, 30, 20, 100, 1, 5]
// Array Length: 9
// Low: 0; High: 8; Pivot: 5
// [10, 20, 50, 40, 30, 20, 100, 1, 5]
// ...
// [1, 20, 50, 40, 30, 20, 100, 10, 5]
// [1, 5, 20, 50, 40, 30, 20, 100, 10, 20]

// Input: [10, 20, 50, 40, 30, 20, 100, 1, 35]
// Array Length: 9
// Low: 0; High: 8; Pivot: 35
// **********************
// loop: j = 0; i = -1
// output[j] = output[0] = 10 
// pivot = 35
// 10 < 35
// i = 0; swap output[0] and output[0]
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]

// **********************
// loop: j = 1; i = 0
// output[j] = output[1] = 20
// pivot = 35
// 20 < 35
// i = 1; swap output[1] and output[1]
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]

// **********************
// loop: j = 2; i = 1
// output[j] = output[2] = 50
// pivot = 35
// 50 > 35
// i = 1
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]

// **********************
// loop: j = 3; i = 1
// output[j] = output[3] = 40
// pivot = 35
// 40 > 35
// i = 1
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]

// **********************
// loop: j = 4; i = 1
// output[j] = output[4] = 30
// pivot = 35
// 30 < 35
// i = 2 swap output[2] and output[4]
// result: [10, 20, 30, 40, 50, 20, 100, 1, 35]

// **********************
// loop: j = 5; i = 2
// output[j] = output[5] = 20
// pivot = 35
// 20 < 35
// i = 3 swap output[3] and output[5]
// result: [10, 20, 30, 20, 50, 40, 100, 1, 35]

// **********************
// loop: j = 6; i = 3
// output[j] = output[6] = 100
// pivot = 35
// 100 > 35
// i = 3
// result: [10, 20, 30, 20, 50, 40, 100, 1, 35]

// **********************
// loop: j = 7; i = 3
// output[j] = output[7] = 1
// pivot = 35
// 1 < 35
// i = 4 swap output[4] and output[7]
// result: [10, 20, 30, 20, 1, 40, 100, 50, 35]

// **********************
// result: [10, 20, 30, 20, 1, 35 40, 100, 50]


// [10, 20, 50, 40, 30, 20, 100, 1, 35] i = 0 ; j = -1
// [20, 10, 50, 40, 30, 20, 100, 1, 35] i = 1 ; j = 0
// [20, 10, 50, 40, 30, 20, 100, 1, 35] i = 2 ; j = 1
// [20, 10, 50, 40, 30, 20, 100, 1, 35] i = 3 ; j = 1
// [20, 10, 50, 40, 30, 20, 100, 1, 35] i = 4 ; j = 1
// [20, 10, 50, 40, 30, 20, 100, 1, 35] i = 4 ; j = 1


function partitionArray_v2_rep(inputArray, low, high){
    let pivotItem = inputArray[high];


}

// The purpose of partion array is that given an array and a pivot point, sort the array so that all elements smaller than the pivot will be on the left the rest will be on the right side.

console.log(partitionArray_v2(anotherInput, 0, 8));