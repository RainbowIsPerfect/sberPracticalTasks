/* В программе объявлена переменная data, в которой записано строковое значение. Напишите функцию getNumber(data), 
которая преобразовывает строку в число по следующему правилу:
если переменная data содержит не число, функция должна вернуть численное значение 0;
если переменная data содержит число, например "123", то функция возвращает числовое значение 123.
Вызовите эту функцию и выведите результат в консоль. */

//let data = "5234px";

function getNumber(data) {
    if (isNaN(parseInt(data))) {
        return 0;
    } else {
        return parseInt(data);
    }
}

console.log(getNumber(data));

