/*
    1. inputCalkSquer - определяем инпут для стороны квадрата
    2. Вешаем обработчик на inputCalkSquer, который при вводе значения
    изменяет значение площади и периметра.
*/

const inputCalkSquer = document.querySelector("#squareSide");

inputCalkSquer.addEventListener('keyup', function() {
    document.querySelector("#AreaS").textContent = inputCalkSquer.value * inputCalkSquer.value;
    document.querySelector("#PerimeterS").textContent = inputCalkSquer.value * 4;
});

/*
    1. inputCalkRecOne и inputCalkRecTwo - определяем инпут для сторон прямоугольника
    2. Создаем функцию calkRec() - которая вызывается по клику на кнопку и заполняет
    значение Area и Perimeter.
*/

const inputCalkRecOne = document.querySelector("#rectangleSide1");
const inputCalkRecTwo = document.querySelector("#rectangleSide2");

function calkRec() {
    if (inputCalkRecOne.value != '' || inputCalkRecTwo.value != '') {
        document.querySelector('#AreaR').textContent = inputCalkRecOne.value * inputCalkRecTwo.value;
        document.querySelector('#PerimeterR').textContent = (inputCalkRecOne.value * inputCalkRecTwo.value)*2;
    } else {alert("Заполните оба поля")}
}

/*
    1. inputCalkRadius - определяем инпут для радиуса окружности
    2. Вешаем обработчик на inputCalkRadius, который при вводе значения
    изменяет значение площади и длины окружности.
*/

const inputCalkRadius = document.querySelector("#Radius");

inputCalkRadius.addEventListener('keyup', function() {
    document.querySelector("#AreaC").textContent = 2 * Math.PI * inputCalkRadius.value
    document.querySelector("#PerimeterC").textContent = (Math.PI * inputCalkRadius.value ** 2)
});

/*
    Make a calculator that will find the area of ​​a triangle based on three sides.
*/

const inputTri1 = document.querySelector("#TriangleSide1");
const inputTri2 = document.querySelector("#TriangleSide2");
const inputTri3 = document.querySelector("#TriangleSide3");

function calkTri() {
    let perimeter = Number(inputTri1.value) + Number(inputTri2.value) + Number(inputTri3.value);
    let halfP = perimeter/2;
    document.querySelector('#AreaT').textContent = perimeter;
    document.querySelector('#PerimeterT').textContent = Math.sqrt(halfP * (halfP - inputTri1.value) * (halfP - inputTri2.value) * (halfP - inputTri3.value))
}

let elems = document.querySelectorAll('.triangle');
console.log(elems[0])