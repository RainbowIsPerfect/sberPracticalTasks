/* В программе объявлена переменная obj, содержащая объект с подобным набором значений:
{
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
Напишите скрипт, который формирует новый объект со значениями и их количеством. Выведите новый объект в консоль. */

const obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
};
const countItems = {};
let list = Object.values(obj);

for (const item of list) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
console.log(countItems);