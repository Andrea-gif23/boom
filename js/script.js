
const userInput = document.getElementById('userInput');
const countdownDisplay = document.getElementById('countdown');
const resultDisplay = document.getElementById('result');
const restartButton = document.getElementById('restart');


function startGame() {
   
    resultDisplay.textContent = '';
    countdownDisplay.textContent = '';

   
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
   
    let countdown = 5;
    const countdownInterval = setInterval(() => {
        countdownDisplay.textContent = `Cuenta atrás: ${countdown} segundos`;
        countdown--;

        
        if (countdown < 0) {
            clearInterval(countdownInterval);  
            evaluateGame(randomNumber); 
        }
    }, 1000);
}


function evaluateGame(randomNumber) {
    const userNumber = parseInt(userInput.value);

    if (userNumber === randomNumber) {
        resultDisplay.textContent = `¡Has salvado el mundo! El número correcto era: ${randomNumber}`;
    } else {
        resultDisplay.textContent = `La bomba ha estallado. El número correcto era: ${randomNumber}`;
    }
}


function restartGame() {
    userInput.value = ''; 
    startGame(); 
}


userInput.addEventListener('input', () => {
    if (userInput.value >= 1 && userInput.value <= 3) {
        startGame();
    }
});


restartButton.addEventListener('click', restartGame);


window.onload = () => {
    startGame();
};
