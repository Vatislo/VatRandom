const body = document.body
const randomButton = document.getElementById('random-button')
const bodyBackList = [
    "autumnSeptember",
    "autumnOctober",
    "autumnNovember",
    "winterDecember",
    "winterJanuary",
    "winterFebruary",
    "springMarch",
    "springApril",
    "springMay",
    "summerWTF",
]
let bodyBackImg

function getCustomDate() {
    let month = new Date().getMonth()
    if (month < 9) { month += 12 }
    month -= 8
    return { month }
}
const customDate = getCustomDate()

for (let i = 0; i < bodyBackList.length; i = i + 1) {
    if (customDate.month === i) {
        bodyBackImg = bodyBackList[i]
        break
    }
}

body.style.backgroundImage = `url('./img/${bodyBackImg}.jpg')`

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('random-button').addEventListener('click', function() {
    const minNum = document.getElementById('min-num').value;
    const maxNum = document.getElementById('max-num').value;

    const minNumValue = parseInt(minNum, 10);
    const maxNumValue = parseInt(maxNum, 10);
    if (isNaN(minNumValue) || isNaN(maxNumValue) || minNumValue >= maxNumValue) {
        alert('Самый умный?');
        return;
    }

    if (minNumValue < -1000 || maxNumValue > 1000) {
        alert('Числа поменьше пожалуйста');
        return;
    }

    const randomNumber = getRandomInteger(minNumValue, maxNumValue);

    document.querySelector('.number').textContent = randomNumber;
});