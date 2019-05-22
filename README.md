#Start Closest to ZERO

## Statement
Write a function “closestToZero()” described by the following specification:
given an array of positive and negative integers, it returns the closest number to zero
if there is a negative and a positive number, the function returns the positive one
if the input array is undefined or empty, the function returns 0

Examples:
when input is [8, 5, 10] it must returns 5
when input is [5, 4, -9, 6, -10, -1, 8] it must return -1
when input is [8, 2, 3, -2] it must return 1

## Programing Steps

**1. Thoughts about the problem**

    First of, when I read the statement, I noticed an error in the last example "it must return 1". I believe it is meant the index 1 so the value is 2.

    In addition, in my way of thinking, I immediatly start thinking "should I sort the array" ? Some algorithm may be more efficient once the array is sorted. So I will implement 2 methods: one which works on an unsorted array, the second one that preprocess the array to sort it.

<br />

**2. Solving the problem (without sorting first)**

    I start the implementation with a simple module which contains the functions. I also add the test file (jest) that will be used to run the tests on the functions.

<br />

    When dealing with positive an negative number, we often required to use absolute value to make the comparison process easier. While keeping the index of the minimum positive value, we are able to keep the sign of the value while only
    dealing with positive integers when comparing numbers to each other. Therefore
    we just have to look for the minimal absolute value. 

<br />

    We also need to consider an early stoping when a 0 is found in the array.


**3. Solving the problem (with sorting first)**

    Sorting the array first gives the opportunity to search the array more efficiently either by using dichotomy (up to O(log n)) or by using more simple approach with early stopping as soon as the positive integers are increasing.

    Both have advantages and drawbacks depending on the size of the array. I choose to implement the one without dichotomy.