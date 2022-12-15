/* В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. 
Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль. */

const article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}, author = {
    name: "Ричард М.В.",
    age: 43
};

function concatObjects(article, author) {
    return Object.assign({}, article, author)
}

console.log(concatObjects(article, author));