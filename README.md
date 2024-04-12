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


The best case for my implementation is $\Theta(n!)$, my best case input is a accending ordered list with a time compexity of $\Theta(n)$, since we only need to iterate the list once to ensure its sorted. The worst case input is a decending ordered list with a complexity of $\Theta(n * n!)$ since we would have to iterate n! times, and in each iteration the linear function checkSorted() would iterate. If the function was not systematic and created its permutations randomly, assumming the implementation stores each permutation and compares each new permutation to it, that would be $\Theta(n^3 * n!)$ since you would have to create a new random permutation (n assuming Fisher-Yates Shuffle), linearly compare that permutation to all those already created(n * n!), and then linearly check each one to see if its sorted (n). 