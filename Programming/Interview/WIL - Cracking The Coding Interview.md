- [The Interview Process](#the-interview-process)
- [Behind The Scenes](#behind-the-scenes)
- [4 Modes of Interviewers](#4-modes-of-interviewers)
- [Big O](#big-o)
  - [Definition](#definition)
  - [Analogy](#analogy)
  - [Time Complexity](#time-complexity)
    - [  Big O, Big Theta, Big Omega](#-big-o-big-theta-big-omega)
    - [   Best Case, Worst Case, Expected Case](#--best-case-worst-case-expected-case)
  - [Space Complexity](#space-complexity)


# The Interview Process

- At top tech companies, algorithm and coding problems form the largest component of the interview process. During the interview, try your best to talk out loud and explain your thought process as you probably won't get the answer in the limited time frame.
- 3 main areas of interviewees including analytical skills, coding skills, computer-science fundamentals are assessed.
- Interviewers assess candidates' performance based on relative comparision with other interviewees' performance.
- Interview process is a process. It has its own mechanism and output target. Use your skill and knowledge to satisfy the output target.

# Behind The Scenes

> At Microsoft, interviewers want to see that you're passionate about technology.
> At Amazonn, scalability and design are usually paid attention to. There's a bar raiser who is responsible for raising talent standard in the company.
> At Google, you should also pay attention to System Scalability and Design.


# 4 Modes of Interviewers

- Sanity Check: Quick & Basic questions
- Quality Check: More Challenging questions
- Specialists Questions: Test knowledge of specifice topics
- Proxy Knowledge


# Big O 

## Definition
> Big O time is the metric and language used to describe algorithm efficiency. This concept is extremely important as to measure performance of algoriethm

## Analogy
> &nbsp;A good analogy for Big O is the "file transfer" problem. The problem is what is the best way to transfer a file to a friend over the sea. <br>
 <br>
  &nbsp;If the file is light (several GBS) so you could send it over email and we call this method electronic transfer. However, if the file is several tetrabytes in size, it's better to send it by an airplane. <br>
  <br>
  &nbsp;As we can see, with the electronic method, the time it takes to send the file relies heavily on its size. The bigger the file, the longer it takes to send the file. We call the runtime of this method: O(s). <br>
  <br>
  &nbsp;With the airplane transfer method, the time it takes to transfer the file is independent of its size. So, the run time of this method is O(1) <br>

## Time Complexity

### &nbsp; Big O, Big Theta, Big Omega

> - Big O: Big O describes the upper bound in time of an algorithm. The algorithm is at least as fast as O(N) can also be described as at least as fast as O(N^2) or O(N^3)
> - Big Omega Ω: Big Omega describes the lower bould in time of algorithm. The algorithm is at lease as slow as Ω(N) can also be decribes as at lease as slow as Ω(NlogN) or Ω(1).
> - Big Theta Θ: Big Theta describes both Big O and Big Ω.
> Big O and Big Θ are interchangeably used in industry. Big O is really closed to Big Θ. And in this book, we try to describe Big O to offer the tightest description of the runtime as closest to Big Theta.

### &nbsp;  Best Case, Worst Case, Expected Case

> - I made a mistake to think that there's a relationship between Big O, Big Theta, Big Omega and Best Case, Worst Case, Expected Case. But It is not.
> - Best Case, Worst Case, Expected Case describe Big O (or Big Theta) time for particular inputs or scenarios.

## Space Complexity
&nbsp; We also have to care about the amount of memory or space required by an algorithm.

> - If we need to create an array of size n, this will require O(n) space. If we need 2-dimentional array of size nxn, this will require O(n^2) space.


52