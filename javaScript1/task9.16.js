/* В программе объявлена переменная list, в которую записан массив из строковых значений. 
Сформируйте строку из первых букв каждого элемента массива и выведите ее в консоль. 
Гарантируется, что каждый элемент массива не нулевой длины. */

let list = ["почтовый","желание","абсолютный","закрытый"];

let result = '';

for (let i = 0; i < list.length; i++) {
    result += list[i].charAt(0);
}

console.log(result);