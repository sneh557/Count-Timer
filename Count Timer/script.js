let timerInterval;
let startTime;
let elapsedTime = 0;
let timerRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');
const scoreMessage = document.getElementById('scoreMessage');

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
        hideScoreMessage(); // Hide score message if shown
    }
}

function stopTimer() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

function restartTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    showScoreMessage();
    elapsedTime = 0;
    updateTimerDisplay(elapsedTime);
    
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateTimerDisplay(elapsedTime);
}

function updateTimerDisplay(time) {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const hoursStr = padTime(hours);
    const minutesStr = padTime(minutes);
    const secondsStr = padTime(seconds);
    const millisecondsStr = padTime(milliseconds);

    timerDisplay.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function showScoreMessage() {
    const formattedTime = formatElapsedTime(elapsedTime);
    scoreMessage.textContent = `Your Timer Score: ${formattedTime}`;
    scoreMessage.style.display = 'block';
}

function hideScoreMessage() {
    scoreMessage.style.display = 'none';
}

function formatElapsedTime(time) {
    const totalMilliseconds = time;
    const totalSeconds = Math.floor(time / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    const milliseconds = totalMilliseconds % 1000;

    const hoursStr = padTime(hours);
    const minutesStr = padTime(minutes);
    const secondsStr = padTime(seconds);
    const millisecondsStr = padTime(milliseconds);

    return `${hoursStr}:${minutesStr}:${secondsStr}.${millisecondsStr}`;
}


