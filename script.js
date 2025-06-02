console.log("Hello World!\n Today we present you...\n The rock, paper and scissors game! \n In case you were socially excluded from school? \n So you don't know what this game is?\n Couldn't be me??\n You choose Rock, Paper or Scissors...\n You either win or lose!\n Let's play!")
function getComputerChoice() {
    const pcChoice = Math.floor(Math.random() * 3);
    let choice;
    if (pcChoice === 0 ) {
        choice = "Rock";
    } else if (pcChoice === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    const input = prompt("What do you choose?")
    return input
    }

humanScore = 0
computerScore = 0

function playRound() {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    console.log(`You: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Congratulations! You won!")
        humanScore++
    } else {
        console.log("Damn, computer won this time!")
        computerScore++
    }
    console.log(`You: ${humanScore} | Computer: ${computerScore}`)
}

function playGame() {
    for (let round = 1; round <=5; round++) {
    console.log(`--- Round ${round} ---`)
    playRound()
    }
        console.log("\n--- Game Over ---")
    if (humanScore > computerScore) {
        console.log("You are a winner!")
    } else if (computerScore > humanScore) {
        console.log("Better luck next time!")
    } else {
        console.log("The game is a tie!")
    }
}

playGame()