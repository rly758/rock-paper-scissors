let playerWins = 0;
let computerWins = 0;
let ties = 0;
const WIN_SCORE = 5;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {playGame("Rock")});
paperBtn.addEventListener("click", () => {playGame("Paper")});
scissorsBtn.addEventListener("click", () => {playGame("Scissors")});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1

    switch(choice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: return;
    }
}

function playRound(computerSelection, playerSelection) {
    /* format playerSelection to only first letter capitalized*/
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    let result;

    const roundDetails = document.querySelector("#roundDetails");
    
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            result = "tie";
        }
        else if (computerSelection == "Paper") {
            result = "lose";
        }
        else {
            result = "win";
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            result = "win";
        }
        else if (computerSelection == "Paper") {
            result = "tie";
        }
        else {
            result = "lose";
        }
    }
    else { /* playerSelection == "Scissors" */
        if (computerSelection == "Rock") {
            result = "lose";
        }
        else if (computerSelection == "Paper") {
            result = "win";
        }
        else {
            result = "tie";
        }
    }

    roundDetails.textContent = "You selected: " + playerSelection + ". Computer selected: " + computerSelection + ". You " + result + " this round.";

    return result;
}

function playGame(playerSelection) {
    const playerRecord = document.getElementById("playerWins");
    const computerRecord = document.getElementById("computerWins");
    const tiesRecord = document.getElementById("ties");

    let result = playRound(getComputerChoice(), playerSelection);

    if (result == "win") {
        playerWins++;
        playerRecord.textContent = "Player Wins: " + playerWins + " Wins";
    }
    else if (result == "lose") {
        computerWins++;
        computerRecord.textContent = "Computer Wins: " + computerWins + " Wins";
    }
    else {
        ties++;
        tiesRecord.textContent = "Ties: " + ties;
    }

    if (playerWins === WIN_SCORE || computerWins === WIN_SCORE) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        const record = document.querySelector(".record");
        const winMsg = document.createElement("p");
        winMsg.textContent = playerWins > computerWins ? "Congratulations! You Win!" : "Sorry! You Lose!";
        record.appendChild(winMsg);
    }
}
