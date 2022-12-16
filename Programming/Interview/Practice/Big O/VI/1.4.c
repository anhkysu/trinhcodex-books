//The following code performs integer division. What is its runtime (assume a and b are both positive)? 
// a: dividend , b: divisor
int div(int a, int b) { 
    int count= 0; 
    int sum = b; 
    while (sum <= a) { 
        sum += b; 
        count++; 
    } 
    return count; 
}
// Runtime: O(A/B + 1) = O(A)