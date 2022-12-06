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

// **** RUNTIME ****
// partition: O(N)
// quicksort - Best Case: O(NlogN) = mergesort
// quicksort - Worst Case: O(N^2)
// quicksort - Average Case: O(NlogN)


function quickSort(inputArray, low, high){
    if(low < high){
        let partitionIndex = partition(inputArray, low, high);
        quickSort(inputArray, low, partitionIndex - 1);
        quickSort(inputArray, partitionIndex + 1, high);
    }
}

function partition(inputArray, low, high){
    // pivot (Element to be placed at right position)
    let pivot = inputArray[high]; 

    let i = low - 1; // Index of smaller element and indicates the right position of pivot found so far

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

//console.log(quickSort([10, 20, 50, 40, 30, 20, 100, 1, 35], 0, 8));
var myarr = [10, 20, 50, 40, 30, 20, 100, 1, 35];
console.log(myarr);
quickSort(myarr, 0, 8);
console.log(myarr);
