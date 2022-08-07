

// Obtain the computer's choice using a function that returns a randomized number
// corresponding to either rock, paper or scissors

// #0 Corresponds to rock, #1 to paper and #2 to scissors
// getComputerChoice returns the random tool chosen by the computer

function getComputerChoice() {

    let computerNum = Math.floor(Math.random() * 3)

    let computerChoice = ""

    if (computerNum === 0) {
        computerChoice = "rock"
    }


    else if (computerNum === 1) {
        computerChoice = "paper"
    }


    else {
        computerChoice = "scissors"
    }


    return computerChoice

}


// playRound is a function that calculates who wins based on the computer choice and the player selection
// It is composed of a structure of if and else if for all of the 6 possible combinations that are not ties.
// It returns a string saying who won and the tool they used to win


// initialize 
let roundResult = ""


function playRound(playerSelection, computerSelection) {

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection.toLowerCase() === computerSelection) {
        roundResult = "Tie ! Nobody Wins"
    }


    // rock

    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        roundResult = "You Win ! Rock beats Scissors"
    }


    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        roundResult = "You Lose ! Paper beats Rock"
    }




    // paper

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        roundResult = "You Win ! Paper beats rock"
    }


    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        roundResult = "You Lose ! Scissors beats Paper"
    }




    // scissors

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        roundResult = "You Win ! Scissors beats Paper"
    }


    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        roundResult = "You Lose ! Rock beats Scissors"
    }

    // failsafe to avoid wrong user inputs
    else {
        roundResult = "Wrong Input ! (Considered a Tie)"
    }

    return roundResult
}



// the function game() simulates a 5-round RPS game, keeping count of the scores of both of the opponents
// it returns a string saying if the user won or lost and displays the scoreboard


function game() {
    let countUser = 0
    let countComputer = 0

    for (let i = 0; i < 5; i++) {

        console.log(playRound(prompt("Please choose your tool !!(rock / paper/ scissors)"), getComputerChoice()))

        if (roundResult.slice(0, 7) === "You Win") {
            countUser = countUser + 1
        }

        else if (roundResult.slice(0, 3) === "Tie") {
            countUser = countUser
        }

        else if (roundResult.slice(0, 8) === "You Lose") {
            countComputer = countComputer + 1
        }


    }


    if (countUser > countComputer) {
        return `You won the game !!! The score is ${countUser} - ${countComputer}`
    }

    else if (countUser === countComputer) {
        return `It is a tie !!! The score is ${countUser} - ${countComputer}`
    }

    else {
        return `You lost the game. The score is ${countUser} - ${countComputer}`
    }

}