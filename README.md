# codility-practice-question-1-group-2

## Description
This repository contains a JavaScript solution for finding a pair of strings in an array that share a common letter at some index.

## Usage
1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the directory containing the JavaScript file.
4. Copy the code and run it in a coding playground like codepen.io or jsfiddle.net


# codility-practice-question-2-group-2

This solution checks whether all occurrences of the letter 'a' precede all occurrences of the letter 'b' in a given string.

## Algorithm

The algorithm works as follows:

1. Find the index of the last occurrence of 'a' in the string.
2. Find the index of the last occurrence of 'b' in the string.
3. If the index of the last occurrence of 'a' is greater than the index of the last occurrence of 'b', return 0 (indicating 'a' occurs after 'b').
4. Otherwise, return 1 (indicating 'a' occurs before or at the same position as 'b').

## Time Complexity

The time complexity of this solution is O(n), where n is the length of the input string. This is because it iterates over the string once to find the last occurrences of 'a' and 'b'.

## Usage

To use this solution, simply copy the code and paste it and then run it in a coding playground like codepen.io or jsfiddle.net