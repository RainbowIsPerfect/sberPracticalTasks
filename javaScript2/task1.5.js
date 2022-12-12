/* В программе задана переменная words со строковым значением. 
Напишите условный оператор, который выводит в консоль сообщение 'В строке больше одного слова', если строка содержит больше одного слова, 
в ином случае в консоль должна выводиться фраза 'В строке одно слово.' */

let words = "Солнечная панель";

function moreThenOneWord(words) {
    return words.trim().includes(' ') ? 'В строке больше одного слова' : 'В строке одно слово';
}

console.log(moreThenOneWord(words));