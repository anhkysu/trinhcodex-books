// The following code prints all strings of length k where the charaders are in sorted order. 
// It does this by generating all strings of length k and then checking if each is sorted. 
// What is its runtime?

// if k = 2
// printSortedStrings(2, "")
// i = 0
// c = "A"
    // printSortedStrings(1, "A")
    // i = 0
    // c = "A"
        // printSortedStrings(0, "AA")
    // i = 1
    // c = "B"
        // printSortedStrings(0, "AB")
    // i = 2
    // c = "C"
        // printSortedStrings(0, "AC")
    // ...

    // i = 25

    // c = "F"
        // printSortedStrings(0, "AF")

// c = "B"
    // printSortedStrings(1, "B)
    // i = 0
    // c = "A"
        // printSortedStrings(0, "BA") -> no print
    // i = 1
    // c = "B"
        // printSortedString(0, "BB")
    // ...
    // i = 25
    // c = "F"
        // printSortedString(0, "BF)
// *************************************
// k = 2 => 26 + 26 

// 26*numberofchars

// if k = 3
// printSortedStrings(3, "")
// i = 0
// c = "A"
    // printSortedStrings(2, "A")
    // i = 0
    // c = "A"
        // printSortedStrings(1, "AA")
        // i = 0
        // c = "A"
            // printSortedStrings(0, "AAA")
        // i = 1
        // c = "B"
            // printSortedStrings(0, "AAB")
        // ...
        // i = 25
        // c = "F"
            // printSortedStrings(0, "AAF")
    // i = 1
    // c = "B"
        // printSortedStrings(1, "AB")
        // i = 0
        // c = "A"
            // printSortedStrings(0, "ABA")
        // i = 1
        // c = "B"
            // printSortedStrings(0, "ABB")
        // ...
        // i = 25
        // c = "F"
            // printSortedStrings(0, "ABF")

// k = 3 => 26 * 26 + 26* 26 + 26*26

// Tree: 
// k
// k- 1                  //             k - 1                          ... (26 branches)
// k- 2 // k - 2 ... (26 branchs)     //k- 2 // k - 2 ... (26 branches)
// ... 1 (26 branches)

26^(k-1) * k


int numChars = 26;
void printSortedStrings(int remaining) {
    printSOrtedStrings (remaining, "");
}

void printSortedStrings(int remaining, String prefix) { 
    if (remaining== 0) {
        if (isinOrder(prefix)) { 
            System.out.println(prefix);
        }
    } else {
        for (int i= 0; i < numChars; i++) {
            char c = ithletter(i);
            printSortedStrings(remaining - 1, prefix+ c);
        } 
    }
}

boolean isin0rder(String s) {
    for (int i= 1; i < s.length(); i++) {
        int prev = ithLetter(s.charAt(i - 1)); 
        int curr = ithLetter(s.charAt(i));
        if (prev > curr) {
            return false;
        }
        return true;
    }
}

char ithletter(int i) {
    return (char) (((int) 'a')+ i);
}

// generate all strings takes O(26^k), check isInOrder takes O(k)
// => Time Complexty: O(k*26^k)