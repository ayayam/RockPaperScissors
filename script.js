
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = ""

    if (randomNumber === 0) {
        computerChoice = "rock"
    } 
    if (randomNumber === 1) {
        computerChoice = "paper"
    } 
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    function getWinner() {
        if (humanScore === 5) {
            roundMessage.textContent = "You win!";
            disableButtons();
        } else if (computerScore === 5) {
            roundMessage.textContent = "Computer wins!";
            disableButtons();
        }
    }
    function playRound(humanChoice, computerChoice) {
        let lcHumanChoice = humanChoice.toLowerCase()
        if (lcHumanChoice === computerChoice) {
            roundMessage.textContent = "You tied this round! Both of you chose " + computerChoice;
            return;
        } else if ((lcHumanChoice === "rock" && computerChoice === "paper") ||
                (lcHumanChoice === "paper" && computerChoice === "scissors") ||
                (lcHumanChoice === "scissors" && computerChoice === "rock")) {
            roundMessage.textContent = "Computer wins this round! " + computerChoice + " beats " + lcHumanChoice;
            computerScore++;
            getWinner();
            return;
        } else if ((lcHumanChoice === "rock" && computerChoice === "scissors") ||
                (lcHumanChoice === "paper" && computerChoice === "rock") ||
                (lcHumanChoice === "scissors" && computerChoice === "paper")) {
            roundMessage.textContent = "You win this round! " + lcHumanChoice + " beats " + computerChoice;
            humanScore++;
            getWinner();
            return;
        }

    }

    const gameBox = document.querySelector(".gameBox");

    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    gameBox.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    gameBox.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    gameBox.appendChild(scissorsButton);

    const scoreboard = document.createElement("div");
    scoreboard.textContent = humanScore + " - " + computerScore;
    gameBox.appendChild(scoreboard);

    const roundMessage = document.createElement("div");
    gameBox.appendChild(roundMessage);

    function disableButtons() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    const computerSelection = getComputerChoice();

    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        scoreboard.textContent = humanScore + " - " + computerScore;
    })
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        scoreboard.textContent = humanScore + " - " + computerScore;
    })
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        scoreboard.textContent = humanScore + " - " + computerScore;
    })

}

playGame();

