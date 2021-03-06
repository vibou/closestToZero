# Start Closest to ZERO
## Run the project

This project is developped using nodejs.

```shell
npm install
npm run test
```

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

__1. Thoughts about the problem__
  First of, when I read the statement, I noticed an error in the last example "it must return 1". I believe it is meant the index 1 so the value is 2.

  In addition, in my way of thinking, I immediatly start thinking "should I sort the array" ? Some algorithm may be more efficient once the array is sorted. So I will implement 2 methods: one which works on an unsorted array, the second one that preprocess the array to sort it.

<br />

__2. Solving the problem (without sorting first)__
  I start the implementation with a simple module which contains the functions. I also add the test file (jest) that will be used to run the tests on the functions.

<br />

  When dealing with positive an negative number, we often required to use absolute value to make the comparison process easier. While keeping the index of the minimum positive value, we are able to keep track of where the real value is. We then just have to look for the minimal absolute value.
  
<br />
  We also need to consider an early stoping when a 0 is found in the array.

<br />
<br />

__3. Solving the problem (with sorting first)__
  Sorting the array first gives the opportunity to search the array more efficiently either by using dichotomy (up to O(log n)) or by using more simple approach with early stopping as soon as the positive integers are increasing.

  Both have advantages and drawbacks depending on the size of the array. I choose to implement the one without dichotomy.


## Conclusion

I finish the implementation within this following time frame:

- __Wed May 22 21:34:31 2019 +0200__ - *0 min* - Start Project
- __Wed May 22 21:44:00 2019 +0200__ - *10 min* - Write some documentation + Reflexion
- __Wed May 22 22:10:03 2019 +0200__ - *26 min* - Finish simple implementation with tests
- __Wed May 22 22:29:57 2019 +0200__ - *19 min* - Finish early stopping implementation on sorted array with tests


__Total Time__ - *55 min*