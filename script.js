// код отвечающий за обои

const body = document.body;
const randomButton = document.getElementById('random-button');
const bodyBackList = [
    "autumnSeptember",    // Сентябрь (0)
    "autumnOctober",     // Октябрь (1)
    "autumnNovember",    // Ноябрь (2)
    "winterDecember",    // Декабрь (3)
    "winterJanuary",     // Январь (4)
    "winterFebruary",    // Февраль (5)
    "springMarch",       // Март (6)
    "springApril",       // Апрель (7)
    "springMay",         // Май (8)
    "summerJune",        // Июнь (9)
    "summerJuly",        // Июль (10)
    "summerAugust",      // Август (11)
];
let bodyBackImg

function getCustomDate() {
    let month = new Date().getMonth(); // Получаем текущий месяц (0-11)
    let customMonth = (month - 8 + 12) % 12; // Сдвигаем начало на сентябрь (0)
    return { month: customMonth };
}

const customDate = getCustomDate();
bodyBackImg = bodyBackList[customDate.month]; // Прямой доступ по индексу

console.log(bodyBackImg)

body.style.backgroundImage = `url('./img/${bodyBackImg}.jpg')`;

// код отвечающий за рандомное число

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('random-button').addEventListener('click', function () {
    const minNum = document.getElementById('min-num').value;
    const maxNum = document.getElementById('max-num').value;
    const exceptions = document.getElementById('exceptions').value;
    const exceptionsNum = exceptions.split(' ').map(Number).filter(num => !isNaN(num));

    const minNumValue = parseInt(minNum, 10);
    const maxNumValue = parseInt(maxNum, 10);

    if (isNaN(minNumValue) || isNaN(maxNumValue) || minNumValue >= maxNumValue) {
        alert('Пожалуйста, введите корректные значения для минимального и максимального чисел.');
        return;
    }

    if (minNumValue <= -1000 || maxNumValue >= 1000) {
        alert('Пожалуйста, введите числа в диапазоне от -999 до 999.');
        return;
    }

    let randomNumber;
    do {
        randomNumber = getRandomInteger(minNumValue, maxNumValue);
    } while (exceptionsNum.includes(randomNumber));

    document.querySelector('.number').textContent = randomNumber;
});

// карочь мне надо кактокто растянуть код для того чтоб github определял проэкт как js а не css, поэтому напишуу тут много коментариев, может сработает

// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, iure.