let nums = [3, 2, 4];
let target = 6;

function twoSum(nums, target) {
    try{
    const numMap = new Map;
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        console.log('jhhj')
        console.log(complement)
        if (complement in numMap){
            return [numMap[complement], i]
        }else{
            numMap[nums[i]] = i; 
        }
    }
}catch(error) {
    console.error(error)
}
}

let answer = twoSum(nums, target);
console.log(answer);