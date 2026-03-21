let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

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
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Você marcou um ponto!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Você marcou um ponto!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Você marcou um ponto!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("O computador marcou um ponto!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("O computador marcou um ponto!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("O computador marcou um ponto!");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw!")
        drawScore++;
        return "draw"
    };
    console.log('Seus pontos:' + humanScore)
    console.log('Pontos da maquina:' + computerScore)
    console.log('Empates:' + drawScore)
};
