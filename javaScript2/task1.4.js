/* В программе объявлена переменная road со строковым значением, которая задает протяженность дороги. 
Необходимо из строки убрать подстроку km, оставив только численное значение. 
Его необходимо конвертировать в мили, округлить до одного знака после запятой, а результат вывести в консоль. 
Помните, что 1 километр равен 0,62 мили. */

let road = "15 km";

function kmToMiles(road) {
    return Number((parseFloat(road) * 0.62).toFixed(1));
}

console.log(kmToMiles(road));