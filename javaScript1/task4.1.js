/* В программе задана переменная speed с числовым значением. Реализуйте программу, которая в зависимости от условия выполняет следующее действие:
если значение от 0 до 30 включительно, выведите строку Вы едете слишком медленно;
если значение от 31 до 70 включительно, выведите строку Вы едете с нормальной скоростью;
в ином случае выведите Вы едете слишком быстро, сбавьте скорость. */

//let speed = 60;

if (speed >= 0 && speed <= 30) {
    console.log("Вы едете слишком медленно");
} else if (speed >= 31 && speed <=70) {
    console.log("Вы едете с нормальной скоростью");
} else {
    console.log("Вы едете слишком быстро, сбавьте скорость");
}