int sqrt(int n)
{
    for (int guess = 1; guess * guess <= n; guess++)
    {
        if (guess * guess == n)
        {
            return guess;
        }
    }
    return -1;

}

// runtime: sqrt(n)