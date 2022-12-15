/* В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. 
Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. 
Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль. */

let array = [-12,-32,-43,-3,-1], num = 3;

function queue(num, ...array) {
    let sum = 0;
    array.sort((a, b) => a - b);
    for (let i = 0; i < num; i++) {
        sum += array[i];
    }
    return sum
}

console.log(queue(num, ...array));