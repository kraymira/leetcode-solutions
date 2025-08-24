// var isValid = function(s) {
//     let openingSet = '[{(';
//     let stack = [];
//     let map = {']':'[', ')':'(', '}':'{'}
//     if(s.length%2 === 0 ){
//     for(let i = 0; i < s.length;i++){
//         if(openingSet.includes(s[i])){
//             stack.push(s[i]);
//         }else if(stack[stack.length - 1] === map[s[i]]){
//             stack.pop();
//         }else 
//             return false;
//     }
//     return(stack.length == 0);
// }else return false
// };

var isValid = function(s) {
    const map = { ')': '(', ']': '[', '}': '{' };
    const stack = [];

    for (let ch of s) {
        console.log(`ch:${ch} \n map[ch]: ${map[ch]}\n`);
        if (map[ch]) {  
            // if it's a closing bracket
            if (stack.pop() !== map[ch]) return false;
        } else {
            // opening bracket
            stack.push(ch);
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("[[[["));
console.log(isValid("([])"));
console.log(isValid("["));
console.log(isValid(")(){}"));
// console.log(isValid("()[]{}"));
// console.log(isValid("()[]{}"));
