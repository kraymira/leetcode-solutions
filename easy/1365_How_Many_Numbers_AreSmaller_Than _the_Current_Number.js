//O(n^2)
var smallerNumbersThanCurrent = function(nums) {
    nums.sort((a,b) => a - b); 
    let smallerCounts = [];
    for(let i = 0; i < nums.length; i++){
        let amount = 0;
        for(let j = i; j < nums.length; j++){
            if(nums[i]<nums[j]){
                amount++;
            }
        }
        smallerCounts.push(amount);
    }
    return smallerCounts;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let map = {};
    let sorted = [...nums].sort((a,b) => a - b);
    console.log(`\nsorted:${sorted}`)
    for (let i = 0; i < sorted.length; i++) {
       if (map[sorted[i]] === undefined) {
            map[sorted[i]] = i
     }
    }
    console.log(map[11])
    console.log(nums.map(num => map[num]))
    return nums.map(num => map[num]);
    
};

smallerNumbersThanCurrent([1,9,8,8,11])
