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

    if (result == "win") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    } 
    else if (result == "lose") {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else {
        console.log("It's a Tie! ");
    }

    return result;
}

function playGame() {
    const ROUNDS = 5;
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    console.log("We will play " + ROUNDS + " of Rock, Paper, Scissors.");

    for (let i=0;i<ROUNDS;i++) {
        let playerSelection = prompt("Round " + (i+1) + " - Choose Rock, Paper, or Scissors: ");

        let result = playRound(getComputerChoice(), playerSelection);

        if (result == "win") {
            playerWins++;
        }
        else if (result == "lose") {
            computerWins++;
        }
        else {
            ties++;
        }

        console.log("Player Wins: " + playerWins);
        console.log("Computer Wins: " + computerWins);
        console.log("Ties: " + ties);
    }

    if (playerWins == computerWins) {
        console.log("This game of Rock, Paper, Scissors was a tie!");
    }
    else {
        console.log(playerWins > computerWins ? "You win the game of Rock, Paper, Scissors!" : "You lose the game of Rock, Paper, Scissors!");
    }
}