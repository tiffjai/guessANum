document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const message = document.getElementById('message');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
            document.body.style.backgroundColor = '#32CD32';  // Change background color to green
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
        } else {
            message.textContent = 'Too high! Try again.';
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    });
});
