// Algorithm
/*

function takes in a string
call the split() method on the string to return an array
call the lastIndexOf() method on the array to find the last index of a as well as b
if the last index of a > b return 0 
else return 1

*/

/*

// Solution #1
//this solution may be a bit expensive compared to solution #2 even though they both have a big O notation of O(n) 
function solution(S) {
    const arr = S.split('');
    const lastIndexOfA = arr.lastIndexOf('a');
    const lastIndexOfB = arr.lastIndexOf('b');
    if (lastIndexOfA > lastIndexOfB) {
        return 0;
    } else {
        return 1;
    }
}

// Test cases
console.log(solution("aabbb")); // Expected output: 1
console.log(solution("ba"));    // Expected output: 0
console.log(solution("aaa"));   // Expected output: 1
console.log(solution("b"));     // Expected output: 1
console.log(solution("abba"));  // Expected output: 0

*/

//Solution #2
//in this solution we make use of the lastIndexOf() method on the string itself aka index-based access since our objective is just to compare the positions of the letter a against the letter b
//the big O notation for this solution is O(n), indicating that the time taken by the algorithm grows linearly with the size of the input string.
//this operation is less expensive because it doesn't have an extra step for converting the string to an array which could cause issues when handling larger sets of data
function solution(S) {
    const lastIndexOfA = S.lastIndexOf('a');
    const lastIndexOfB = S.lastIndexOf('b');
    if (lastIndexOfA > lastIndexOfB) {
        return 0;
    } else {
        return 1;
    }
}
// Test cases
console.log(solution("aabbb")); // Expected output: 1
console.log(solution("ba"));    // Expected output: 0
console.log(solution("aaa"));   // Expected output: 1
console.log(solution("b"));     // Expected output: 1
console.log(solution("abba"));  // Expected output: 0