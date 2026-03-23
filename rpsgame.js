// Base Scores to add
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const maxPoints = 5; // Max Points
document.getElementById("playagain").style.display = "none"; // Play again button hidden

// Simple function to generate a random number to decide computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        document.getElementById('consoleComputerChoice').textContent = 'Computer chose Rock!';
        return "rock"
    } else if (randomNumber === 1) {
        document.getElementById('consoleComputerChoice').textContent = 'Computer chose Paper!';
        return "paper"
    } else {
        document.getElementById('consoleComputerChoice').textContent = 'Computer chose Scissors!';
        return "scissors"
    };
};

// Function which gets the results from clicking on the buttons to play a round.
function playRound(humanChoice, computerChoice) {    
    computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        document.getElementById('consoleHumanChoice').textContent = 'You choose Rock.';
        document.getElementById('consoleText').textContent = "You scored a point!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        document.getElementById('consoleHumanChoice').textContent = 'You choose Paper.';
        document.getElementById('consoleText').textContent = "You scored a point!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        document.getElementById('consoleHumanChoice').textContent = 'You choose Scissors.';
        document.getElementById('consoleText').textContent = "You scored a point!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        document.getElementById('consoleHumanChoice').textContent = 'You choose Paper.';
        document.getElementById('consoleText').textContent = "The computer scored a point!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        document.getElementById('consoleHumanChoice').textContent = 'You choose Scissors.';
        document.getElementById('consoleText').textContent = "The computer scored a point!";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        document.getElementById('consoleHumanChoice').textContent = 'You choose Rock.';
        document.getElementById('consoleText').textContent = "The computer scored a point!";
        computerScore++;
    };
    // Draw possibilities
    if (humanChoice === computerChoice) {
        document.getElementById('consoleHumanChoice').textContent = '';
        document.getElementById('consoleComputerChoice').textContent = '';
        document.getElementById('consoleText').textContent = "Both players selected the same! It's a draw!";
        drawScore++;
        document.getElementById('drawScore').textContent = "DRAWS: "+ drawScore;
        if (drawScore === maxPoints) {
            document.getElementById('consoleText').textContent = "The Game is over, click on the button to play again!";
            document.getElementById("rockbutton").style.display = "none";
            document.getElementById("scissorsbutton").style.display = "none";
            document.getElementById("paperbutton").style.display = "none";
            document.getElementById("playagain").style.display = "block"; 
    }; // Max points comparator has to be inside draw possibilites to work properly
        return "draw";
    };

    document.getElementById('playerScore').textContent = "PLAYER: "+ humanScore;
    document.getElementById('computerScore').textContent = "COMPUTER: "+ computerScore;

    if (humanScore === maxPoints || computerScore === maxPoints) {
        document.getElementById('consoleText').textContent = "The Game is over, click on the button to play again!";
        document.getElementById("rockbutton").style.display = "none";
        document.getElementById("scissorsbutton").style.display = "none";
        document.getElementById("paperbutton").style.display = "none";
        document.getElementById("playagain").style.display = "block"; 
    };
};

function resetGame(buttonClick) {
    if (buttonClick === 'play'){
        humanScore = 0;
        computerScore = 0;
        drawScore = 0;
        document.getElementById('consoleHumanChoice').textContent = '';
        document.getElementById('consoleComputerChoice').textContent = '';
        document.getElementById('consoleText').textContent = "FIRST TO FIVE POINTS WIN! GOOD LUCK!";
        document.getElementById('playerScore').textContent = "PLAYER: "+ humanScore;
        document.getElementById('computerScore').textContent = "COMPUTER: "+ computerScore;
        document.getElementById('drawScore').textContent = "DRAWS: "+ drawScore;
        document.getElementById("rockbutton").style.display = "block";
        document.getElementById("scissorsbutton").style.display = "block";
        document.getElementById("paperbutton").style.display = "block";
        document.getElementById("playagain").style.display = "none";
    };

};