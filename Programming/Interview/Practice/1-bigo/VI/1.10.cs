int sumDigits(int n) { int sum= 0;
    while (n > 0) {
        sum+= n %10;
        n /= 10; 
    }
    return sum;
}

// The runtime equals to the number of digits derived from the number.
// We can see the fact that 1 digit can generate a number of up to 10^1 - 1
// 2 digits can generate a number of up to 10^2 -1
// 3 digits can gernerate a number of up to 10^3 - 1
// 4 digits ... 10^4 - 1
// d digits can generate a number of up to 10^d - 1

---

// d digits can generate a number from 10^(d-1) to 10^d - 1


// a number n can be formed by a number of d digits 
//  10^(d-1) <= n <= 10^d - 1
// => log(n+1) <= d <= log(n) + 1
// d <= log(n) + 1
// Runtime: log(n) 



