/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(number) {
    let s = number.toString().split('');
    let reversed = [...s].reverse()

    return JSON.stringify(s) === JSON.stringify(reversed)
};

/**
 * Without conversion from number
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
    // Handle negative numbers early
    if (x < 0) return false;
    
    let reversed = 0;
    let original = x;
    
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    return reversed === original;
};