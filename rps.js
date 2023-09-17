

// Get the Users choice
const playerSelectionTest = "rock";
function getPlayerChoice() {
    let choice = null;
    while (choice == null) {
        choice = prompt("Enter your next choice (rock/paper/scissors)");
    }    

    return choice.toLowerCase();
}

// Get the Computer Choice
function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);

    console.log("Computer is locked in and ready ...");

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    }

    return null;
}

// Will return an integer outlining the outcome
// 1:  Player Wins
// 0:  Tie
// -1: Computer Wins
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 0;
    }

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {    
                case "paper":
                    return -1;
                case "scissors":
                    return 1;
            }
            break;

        case "paper":
            switch (computerSelection) {    
                case "scissors":
                    return -1;
                case "rock":
                    return 1;
            }
            break;

        case "scissors":
            switch (computerSelection) {  
                case "rock":
                    return -1;  
                case "paper":
                    return 1;
            }
            break;
    }
}

function game() {

    console.log("*** Rock, Paper, Scissors - 5 Round Match ***");

    let playerScore = 0;
    let computerScore = 0;

    // play the game for 5 rounds
    for (let round=1; round<=5; round++) {  
        console.log("Round:" + round);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        console.log(" ");

        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        console.log("Player Choice: " + playerChoice);
        console.log("Computer Choice: " + computerChoice);

        result = playRound(playerChoice, computerChoice);

        if (result > 0) {
            console.log("Player Wins the round.");
            playerScore++;
        } else if (result < 0) {
            console.log("Computer Wins the round.");
            computerScore++;
        } else {
            console.log("It's a tie.");
        }
        console.log(" ");
    }

    console.log("*** Match Over ***");
    console.log("Player Score:" + playerScore);
    console.log("Computer Score:" + computerScore);

    if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else if (computerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("It's a Draw!");
    }
}
        
game();