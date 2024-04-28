//algorithm
/*

1. Initialize an empty object positions.
2. Iterate over each string in array S.
    // For each string, iterate over each character and store its position in positions.
3. Iterate over each string in array S.
    // For each string, iterate over each character.
    // If the character at the current position exists in positions, return the indices of the current string and the string found in positions along with the common position.
4. If no pair is found, return an empty array.

*/


//pseudocode 
/*

function solution(S):
    positions = {} // Initializing an empty object

    // Iterating over each string in array S
    for i from 0 to S.length - 1:
        string = S[i]
        
        // Iterating over each character in the string
        for j from 0 to string.length - 1:
            character = string[j]
            // Store the position of the character in the positions object
            if character not in positions:
                positions[character] = [i, j]
    
    // Iterating over each string in array S
    for i from 0 to S.length - 1:
        string = S[i]
        
        // Iterating over each character in the string
        for j from 0 to string.length - 1:
            character = string[j]
            // If the character exists in positions and the indices are not the same
            if character in positions and positions[character][0] != i:
                // Return the indices and the common position
                return [i, positions[character][0], j]
    
    // If no pair is found, return an empty array
    return []


*/


// Solution
function solution(S) {
    let positions = {};

    // Store the positions of characters in the positions object
    for (let i = 0; i < S.length; i++) {
        let string = S[i];
        for (let j = 0; j < string.length; j++) {
            let character = string[j];
            if (!positions[character]) {
                positions[character] = [i, j];
            }
        }
    }

    // Find the pair of strings with a common letter
    for (let i = 0; i < S.length; i++) {
        let string = S[i];
        for (let j = 0; j < string.length; j++) {
            let character = string[j];
            if (positions[character] && positions[character][0] !== i) {
                return [i, positions[character][0], j];
            }
        }
    }

    // If no pair is found, return an empty array
    return [];
}

// Test cases
console.log(solution(["abc", "bca", "dbe"])); // [0, 2, 1]
console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"])); // [0, 1, 3] or [1, 3, 0]
console.log(solution(["gr", "sd", "rg"])); // []
console.log(solution(["bdafg", "ceagi"])); // [0, 1, 2]
