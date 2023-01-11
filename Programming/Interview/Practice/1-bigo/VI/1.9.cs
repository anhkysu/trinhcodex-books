int[] copyArray(int[] array){ 
    int(] copy= new int(0]; 
    for (int value: array) {
        copy = appendToNew(copy, value);
    }
    return copy;
}

int[] appendToNew(int[] array, int value){
    int[] bigger= new int[array.length + 1]; 
    for (int i= 0; i < array.length; i++) {
        bigger[i] = array[i]; 
    }
    // add new element 
    bigger[bigger.length - 1] = value;
    return bigger;
}

// Runtime: O(n^2)