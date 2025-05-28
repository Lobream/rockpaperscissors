console.log("Hello World!")
console.log("Welcome to the world of Rock,\n Paper and Scissors, where you\n will fight against a rock,\n paper or scissor using a\n scissor, paper, or rock!")

function getComputerChoice() { 
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function getHumanChoice() {
    const input = prompt("Enter rock, paper, or scissors:").toLowerCase()
    const validChoices = ["rock", "paper", "scissors"]
    if (validChoices.includes(input)) {
        return input
    } else {
        alert("This is not an option! Try again.")
        return getHumanChoice()
    }
}

let humanScore = 0
let computerScore = 0

function playRound(getHumanChoice, getComputerChoice) {
    console.log(`Me: ${getHumanChoice}`)
    console.log(`Computer: ${getComputerChoice}`)

    if (getHumanChoice === getComputerChoice) {
        console.log("It's a tie!")
    } else if (
        (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper")
    ) {
    console.log("You won this round!")
    humanScore++
    } else {
        console.log("You lose to the computer!")
        computerScore++
    }
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`)
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`)
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
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