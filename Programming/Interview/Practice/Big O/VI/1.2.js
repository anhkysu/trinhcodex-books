// The following code computes a^b. What is its runtime?
// int power(int a, int b) { 
//    if(b < 0) {
//       return 0
//   } else if (b == 0){
//       return 1
//   } else {
//   return a*power(a, b-1)
// }

// runtime: O(b)