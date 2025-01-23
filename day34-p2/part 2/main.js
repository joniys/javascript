let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = "";
}

function checkGuess() {
    const guess = Number(document.getElementById('guess').value);
    const messageElement = document.getElementById('message');
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess < secretNumber) {
        const difference = secretNumber - guess;
        messageElement.textContent = `Too low! You're off by ${difference}. Try again.`;
    } else if (guess > secretNumber) {
        const difference = guess - secretNumber;
        messageElement.textContent = `Too high! You're off by ${difference}. Try again.`;
    } else {
        messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
}

function resetGame() {
    startGame();
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = 'Game reset. Try guessing again!';
}

startGame();
