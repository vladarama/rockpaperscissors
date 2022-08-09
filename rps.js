

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


// we create 3 event listener that connect to each of the weapons (buttons)
// we modified the game function to manipulate the dom tree
// the game function is called in each of the event listeners with the only change being the player selection



// get the buttons
const rock = document.querySelector('#rock')

const paper = document.querySelector('#paper')

const scissors = document.querySelector('#scissors')

// get the results div for the score and the final results
const div = document.querySelector(".results")


// create a div for the round result
const round = document.createElement('div')

// create a div for the final result
const final = document.createElement('div')


// create another div for the score
const score = document.createElement('div')



// initialize the count of the user and computer
let countUser = 0
let countComputer = 0






// create 'click' event listeners for each of the buttons 

rock.addEventListener('click', () => {

    playerSelection = "rock"

    game()

})



paper.addEventListener('click', () => {

    playerSelection = "paper"

    game()



})




scissors.addEventListener('click', () => {

    playerSelection = "scissors"

    game()

})








function game() {


    // play round and log it to the console
    console.log(playRound(playerSelection, getComputerChoice()))

    // incrementing the counters
    if (roundResult.slice(0, 7) === "You Win") {
        countUser = countUser + 1
    }

    else if (roundResult.slice(0, 3) === "Tie") {
        countUser = countUser
    }

    else if (roundResult.slice(0, 8) === "You Lose") {
        countComputer = countComputer + 1
    }



    // print the score on the screen
    score.textContent = `USER SCORE (${countUser}) - COMPUTER SCORE (${countComputer})`

    div.appendChild(score)


    // print the round results on the screen
    round.textContent = roundResult

    div.appendChild(round)


    // print the winner of the game
    if (countUser === 5) {

        final.textContent = `Congrats, You won the game !!! The score is ${countUser} - ${countComputer}`

        div.appendChild(final)

    }


    else if (countComputer === 5) {

        final.textContent = `You will get them next time ! The score is ${countUser} - ${countComputer}`

        div.appendChild(final)

    }


    if (countComputer >= 6 || countUser >= 6) {

        // reset the counter (game is finished)
        countComputer = 0
        countUser = 0

        location.reload()

    }




}


