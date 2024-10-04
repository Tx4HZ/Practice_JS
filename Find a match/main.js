// Рендер поля с картами
function renderField(arr) {
    for (let index = 0; index < arr.length; index++) {
        for (let i = 0; i < arr[index].length; i++) {
            // document.write(`<span data-id="${arr[index][i].ID}">${arr[index][i].image}</span>`);
            /*
             TODO: не забыть изменить!
            */
            document.write(`
                <div class="card">
                    <span class="card-front">${arr[index][i].image}</span>
                    <span class="card-back">${arr[index][i].ID == "Lucky"?"L":arr[index][i].ID}</span>
                </div>
                `)
        }
    }
}

function getField(y = 2, x = 2) {
    //Генерация одномерного массива объектов длина = x * y
    let array = new Array(x * y);
    for (let i = 0; i < array.length; i+=2) {
        array[i] = {ID: i, image: "🃏 "};
        if (i+1 < array.length) {
            array[i+1] = {ID: i, image: "🃏 "};
        } else { array[i] = {ID: "Lucky", image: "🃏 "}}
    }

    // Тасование Фишера — Йетса
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i]; array[i] = array[j]; array[j] = t;
        // [array[i], array[j]] = [array[j], array[i]]; - Не стал юзать, ибо плохо читаемо (деструктурирующее присваивание)
    }

    //"Пилим" массив на двухмерный
    let size = y;
    let subarray = [];
    for (let i = 0; i < Math.ceil(array.length/size); i++) {
        subarray[i] = array.slice((i*size), (i*size) + size)
    }
    renderField(subarray)
    return subarray;
}

let test = getField(3,3);
console.log(test)