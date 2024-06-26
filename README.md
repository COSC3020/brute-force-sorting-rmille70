[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them? 

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


My best case input is a accending ordered list with a time compexity of $\Theta(n)$, since we only need to iterate the list once to ensure its sorted. The worst case input is a decending ordered list with a complexity of $\Theta(n * n!)$ since we would have to iterate n! times, and in each iteration the linear function checkSorted() would iterate. Due to the properties of permutation sort there isn't really a useful bound for the average case for my implementation. If a permutation sort function cannot use memory and creates permutations randomly, there is no way of implementing oversight to ensure a randomly generated permutation hasn't already been checked. If the function doesn't keep track of the permutations already attempted, then it could potentially regenerate the same non-sorted permutations infinitely. Thus the complexity cannot be bounded since we can't gaurentee that the function will randomly generate a sorted list.