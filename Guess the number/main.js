const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
const gameScrean = document.querySelector('.game_result');
const input = document.querySelector('#inputGuess');
const btnGuess = document.querySelector('#btnGuess');
const liveCounter = document.querySelector('.live_countert');
const tryCounter = document.querySelector('.try_countert');
const scoreCounter = document.querySelector('.score_counter');
btnStart.addEventListener('click', () => {startStop()});
btnStop.addEventListener('click', () => {startStop()});
btnGuess.addEventListener('click', () => {guessNum()})
let statusGame = false;
let trys = 0;
let life = 5;
let score = 0;
let num;

function startStop() {
    if (statusGame == false) {
        btnStart.classList.toggle("hide");
        btnStop.classList.toggle("hide");
        statusGame = true;
        num = getRandomInt(10);
        console.log(num);
        btnGuess.disabled = false;
    } else {
        btnStart.classList.toggle("hide");
        btnStop.classList.toggle("hide");
        statusGame = false;
        btnGuess.disabled = true;
        gameScrean.textContent = "Press start";
    }
}

function getRandomInt(max) {
    renderBar()
    gameScrean.textContent = 'I thought of a number from 0 to 10, guess!'
    return Math.floor(Math.random() * max);
}

function renderBar() {
    tryCounter.textContent = `${trys}`;
    liveCounter.textContent = `${life}`;
    scoreCounter.textContent = `${score}`;
}

let guessNum = () => {
    if (Number(input.value) == num) {
        gameScrean.textContent = 'You guessed it right! You got +1 life)';
        trys++;
        life++;
        score++;
        num = getRandomInt(10)
    } else if (Number(input.value) > num) {
        gameScrean.textContent = 'Try a smaller number';
        life--;
        trys++;
    } else {
        gameScrean.textContent = 'Try a bigger number';
        life--;
        trys++;
    }
    if (life != 0) {
        renderBar();
    } else {
        gameScrean.textContent = `You've run out of lives. Your score is ${score}`;
        trys = 0;
        life = 5;
        score = 0;
        startStop()
    }
    input.value = '';
}