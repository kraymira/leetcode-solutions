/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...arr].sort((a,b) => a - b);
    let map = {};
    let rank = 1;
    for(let i = 0; i < sorted.length;i++){
        if(map[sorted[i]]=== undefined){
            map[sorted[i]] = rank;
            rank++;
        }
    }
}

//faster_solution
var arrayRankTransform = function(arr) {
    let sorted =[...arr].sort((a,b)=>a-b)
    let rankesMap = new Map()
    let result=[];

    rankesMap.set(sorted[0],1);//why?
   // console.log(rankesMap)

    for(let i=1;i<sorted.length;i++){
        if(sorted[i]>sorted[i-1])
            rankesMap.set(sorted[i],rankesMap.get(sorted[i-1])+1)
        else rankesMap.set(sorted[i],rankesMap.get(sorted[i-1]))
    }

    for(let x of arr){
        result.push(rankesMap.get(x))
    }
    return result;
};

console.log(arrayRankTransform([40,10,20,30])+'\n');
console.log(arrayRankTransform([100,100,100])+'\n');
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])+'\n');



