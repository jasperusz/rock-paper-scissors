let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const maxPoints = 5;
document.getElementById("playagain").style.display = "none";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        console.log('Computer chose Rock!')
        return "rock"
    } else if (randomNumber === 1) {
        console.log('Computer chose Paper!')
        return "paper"
    } else {
        console.log('Computer chose Scissors!')
        return "scissors"
    };
};

function getHumanChoice(choice) {
    if (choice === 'rock') {
        console.log('You choose Rock.')
        return "rock"
    }   else if (choice === 'paper') {
        console.log('You choose Paper.')
        return "paper"
    }   else if (choice === 'scissors') {
        console.log('You choose Scissors.')
        return "scissors"
    }   else {
        console.log("That's not an option.")
    };
};

function playRound(humanChoice, computerChoice) {
    
    computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        document.getElementById('consoleText').textContent = "You scored a point!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        document.getElementById('consoleText').textContent = "You scored a point!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        document.getElementById('consoleText').textContent = "You scored a point!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        document.getElementById('consoleText').textContent = "The computer scored a point!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        document.getElementById('consoleText').textContent = "The computer scored a point!";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        document.getElementById('consoleText').textContent = "The computer scored a point!";
        computerScore++;
    } else if (humanChoice === computerChoice) {
        document.getElementById('consoleText').textContent = "It's a draw!";
        drawScore++;
        document.getElementById('drawScore').textContent = "DRAWS: "+ drawScore
        return "draw"
    };
    document.getElementById('playerScore').textContent = "PLAYER: "+ humanScore
    document.getElementById('computerScore').textContent = "COMPUTER: "+ computerScore

    if (humanScore === maxPoints || computerScore === maxPoints || drawScore === maxPoints) {
        document.getElementById('consoleText').textContent = "The Game is over, click on the button to play again!";
        document.getElementById("rockbutton").style.display = "none";
        document.getElementById("scissorsbutton").style.display = "none";
        document.getElementById("paperbutton").style.display = "none";
        document.getElementById("playagain").style.display = "block";
        
    }
};

function resetGame(buttonClick) {
    if (buttonClick === 'play'){
        humanScore = 0;
        computerScore = 0;
        drawScore = 0;
        document.getElementById('playerScore').textContent = "PLAYER: "+ humanScore
        document.getElementById('computerScore').textContent = "COMPUTER: "+ computerScore
        document.getElementById('drawScore').textContent = "DRAWS: "+ drawScore
        
        document.getElementById("rockbutton").style.display = "block";
        document.getElementById("scissorsbutton").style.display = "block";
        document.getElementById("paperbutton").style.display = "block";
        document.getElementById("playagain").style.display = "none";
    }

}