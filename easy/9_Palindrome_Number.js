/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(number) {
    if (number < 0) return false;

    let s = number.toString().split('');
    let reversed = [...s].reverse()

    return JSON.stringify(s) === JSON.stringify(reversed)
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
