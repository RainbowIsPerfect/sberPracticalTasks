/* В программе объявлена переменная list, в которой записан массив из строковых значений. 
Напишите программу, которая считает количество элементов в массиве list без учета элементов со значением "default" и выводит результат в консоль. 
Сравнение должно быть регистронезависимым. */

let list = ["Лёша", "DefAult", "полке", "клопа", "нашёл"];

let result = 0;

for (let i = 0; i < list.length; i++) {
    if (list[i].toLocaleLowerCase() === 'default') {
        continue;
    } else {
        result++;
    }
}

console.log(result);