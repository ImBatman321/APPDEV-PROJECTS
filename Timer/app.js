document.addEventListener('DOMContentLoaded', () => {
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
});