// реализуйте функцию bubbleSort на JavaScript, которая:

//     Принимает массив чисел

//     Возвращает новый отсортированный массив по возрастанию

//     Использует алгоритм пузырьковой сортировки

//     (Дополнительно) Оптимизируйте алгоритм, чтобы он завершался досрочно, если массив уже отсортирован

// 💡 Примеры использования
// javascript

// console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
// console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5] (уже отсортирован)
// console.log(bubbleSort([10, 9, 8, 7, 6])); // [6, 7, 8, 9, 10]

// TODO: make func to work with asc order and desc order 
var bubbleSorting = function(array){

    for (let i = 0; i< array.length; i++){
        for(let j = 0; j< array.length; j++) {
            console.log(array)
            if(array[j]< array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
        }
         return array;
    }
    
console.log(bubbleSorting([9,12,4,17,0,35,0,88,9]));

