const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});

// Counter
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.button-container .btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) count--;
        else if (styles.contains('increase')) count++;
        else if (styles.contains('decreaseFive')) count -= 5;
        else if (styles.contains('increaseFive')) count += 5;
        else if (styles.contains('random')) count = Math.floor(Math.random() * 200) - 100;
        else count = 0;

        value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
        value.textContent = count;
    });
});

// Picker
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// Timer
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');

let countdownInterval;
let timeLeft = 30;

function updateDisplay() {
    timerDisplay.textContent = timeLeft;
}

function startTimer() {
    if (countdownInterval) return; // Prevent multiple intervals

    countdownInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            startButton.disabled = false; // Re-enable the button if needed
        }
    }, 1000);
}

startButton.addEventListener('click', () => {
    startButton.disabled = true; // Disable the button once clicked
    startTimer();
});

updateDisplay(); // Initialize display