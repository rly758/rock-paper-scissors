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
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } 
    else if (result == "lose") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "It's a Tie! ";
    }
}

function playGame() {}