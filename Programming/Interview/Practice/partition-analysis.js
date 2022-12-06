// The key process in quickSort is a partition(). 
// The target of partitions is, given an array and an element x of an array as the pivot, 
// put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, 
// and put all greater elements (greater than x) after x. All this should be done in linear time.

// There can be many ways to do partition, following pseudo-code adopts the method given in the CLRS book. 
// The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal to) elements as i. 
// While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element. 

// **** KEY ****
// Keep track of the CURRENT SMALLER ELEMENT INDEX as i
// When current element is smaller than pivot, swap current element with the previous smaller element 

// **** DEBUG ANALYSIS ****
// let inputArray = [10, 20, 50, 40, 30, 20, 100, 1, 35];
// let traversingIndex = 0
// let latestSmallerItemIndex = -1;
// let latestSmallerItem = undefined;
// let pivot = 35;
// Start Partition Algorithm
// 
// traversingIndex = 0; 
// inputArray[traversingIndex] = 10;
// 10 < pivot -> action
// latestSmallerItemIndex = 0;
// latestSmallerItem = 10;
// swap inputArray[traversingIndex] & inputArray[latestSmallerItemIndex] (inputArray[0] & inputArray[0])
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]
// 
// traversingIndex = 1;
// inputArray[traversingIndex] = 20;
// 20 < pivot -> action
// latestSmallerItemIndex = 1;
// latestSmallerItem = 20;
// swap inputArray[traversingIndex] & inputArray[latestSmallerItemIndex] (inputArray[1] & inputArray[1])
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]
// 
// traversingIndex = 2;
// inputArray[traversingIndex] = 50;
// 50 > pivot -> no action
// latestSmallerItemIndex = 1;
// latestSmallerItem = 20;
// no swap
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]
// 
// traversingIndex = 3;
// inputArray[traversingIndex] = 40;
// 40 > pivot -> no action
// latestSmallerItemIndex = 1;
// latestSmallerItem = 20;
// no swap
// result: [10, 20, 50, 40, 30, 20, 100, 1, 35]
// 
// traversingIndex = 4;
// inputArray[traversingIndex] = 30;
// 30 < pivot -> action
// latestSmallerItemIndex = 2;
// latestSmallerItem = 30;
// swap inputArray[traversingIndex] & inputArray[latestSmallerItemIndex] (inputArray[2] & inputArray[4])
// result: [10, 20, 30, 40, 50, 20, 100, 1, 35]
// 
// traversingIndex = 5;
// inputArray[traversingIndex] = 20;
// 20 < pivot -> action
// latestSmallerItemIndex = 3;
// latestSmallerItem = 20;
// swap inputArray[traversingIndex] & inputArray[latestSmallerItemIndex] (inputArray[5] & inputArray[3])
// result: [10, 20, 30, 20, 50, 40, 100, 1, 35]
// 
// traversingIndex = 6;
// inputArray[traversingIndex] = 100;
// 100 > pivot -> no action
// latestSmallerItemIndex = 3;
// latestSmallerItem = 20;
// no swap
// result: [10, 20, 30, 20, 50, 40, 100, 1, 35]
// 
// traversingIndex = 7;
// inputArray[traversingIndex] = 1;
// 1 < pivot -> action
// latestSmallerItemIndex = 4;
// latestSmallerItem = 1;
// swap inputArray[traversingIndex] & inputArray[latestSmallerItemIndex] (inputArray[7] & inputArray[4])
// result: [10, 20, 30, 20, 1, 40, 100, 50, 35]
//
// Pivot swap
// latestSmallerItemIndex = 4;
// result: [10, 20, 30, 20, 1, 35, 100, 50, 40]

// **** RUN TIME ANALYSIS ****
// O(N)


function partition(inputArray, low, high){
    // pivot (Element to be placed at right position)
    let pivot = inputArray[high]; 

    let i = low - 1; // Index of smaller element and indicates the  right position of pivot found so far

    for (let j = low; j <= high - 1; j++){
        // If current element is smaller than the pivot
        if (inputArray[j] < pivot){
            i++;    // increment index of smaller element
            swap(inputArray, i, j);
        }
    }

    // Move the pivot item
    swap(inputArray, i + 1, high);
    return i+1;
}

function swap(arr, i, j){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

var myarr = [10, 20, 50, 40, 30, 20, 100, 1, 35];
console.log(myarr);
partition(myarr, 0, 8);
console.log(myarr);
