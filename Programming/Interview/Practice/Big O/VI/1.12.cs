// The following code computes the intersection (the number of elements in common) of two arrays. 
// It assumes that neither array has duplicates. 
// It computes the intersection by sorting one array (array b) 
// and then iterating through array a checking (via binary search) if each value is in b. 
// What is its runtime?
int intersection(int[] a, int[] b) { 
    mergesort(b);
    int intersect = 0;
    for (int x: a) {
        if (binarySearch(b, x) >= 0) {
            intersect++;
        } 
    }
    return intersect;
}

// CALL A as the length of array a
// CALL B as the length of array b
// mergesort b takes BlogB
// inside the forloop takes: A*logB
// sum the function we have the complexity O(logB(A+B)) 